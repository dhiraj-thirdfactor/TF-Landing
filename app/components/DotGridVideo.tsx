"use client";

import { useEffect, useRef } from "react";

interface DotGridVideoProps {
  videoSource: string;
  enableMask?: boolean;
  loopAt?: number;
  baseFPS?: number;
  className?: string;
}

// ── Dot grid ──────────────────────────────────────────────────────────────────
const DOT_GAP     = 16;
const MAX_RADIUS  = 6;
const INFLUENCE_R = 90;
const MAX_PUSH    = 28;
const LERP_SPEED  = 0.12;

// ── Fluid sim ─────────────────────────────────────────────────────────────────
const FLUID_COLOR          = { r: 0 / 255, g: 125 / 255, b: 237 / 255 }; // #007DED
const SIM_RESOLUTION       = 128;
const DYE_RESOLUTION       = 1024;
const DENSITY_DISSIPATION  = 2.5;
const VELOCITY_DISSIPATION = 1.8;
const PRESSURE_CONST       = 0.1;
const PRESSURE_ITERATIONS  = 20;
const CURL                 = 3;
const SPLAT_RADIUS         = 0.22;
const SPLAT_FORCE          = 5500;

export default function DotGridVideo({
  videoSource,
  enableMask = false,
  loopAt     = 0,
  baseFPS    = 30,
  className  = "",
}: DotGridVideoProps) {
  const wrapperRef     = useRef<HTMLDivElement>(null);
  const dotCanvasRef   = useRef<HTMLCanvasElement>(null);
  const fluidCanvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef       = useRef({ x: -9999, y: -9999 });
  const smoothMouseRef = useRef({ x: -9999, y: -9999 });

  // ── Dot grid + video ───────────────────────────────────────────────────────
  useEffect(() => {
    const wrapper   = wrapperRef.current;
    const dotCanvas = dotCanvasRef.current;
    if (!wrapper || !dotCanvas) return;

    const ctx = dotCanvas.getContext("2d", { willReadFrequently: false, alpha: true });
    if (!ctx) return;

    let offCtx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null = null;
    let offCanvas: OffscreenCanvas | HTMLCanvasElement;
    if (typeof OffscreenCanvas !== "undefined") {
      offCanvas = new OffscreenCanvas(1, 1);
      offCtx = (offCanvas as OffscreenCanvas).getContext("2d", { willReadFrequently: true }) as OffscreenCanvasRenderingContext2D;
    } else {
      offCanvas = document.createElement("canvas");
      offCtx = (offCanvas as HTMLCanvasElement).getContext("2d", { willReadFrequently: true });
    }
    if (!offCtx) return;

    const video       = document.createElement("video");
    video.src         = videoSource;
    video.autoplay    = true;
    video.muted       = true;
    video.loop        = loopAt === 0;
    video.playsInline = true;
    video.style.cssText = "position:absolute;opacity:0;pointer-events:none;width:1px;height:1px;";
    wrapper.appendChild(video);
    video.play().catch(() => {});

    const syncSize = () => {
      const w = wrapper.offsetWidth, h = wrapper.offsetHeight;
      if (!w || !h) return;
      dotCanvas.width = w; dotCanvas.height = h;
      offCanvas.width = w; offCanvas.height = h;
    };
    syncSize();
    const ro = new ResizeObserver(syncSize);
    ro.observe(wrapper);

    const INTERVAL = 1000 / baseFPS;
    let lastTs = 0, frameCount = 0, rafId = 0;

    const draw = (ts: number) => {
      rafId = requestAnimationFrame(draw);
      if (ts - lastTs < INTERVAL) return;
      lastTs = ts;
      if (video.readyState < 2) return;

      const cw = dotCanvas.width, ch = dotCanvas.height;
      if (!cw || !ch) return;

      if (loopAt > 0) {
        frameCount++;
        if (frameCount >= loopAt) { frameCount = 0; video.currentTime = 0; return; }
      }

      // Lerp smooth mouse
      const sm = smoothMouseRef.current, rm = mouseRef.current;
      sm.x += (rm.x - sm.x) * LERP_SPEED;
      sm.y += (rm.y - sm.y) * LERP_SPEED;

      // Cover-fit video onto offscreen
      const vw = video.videoWidth || cw, vh = video.videoHeight || ch;
      const vr = vw / vh, cr = cw / ch;
      let sx = 0, sy = 0, sw = vw, sh = vh;
      if (vr > cr) { sw = vh * cr; sx = (vw - sw) / 2; }
      else          { sh = vw / cr; sy = (vh - sh) / 2; }
      (offCtx as CanvasRenderingContext2D).drawImage(video, sx, sy, sw, sh, 0, 0, cw, ch);

      ctx.clearRect(0, 0, cw, ch);
      ctx.fillStyle = "#007DED";

      const cols = Math.floor(cw / DOT_GAP) + 1;
      const rows = Math.floor(ch / DOT_GAP) + 1;

      for (let row = 0; row < rows; row++) {
        const baseY = Math.round(row * DOT_GAP + DOT_GAP / 2);
        if (baseY >= ch) continue;
        let strip: ImageData | null = null;
        try { strip = (offCtx as CanvasRenderingContext2D).getImageData(0, baseY, cw, 1); }
        catch { continue; }
        const px = strip.data;

        for (let col = 0; col < cols; col++) {
          const baseX = Math.round(col * DOT_GAP + DOT_GAP / 2);
          if (baseX >= cw) continue;
          const i = baseX * 4;
          const L = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
          if (L < 10) continue;

          let drawX = baseX, drawY = baseY;
          if (sm.x > -1000) {
            const dx = baseX - sm.x, dy = baseY - sm.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < INFLUENCE_R && dist > 0.5) {
              const t = 1 - dist / INFLUENCE_R;
              const ease = t * t * (3 - 2 * t);
              const push = ease * MAX_PUSH;
              drawX = baseX + (dx / dist) * push;
              drawY = baseY + (dy / dist) * push;
            }
          }

          const radius = (L / 255) * MAX_RADIUS;
          ctx.beginPath();
          ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      video.pause(); video.src = "";
      if (video.parentNode) video.parentNode.removeChild(video);
    };
  }, [videoSource, loopAt, baseFPS]);

  // ── Fluid simulation ───────────────────────────────────────────────────────
  useEffect(() => {
    const wrapper     = wrapperRef.current;
    const fluidCanvas = fluidCanvasRef.current;
    if (!wrapper || !fluidCanvas) return;

    const syncSize = () => {
      fluidCanvas.width  = wrapper.offsetWidth;
      fluidCanvas.height = wrapper.offsetHeight;
    };
    syncSize();
    const ro = new ResizeObserver(syncSize);
    ro.observe(wrapper);

    // WebGL context
    const ctxParams = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };
    let gl: WebGLRenderingContext | null = fluidCanvas.getContext("webgl2", ctxParams) as WebGLRenderingContext | null;
    const isWebGL2 = !!gl;
    if (!gl) gl = (fluidCanvas.getContext("webgl", ctxParams) || fluidCanvas.getContext("experimental-webgl", ctxParams)) as WebGLRenderingContext | null;
    if (!gl) { ro.disconnect(); return; }
    const G = gl;

    let halfFloat: any, supportLinear: any;
    if (isWebGL2) {
      G.getExtension("EXT_color_buffer_float");
      supportLinear = G.getExtension("OES_texture_float_linear");
    } else {
      halfFloat = G.getExtension("OES_texture_half_float");
      supportLinear = G.getExtension("OES_texture_half_float_linear");
    }
    G.clearColor(0, 0, 0, 0);
    const halfFloatType = isWebGL2 ? (G as any).HALF_FLOAT : halfFloat?.HALF_FLOAT_OES;

    function supportFmt(iFmt: number, fmt: number, type: number) {
      const t = G.createTexture()!;
      G.bindTexture(G.TEXTURE_2D, t);
      G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MIN_FILTER, G.NEAREST);
      G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MAG_FILTER, G.NEAREST);
      G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_S, G.CLAMP_TO_EDGE);
      G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_T, G.CLAMP_TO_EDGE);
      G.texImage2D(G.TEXTURE_2D, 0, iFmt, 4, 4, 0, fmt, type, null);
      const fbo = G.createFramebuffer()!;
      G.bindFramebuffer(G.FRAMEBUFFER, fbo);
      G.framebufferTexture2D(G.FRAMEBUFFER, G.COLOR_ATTACHMENT0, G.TEXTURE_2D, t, 0);
      return G.checkFramebufferStatus(G.FRAMEBUFFER) === G.FRAMEBUFFER_COMPLETE;
    }
    function getSupportedFmt(iFmt: number, fmt: number, type: number): {internalFormat:number;format:number}|null {
      if (!supportFmt(iFmt, fmt, type)) {
        if (iFmt === (G as any).R16F)  return getSupportedFmt((G as any).RG16F,   (G as any).RG,   type);
        if (iFmt === (G as any).RG16F) return getSupportedFmt((G as any).RGBA16F, (G as any).RGBA, type);
        return null;
      }
      return { internalFormat: iFmt, format: fmt };
    }

    let fmtRGBA: any, fmtRG: any, fmtR: any;
    if (isWebGL2) {
      fmtRGBA = getSupportedFmt((G as any).RGBA16F, G.RGBA,           halfFloatType);
      fmtRG   = getSupportedFmt((G as any).RG16F,   (G as any).RG,   halfFloatType);
      fmtR    = getSupportedFmt((G as any).R16F,    (G as any).RED,   halfFloatType);
    } else {
      fmtRGBA = getSupportedFmt(G.RGBA, G.RGBA, halfFloatType);
      fmtRG   = getSupportedFmt(G.RGBA, G.RGBA, halfFloatType);
      fmtR    = getSupportedFmt(G.RGBA, G.RGBA, halfFloatType);
    }

    // Shader / program helpers
    const mkShader = (type: number, src: string, kw?: string[]) => {
      const s = G.createShader(type)!;
      G.shaderSource(s, kw ? kw.map(k => `#define ${k}`).join("\n") + "\n" + src : src);
      G.compileShader(s);
      return s;
    };
    const mkProg = (vs: WebGLShader, fs: WebGLShader) => {
      const p = G.createProgram()!;
      G.attachShader(p, vs); G.attachShader(p, fs); G.linkProgram(p);
      const u: Record<string, WebGLUniformLocation> = {};
      const n = G.getProgramParameter(p, G.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; i++) {
        const name = G.getActiveUniform(p, i)!.name;
        u[name] = G.getUniformLocation(p, name)!;
      }
      return { program: p, uniforms: u, bind() { G.useProgram(p); } };
    };

    const baseVS = mkShader(G.VERTEX_SHADER, `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv,vL,vR,vT,vB;
      uniform vec2 texelSize;
      void main(){
        vUv=aPosition*.5+.5;
        vL=vUv-vec2(texelSize.x,0.);vR=vUv+vec2(texelSize.x,0.);
        vT=vUv+vec2(0.,texelSize.y);vB=vUv-vec2(0.,texelSize.y);
        gl_Position=vec4(aPosition,0.,1.);
      }`);

    const copyProg  = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision mediump float;precision mediump sampler2D;
       varying highp vec2 vUv;uniform sampler2D uTexture;
       void main(){gl_FragColor=texture2D(uTexture,vUv);}`));

    const clearProg = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision mediump float;precision mediump sampler2D;
       varying highp vec2 vUv;uniform sampler2D uTexture;uniform float value;
       void main(){gl_FragColor=value*texture2D(uTexture,vUv);}`));

    const dispProg  = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision highp float;precision highp sampler2D;
       varying vec2 vUv;uniform sampler2D uTexture;
       void main(){vec3 c=texture2D(uTexture,vUv).rgb;gl_FragColor=vec4(c,max(c.r,max(c.g,c.b)));}`));

    const splatProg = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision highp float;precision highp sampler2D;
       varying vec2 vUv;uniform sampler2D uTarget;
       uniform float aspectRatio;uniform vec3 color;uniform vec2 point;uniform float radius;
       void main(){
         vec2 p=vUv-point.xy;p.x*=aspectRatio;
         gl_FragColor=vec4(texture2D(uTarget,vUv).xyz+exp(-dot(p,p)/radius)*color,1.);}`));

    const advProg   = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision highp float;precision highp sampler2D;
       varying vec2 vUv;uniform sampler2D uVelocity,uSource;
       uniform vec2 texelSize,dyeTexelSize;uniform float dt,dissipation;
       vec4 bl(sampler2D s,vec2 uv,vec2 ts){
         vec2 st=uv/ts-.5,iuv=floor(st),fuv=fract(st);
         return mix(mix(texture2D(s,(iuv+vec2(.5,.5))*ts),texture2D(s,(iuv+vec2(1.5,.5))*ts),fuv.x),
                    mix(texture2D(s,(iuv+vec2(.5,1.5))*ts),texture2D(s,(iuv+vec2(1.5,1.5))*ts),fuv.x),fuv.y);
       }
       void main(){
         #ifdef MF
           vec4 res=bl(uSource,vUv-dt*bl(uVelocity,vUv,texelSize).xy*texelSize,dyeTexelSize);
         #else
           vec4 res=texture2D(uSource,vUv-dt*texture2D(uVelocity,vUv).xy*texelSize);
         #endif
         gl_FragColor=res/(1.+dissipation*dt);}`, supportLinear ? undefined : ["MF"]));

    const divProg   = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision mediump float;precision mediump sampler2D;
       varying highp vec2 vUv,vL,vR,vT,vB;uniform sampler2D uVelocity;
       void main(){
         vec2 C=texture2D(uVelocity,vUv).xy;
         float L=texture2D(uVelocity,vL).x,R=texture2D(uVelocity,vR).x;
         float T=texture2D(uVelocity,vT).y,B=texture2D(uVelocity,vB).y;
         if(vL.x<0.)L=-C.x;if(vR.x>1.)R=-C.x;
         if(vT.y>1.)T=-C.y;if(vB.y<0.)B=-C.y;
         gl_FragColor=vec4(.5*(R-L+T-B),0.,0.,1.);}`));

    const curlProg  = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision mediump float;precision mediump sampler2D;
       varying highp vec2 vUv,vL,vR,vT,vB;uniform sampler2D uVelocity;
       void main(){gl_FragColor=vec4(.5*(texture2D(uVelocity,vR).y-texture2D(uVelocity,vL).y
         -texture2D(uVelocity,vT).x+texture2D(uVelocity,vB).x),0.,0.,1.);}`));

    const vortProg  = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision highp float;precision highp sampler2D;
       varying vec2 vUv,vL,vR,vT,vB;uniform sampler2D uVelocity,uCurl;uniform float curl,dt;
       void main(){
         float L=texture2D(uCurl,vL).x,R=texture2D(uCurl,vR).x;
         float T=texture2D(uCurl,vT).x,B=texture2D(uCurl,vB).x,C=texture2D(uCurl,vUv).x;
         vec2 f=.5*vec2(abs(T)-abs(B),abs(R)-abs(L));
         f=f/(length(f)+.0001)*curl*C;f.y*=-1.;
         gl_FragColor=vec4(clamp(texture2D(uVelocity,vUv).xy+f*dt,-1000.,1000.),0.,1.);}`));

    const presProg  = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision mediump float;precision mediump sampler2D;
       varying highp vec2 vUv,vL,vR,vT,vB;uniform sampler2D uPressure,uDivergence;
       void main(){gl_FragColor=vec4(
         (texture2D(uPressure,vL).x+texture2D(uPressure,vR).x+
          texture2D(uPressure,vB).x+texture2D(uPressure,vT).x
          -texture2D(uDivergence,vUv).x)*.25,0.,0.,1.);}`));

    const gradProg  = mkProg(baseVS, mkShader(G.FRAGMENT_SHADER,
      `precision mediump float;precision mediump sampler2D;
       varying highp vec2 vUv,vL,vR,vT,vB;uniform sampler2D uPressure,uVelocity;
       void main(){gl_FragColor=vec4(
         texture2D(uVelocity,vUv).xy-vec2(
           texture2D(uPressure,vR).x-texture2D(uPressure,vL).x,
           texture2D(uPressure,vT).x-texture2D(uPressure,vB).x),0.,1.);}`));

    // Quad blit
    G.bindBuffer(G.ARRAY_BUFFER, G.createBuffer());
    G.bufferData(G.ARRAY_BUFFER, new Float32Array([-1,-1,-1,1,1,1,1,-1]), G.STATIC_DRAW);
    G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, G.createBuffer());
    G.bufferData(G.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,1,2,0,2,3]), G.STATIC_DRAW);
    G.vertexAttribPointer(0, 2, G.FLOAT, false, 0, 0);
    G.enableVertexAttribArray(0);

    const blit = (target: any, clear = false) => {
      if (!target) {
        G.viewport(0, 0, G.drawingBufferWidth, G.drawingBufferHeight);
        G.bindFramebuffer(G.FRAMEBUFFER, null);
      } else {
        G.viewport(0, 0, target.width, target.height);
        G.bindFramebuffer(G.FRAMEBUFFER, target.fbo);
      }
      if (clear) { G.clearColor(0,0,0,1); G.clear(G.COLOR_BUFFER_BIT); }
      G.drawElements(G.TRIANGLES, 6, G.UNSIGNED_SHORT, 0);
    };

    // FBO helpers
    const mkFBO = (w: number, h: number, iF: number, f: number, t: number, p: number) => {
      G.activeTexture(G.TEXTURE0);
      const tex = G.createTexture()!;
      G.bindTexture(G.TEXTURE_2D, tex);
      G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MIN_FILTER, p);
      G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MAG_FILTER, p);
      G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_S, G.CLAMP_TO_EDGE);
      G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_T, G.CLAMP_TO_EDGE);
      G.texImage2D(G.TEXTURE_2D, 0, iF, w, h, 0, f, t, null);
      const fbo = G.createFramebuffer()!;
      G.bindFramebuffer(G.FRAMEBUFFER, fbo);
      G.framebufferTexture2D(G.FRAMEBUFFER, G.COLOR_ATTACHMENT0, G.TEXTURE_2D, tex, 0);
      G.viewport(0,0,w,h); G.clear(G.COLOR_BUFFER_BIT);
      return { tex, fbo, width:w, height:h, tsX:1/w, tsY:1/h,
               attach(id:number){G.activeTexture(G.TEXTURE0+id);G.bindTexture(G.TEXTURE_2D,tex);return id;} };
    };
    const mkDouble = (w:number,h:number,iF:number,f:number,t:number,p:number)=>{
      let a=mkFBO(w,h,iF,f,t,p),b=mkFBO(w,h,iF,f,t,p);
      return { width:w, height:h, tsX:a.tsX, tsY:a.tsY,
               get read(){return a;}, set read(v){a=v;},
               get write(){return b;}, set write(v){b=v;},
               swap(){const tmp=a;a=b;b=tmp;} };
    };

    const getRes = (res: number) => {
      let ar = G.drawingBufferWidth / G.drawingBufferHeight;
      if (ar < 1) ar = 1/ar;
      const mn = Math.round(res), mx = Math.round(res*ar);
      return G.drawingBufferWidth > G.drawingBufferHeight ? {w:mx,h:mn} : {w:mn,h:mx};
    };

    const filt = supportLinear ? G.LINEAR : G.NEAREST;
    G.disable(G.BLEND);
    const simR = getRes(SIM_RESOLUTION), dyeR = getRes(DYE_RESOLUTION);
    let dye      = mkDouble(dyeR.w, dyeR.h, fmtRGBA.internalFormat, fmtRGBA.format, halfFloatType, filt);
    let velocity = mkDouble(simR.w, simR.h, fmtRG.internalFormat,   fmtRG.format,   halfFloatType, filt);
    let divFBO   = mkFBO(simR.w, simR.h, fmtR.internalFormat, fmtR.format, halfFloatType, G.NEAREST);
    let curlFBO  = mkFBO(simR.w, simR.h, fmtR.internalFormat, fmtR.format, halfFloatType, G.NEAREST);
    let pressure = mkDouble(simR.w, simR.h, fmtR.internalFormat, fmtR.format, halfFloatType, G.NEAREST);

    // Splat
    const correctR = (r: number) => {
      const ar = fluidCanvas.width / fluidCanvas.height;
      return ar > 1 ? r * ar : r;
    };
    const splat = (x:number,y:number,dx:number,dy:number,col:{r:number,g:number,b:number}) => {
      splatProg.bind();
      G.uniform1i(splatProg.uniforms.uTarget, velocity.read.attach(0));
      G.uniform1f(splatProg.uniforms.aspectRatio, fluidCanvas.width/fluidCanvas.height);
      G.uniform2f(splatProg.uniforms.point, x, y);
      G.uniform3f(splatProg.uniforms.color, dx, dy, 0);
      G.uniform1f(splatProg.uniforms.radius, correctR(SPLAT_RADIUS/100));
      blit(velocity.write); velocity.swap();
      G.uniform1i(splatProg.uniforms.uTarget, dye.read.attach(0));
      G.uniform3f(splatProg.uniforms.color, col.r*0.35, col.g*0.35, col.b*0.35);
      blit(dye.write); dye.swap();
    };

    // Mouse / touch handlers (shared with dot canvas)
    let lastPX = -1, lastPY = -1;

    const onMouseMove = (e: MouseEvent) => {
      const rect = fluidCanvas.getBoundingClientRect();
      const sx = fluidCanvas.width / rect.width, sy = fluidCanvas.height / rect.height;
      const posX = (e.clientX - rect.left) * sx, posY = (e.clientY - rect.top) * sy;
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
      if (lastPX >= 0) {
        const dx = (posX - lastPX) / fluidCanvas.width;
        const dy = (posY - lastPY) / fluidCanvas.height;
        if (Math.sqrt(dx*dx+dy*dy) > 0.0001)
          splat(posX/fluidCanvas.width, 1-posY/fluidCanvas.height, dx*SPLAT_FORCE, -dy*SPLAT_FORCE, FLUID_COLOR);
      }
      lastPX = posX; lastPY = posY;
    };
    const onMouseLeave = () => {
      mouseRef.current.x = -9999; mouseRef.current.y = -9999;
      lastPX = -1; lastPY = -1;
    };
    const onMouseDown = (e: MouseEvent) => {
      const rect = fluidCanvas.getBoundingClientRect();
      const posX = (e.clientX - rect.left) * (fluidCanvas.width/rect.width);
      const posY = (e.clientY - rect.top)  * (fluidCanvas.height/rect.height);
      const burst = { r: FLUID_COLOR.r*8, g: FLUID_COLOR.g*8, b: FLUID_COLOR.b*8 };
      splat(posX/fluidCanvas.width, 1-posY/fluidCanvas.height,
            8*(Math.random()-.5), 25*(Math.random()-.5), burst);
    };
    const onTouchMove = (e: TouchEvent) => {
      const rect = fluidCanvas.getBoundingClientRect();
      const t = e.touches[0];
      const posX = (t.clientX - rect.left) * (fluidCanvas.width/rect.width);
      const posY = (t.clientY - rect.top)  * (fluidCanvas.height/rect.height);
      mouseRef.current.x = posX; mouseRef.current.y = posY;
      if (lastPX >= 0) {
        const dx = (posX - lastPX) / fluidCanvas.width, dy = (posY - lastPY) / fluidCanvas.height;
        splat(posX/fluidCanvas.width, 1-posY/fluidCanvas.height, dx*SPLAT_FORCE, -dy*SPLAT_FORCE, FLUID_COLOR);
      }
      lastPX = posX; lastPY = posY;
    };
    const onTouchEnd = () => {
      mouseRef.current.x = -9999; mouseRef.current.y = -9999; lastPX=-1; lastPY=-1;
    };

    wrapper.addEventListener("mousemove",  onMouseMove);
    wrapper.addEventListener("mouseleave", onMouseLeave);
    wrapper.addEventListener("mousedown",  onMouseDown);
    wrapper.addEventListener("touchmove",  onTouchMove, { passive: true });
    wrapper.addEventListener("touchend",   onTouchEnd);

    // Fluid animation loop
    let lastTime = performance.now(), fluidRaf = 0;

    const step = () => {
      fluidRaf = requestAnimationFrame(step);
      const now = performance.now();
      const dt  = Math.min((now - lastTime) / 1000, 0.016666);
      lastTime  = now;

      G.disable(G.BLEND);

      curlProg.bind();
      G.uniform2f(curlProg.uniforms.texelSize, velocity.tsX, velocity.tsY);
      G.uniform1i(curlProg.uniforms.uVelocity, velocity.read.attach(0));
      blit(curlFBO);

      vortProg.bind();
      G.uniform2f(vortProg.uniforms.texelSize, velocity.tsX, velocity.tsY);
      G.uniform1i(vortProg.uniforms.uVelocity, velocity.read.attach(0));
      G.uniform1i(vortProg.uniforms.uCurl, curlFBO.attach(1));
      G.uniform1f(vortProg.uniforms.curl, CURL);
      G.uniform1f(vortProg.uniforms.dt, dt);
      blit(velocity.write); velocity.swap();

      divProg.bind();
      G.uniform2f(divProg.uniforms.texelSize, velocity.tsX, velocity.tsY);
      G.uniform1i(divProg.uniforms.uVelocity, velocity.read.attach(0));
      blit(divFBO);

      clearProg.bind();
      G.uniform1i(clearProg.uniforms.uTexture, pressure.read.attach(0));
      G.uniform1f(clearProg.uniforms.value, PRESSURE_CONST);
      blit(pressure.write); pressure.swap();

      presProg.bind();
      G.uniform2f(presProg.uniforms.texelSize, velocity.tsX, velocity.tsY);
      G.uniform1i(presProg.uniforms.uDivergence, divFBO.attach(0));
      for (let i = 0; i < PRESSURE_ITERATIONS; i++) {
        G.uniform1i(presProg.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write); pressure.swap();
      }

      gradProg.bind();
      G.uniform2f(gradProg.uniforms.texelSize, velocity.tsX, velocity.tsY);
      G.uniform1i(gradProg.uniforms.uPressure, pressure.read.attach(0));
      G.uniform1i(gradProg.uniforms.uVelocity, velocity.read.attach(1));
      blit(velocity.write); velocity.swap();

      advProg.bind();
      G.uniform2f(advProg.uniforms.texelSize, velocity.tsX, velocity.tsY);
      if (!supportLinear) G.uniform2f(advProg.uniforms.dyeTexelSize, velocity.tsX, velocity.tsY);
      const vId = velocity.read.attach(0);
      G.uniform1i(advProg.uniforms.uVelocity, vId);
      G.uniform1i(advProg.uniforms.uSource,   vId);
      G.uniform1f(advProg.uniforms.dt, dt);
      G.uniform1f(advProg.uniforms.dissipation, VELOCITY_DISSIPATION);
      blit(velocity.write); velocity.swap();

      if (!supportLinear) G.uniform2f(advProg.uniforms.dyeTexelSize, dye.tsX, dye.tsY);
      G.uniform1i(advProg.uniforms.uVelocity, velocity.read.attach(0));
      G.uniform1i(advProg.uniforms.uSource,   dye.read.attach(1));
      G.uniform1f(advProg.uniforms.dissipation, DENSITY_DISSIPATION);
      blit(dye.write); dye.swap();

      // Render fluid to canvas
      G.blendFunc(G.ONE, G.ONE_MINUS_SRC_ALPHA);
      G.enable(G.BLEND);
      G.viewport(0, 0, G.drawingBufferWidth, G.drawingBufferHeight);
      G.bindFramebuffer(G.FRAMEBUFFER, null);
      dispProg.bind();
      G.uniform1i(dispProg.uniforms.uTexture, dye.read.attach(0));
      G.drawElements(G.TRIANGLES, 6, G.UNSIGNED_SHORT, 0);
    };

    fluidRaf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(fluidRaf);
      ro.disconnect();
      wrapper.removeEventListener("mousemove",  onMouseMove);
      wrapper.removeEventListener("mouseleave", onMouseLeave);
      wrapper.removeEventListener("mousedown",  onMouseDown);
      wrapper.removeEventListener("touchmove",  onTouchMove);
      wrapper.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  const maskStyle: React.CSSProperties = enableMask
    ? {
        maskImage: "radial-gradient(ellipse 75% 55% at 50% 50%, black 20%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 55% at 50% 50%, black 20%, transparent 100%)",
      }
    : {};

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Layer 1: dot grid video */}
      <canvas
        ref={dotCanvasRef}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          display: "block", zIndex: 1,
          pointerEvents: "none",
          ...maskStyle,
        }}
      />
      {/* Layer 2: #007DED fluid trail — screen blend creates a glowing blue ink effect over the dots */}
      <canvas
        ref={fluidCanvasRef}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          display: "block", zIndex: 2,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}