"use client";

export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Dotted grid background */}
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#BDE5FF" />
          </pattern>
          <pattern id="dots-sm" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#BDE5FF" opacity="0.5" />
          </pattern>
        </defs>

        {/* Background dots */}
        <rect x="0" y="0" width="480" height="480" fill="url(#dots)" opacity="0.6" />

        {/* Dashed outer ring */}
        <circle cx="240" cy="240" r="180" stroke="#BDE5FF" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="240" cy="240" r="130" stroke="#BDE5FF" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" />
        <circle cx="240" cy="240" r="80" stroke="#54AFFF" strokeWidth="1" strokeDasharray="3 6" opacity="0.5" />

        {/* Center node */}
        <circle cx="240" cy="240" r="42" fill="#007BE5" />
        <circle cx="240" cy="240" r="34" fill="white" />
        {/* TF monogram */}
        <text x="240" y="247" textAnchor="middle" fill="#007BE5" fontSize="18" fontWeight="700" fontFamily="system-ui">TF</text>

        {/* Satellite nodes on the outer ring */}
        {[
          { angle: 0,   label: "Face" },
          { angle: 60,  label: "Doc" },
          { angle: 120, label: "KYC" },
          { angle: 180, label: "AML" },
          { angle: 240, label: "SDK" },
          { angle: 300, label: "API" },
        ].map(({ angle, label }) => {
          const r = 180;
          const rad = (angle * Math.PI) / 180;
          const cx = 240 + r * Math.cos(rad);
          const cy = 240 + r * Math.sin(rad);
          return (
            <g key={label}>
              {/* connector */}
              <line
                x1="240" y1="240"
                x2={cx} y2={cy}
                stroke="#BDE5FF" strokeWidth="1" strokeDasharray="4 4"
              />
              {/* node */}
              <circle cx={cx} cy={cy} r="22" fill="white" stroke="#007BE5" strokeWidth="1.5" />
              <text x={cx} y={cy + 5} textAnchor="middle" fill="#007BE5" fontSize="11" fontWeight="600" fontFamily="system-ui">
                {label}
              </text>
            </g>
          );
        })}

        {/* Mid ring nodes */}
        {[30, 90, 150, 210, 270, 330].map((angle) => {
          const r = 130;
          const rad = (angle * Math.PI) / 180;
          const cx = 240 + r * Math.cos(rad);
          const cy = 240 + r * Math.sin(rad);
          return (
            <circle key={angle} cx={cx} cy={cy} r="6" fill="#BDE5FF" stroke="#54AFFF" strokeWidth="1" />
          );
        })}

        {/* Pulse ring */}
        <circle cx="240" cy="240" r="52" fill="none" stroke="#007BE5" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="52;65;52" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
