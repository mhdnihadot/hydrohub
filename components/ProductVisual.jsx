// Clean, consistent product renders used until real product photography is added.
// kind: "purifier" | "dispenser" | "countertop" | "jug" | "flask" | "bottle" | "thermo"
// tone: body colour of the unit

function Purifier({ tone }) {
  return (
    <g>
      <rect x="62" y="34" width="76" height="132" rx="14" fill={tone} />
      <rect x="62" y="34" width="76" height="132" rx="14" fill="url(#shade)" />
      <rect x="74" y="50" width="52" height="30" rx="6" fill="#0C2236" />
      <text x="100" y="70" textAnchor="middle" fontSize="11" fontFamily="sans-serif" fill="#BCD4FF" fontWeight="600">
        TDS 38
      </text>
      <rect x="90" y="92" width="20" height="8" rx="3" fill="#C9D3E0" />
      <rect x="96" y="100" width="8" height="14" rx="3" fill="#AEBBCC" />
      <rect x="78" y="146" width="44" height="6" rx="3" fill="#0C2236" opacity="0.15" />
    </g>
  );
}

function Dispenser({ tone }) {
  return (
    <g>
      <path d="M78 22h44l6 34H72z" fill="#9EC0F5" opacity="0.85" />
      <rect x="88" y="14" width="24" height="10" rx="3" fill="#7EA6F2" />
      <rect x="66" y="56" width="68" height="124" rx="10" fill={tone} />
      <rect x="66" y="56" width="68" height="124" rx="10" fill="url(#shade)" />
      <rect x="76" y="82" width="48" height="34" rx="6" fill="#0C2236" opacity="0.9" />
      <rect x="84" y="94" width="8" height="12" rx="2" fill="#E5484D" />
      <rect x="108" y="94" width="8" height="12" rx="2" fill="#1E5EEA" />
      <rect x="80" y="118" width="40" height="4" rx="2" fill="#AEBBCC" />
    </g>
  );
}

function Countertop({ tone }) {
  return (
    <g>
      <path d="M76 36h48l6 50H70z" fill="#9EC0F5" opacity="0.85" />
      <rect x="64" y="86" width="72" height="72" rx="12" fill={tone} />
      <rect x="64" y="86" width="72" height="72" rx="12" fill="url(#shade)" />
      <rect x="86" y="104" width="28" height="10" rx="4" fill="#0C2236" />
      <rect x="76" y="140" width="48" height="6" rx="3" fill="#AEBBCC" />
    </g>
  );
}

function Jug({ tone }) {
  return (
    <g>
      <path d="M68 50h60l-4 108a10 10 0 0 1-10 9H82a10 10 0 0 1-10-9z" fill="#CFE0FB" opacity="0.9" />
      <path d="M74 96h50l-3 62a8 8 0 0 1-8 7H85a8 8 0 0 1-8-7z" fill="#7EA6F2" opacity="0.55" />
      <rect x="84" y="56" width="30" height="40" rx="8" fill="#FFFFFF" />
      <path d="M128 64c18 0 18 54 0 54" fill="none" stroke={tone} strokeWidth="9" strokeLinecap="round" />
      <path d="M64 42h70l-6 14H70z" fill={tone} />
    </g>
  );
}

function Flask({ tone }) {
  return (
    <g>
      <path d="M78 64c-10 18-10 76 0 96 4 7 40 7 44 0 10-20 10-78 0-96z" fill="#CFE0FB" opacity="0.9" />
      <path d="M76 112c-2 22 0 38 2 48 4 7 40 7 44 0 2-10 4-26 2-48z" fill="#7EA6F2" opacity="0.5" />
      <rect x="86" y="30" width="28" height="36" rx="8" fill={tone} />
      <rect x="92" y="20" width="16" height="14" rx="4" fill="#0C2236" />
    </g>
  );
}

function Bottle({ tone }) {
  return (
    <g>
      <path d="M84 46h32v14c10 8 14 18 14 30v66a12 12 0 0 1-12 12H82a12 12 0 0 1-12-12V90c0-12 4-22 14-30z" fill="#DCE8FB" />
      <path d="M70 116h60v40a12 12 0 0 1-12 12H82a12 12 0 0 1-12-12z" fill="#7EA6F2" opacity="0.5" />
      <rect x="82" y="26" width="36" height="22" rx="6" fill={tone} />
      <rect x="76" y="70" width="6" height="80" rx="3" fill="#FFFFFF" opacity="0.7" />
    </g>
  );
}

function Thermo({ tone }) {
  return (
    <g>
      <rect x="72" y="46" width="56" height="124" rx="18" fill={tone} />
      <rect x="72" y="46" width="56" height="124" rx="18" fill="url(#shade)" />
      <rect x="80" y="24" width="40" height="26" rx="8" fill="#0C2236" />
      <rect x="82" y="60" width="5" height="96" rx="2.5" fill="#FFFFFF" opacity="0.35" />
    </g>
  );
}

const shapes = { purifier: Purifier, dispenser: Dispenser, countertop: Countertop, jug: Jug, flask: Flask, bottle: Bottle, thermo: Thermo };

export default function ProductVisual({ kind, tone = "#FFFFFF", className = "" }) {
  const Shape = shapes[kind] || Bottle;
  return (
    <div className={`flex items-center justify-center bg-[#F3F5F8] ${className}`}>
      <svg viewBox="0 0 200 200" className="h-[78%] w-[78%]" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="shade" x1="0" x2="1">
            <stop offset="0" stopColor="#000" stopOpacity="0.06" />
            <stop offset="0.5" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="182" rx="52" ry="6" fill="#0C2236" opacity="0.08" />
        <Shape tone={tone} />
      </svg>
    </div>
  );
}
