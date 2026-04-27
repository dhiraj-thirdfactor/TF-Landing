"use client";
import DotGridVideo from "../components/DotGridVideo";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home2() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        
        {/* ── Hero — full-viewport dot-grid video ─────────────────── */}
        <section
          style={{
            position: "relative",
            minHeight: "calc(100vh - 88px)",
            background: "#00274A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Dot grid fills the hero */}
          <DotGridVideo
            videoSource="/illustrations/video.mp4"
            enableMask
            loopAt={0}
            baseFPS={24}
            dotTheme="light"
            className="absolute inset-0 w-full h-full"
          />

          {/* Foreground copy */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              maxWidth: "720px",
              padding: "0 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "13px",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Identity Verification · Biometrics · Compliance
            </p>

            <h1
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              Identity infrastructure
              <br />for regulated markets
            </h1>

            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.7)",
                margin: 0,
                maxWidth: "520px",
              }}
            >
              Biometric liveness, document verification, and video KYC — built for compliance teams that can&apos;t afford false positives.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "52px",
                  padding: "0 32px",
                  borderRadius: "100px",
                  background: "#007BE5",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 500,
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  textDecoration: "none",
                  transition: "background 150ms",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#0069C2")}
                onMouseLeave={e => (e.currentTarget.style.background = "#007BE5")}
              >
                Book a Demo
              </a>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "52px",
                  padding: "0 32px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "transparent",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 500,
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  textDecoration: "none",
                  transition: "border-color 150ms, background 150ms",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                View Documentation
              </a>
            </div>

            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                margin: 0,
                letterSpacing: "0.01em",
              }}
            >
              NRB Compliant &nbsp;·&nbsp; VAPT Certified &nbsp;·&nbsp; ISO 30107-3 PAD Level 2
            </p>
          </div>
        </section>

        {/* ── DotGrid Playground — light theme on white ───────────── */}
        <section
          style={{
            background: "#F5F9FF",
            paddingTop: "96px",
            paddingBottom: "96px",
          }}
        >
          <div
            style={{
              maxWidth: "1161px",
              margin: "0 auto",
              padding: "0 140px",
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                  fontSize: "40px",
                  lineHeight: "48px",
                  letterSpacing: "-1.2px",
                  color: "#00274A",
                  margin: "0 0 12px 0",
                }}
              >
                Dot Grid — Dark Theme
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#525252",
                  margin: 0,
                }}
              >
                dotTheme=&quot;dark&quot;, enableMask=true, baseFPS=24
              </p>
            </div>

            {/* Dark theme canvas */}
            <div
              style={{
                width: "100%",
                height: "480px",
                borderRadius: "24px",
                overflow: "hidden",
                background: "#00274A",
                position: "relative",
              }}
            >
              <DotGridVideo
                videoSource="/illustrations/video.mp4"
                enableMask={true}
                loopAt={0}
                baseFPS={24}
                dotTheme="dark"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Light theme canvas */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                  fontSize: "40px",
                  lineHeight: "48px",
                  letterSpacing: "-1.2px",
                  color: "#00274A",
                  margin: "0 0 12px 0",
                }}
              >
                Dot Grid — Light Theme
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#525252",
                  margin: 0,
                }}
              >
                dotTheme=&quot;light&quot;, enableMask=false, baseFPS=30
              </p>
            </div>

            <div
              style={{
                width: "100%",
                height: "480px",
                borderRadius: "24px",
                overflow: "hidden",
                background: "#ffffff",
                border: "1px solid #E5E5E5",
                position: "relative",
              }}
            >
              <DotGridVideo
                videoSource="/illustrations/video.mp4"
                enableMask={false}
                loopAt={0}
                baseFPS={30}
                dotTheme="light"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* No mask variant */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                  fontSize: "40px",
                  lineHeight: "48px",
                  letterSpacing: "-1.2px",
                  color: "#00274A",
                  margin: "0 0 12px 0",
                }}
              >
                Dot Grid — No Mask
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#525252",
                  margin: 0,
                }}
              >
                dotTheme=&quot;dark&quot;, enableMask=false, baseFPS=15
              </p>
            </div>

            <div
              style={{
                width: "100%",
                height: "480px",
                borderRadius: "24px",
                overflow: "hidden",
                background: "#0A0F1E",
                position: "relative",
              }}
            >
              <DotGridVideo
                videoSource="/illustrations/video.mp4"
                enableMask={false}
                loopAt={0}
                baseFPS={15}
                dotTheme="dark"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
}
