export default function HeroDecor({ variant = "default" }) {
  // variants let us reuse this across pages but still tweak the look
  const variants = {
    default: {
      base: "from-slate-950 via-slate-900 to-slate-950",
      blobs: [
        "bg-fuchsia-500/25",
        "bg-cyan-400/20",
        "bg-amber-300/10",
      ],
    },
    portfolio: {
      base: "from-slate-950 via-slate-900 to-slate-950",
      blobs: [
        "bg-fuchsia-500/28",
        "bg-cyan-400/18",
        "bg-indigo-400/12",
      ],
    },
    photography: {
      base: "from-slate-950 via-slate-900 to-slate-950",
      blobs: [
        "bg-rose-400/20",
        "bg-emerald-400/12",
        "bg-cyan-400/14",
      ],
    },
  };

  const v = variants[variant] || variants.default;
  const [b1, b2, b3] = v.blobs;

  return (
    <>
      {/* Base gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${v.base}`}
        aria-hidden="true"
      />

      {/* Glow blobs (same vibe as Home) */}
      <div
        className={`absolute -top-24 -left-24 h-96 w-96 rounded-full ${b1} blur-3xl`}
        aria-hidden="true"
      />
      <div
        className={`absolute top-10 -right-24 h-96 w-96 rounded-full ${b2} blur-3xl`}
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-[-120px] left-1/3 h-[28rem] w-[28rem] rounded-full ${b3} blur-3xl`}
        aria-hidden="true"
      />

      {/* Subtle grain + vignette (makes it feel less flat) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_45%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10"
        aria-hidden="true"
      />
    </>
  );
}
