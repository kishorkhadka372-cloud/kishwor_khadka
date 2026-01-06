import { Link } from "react-router-dom";
import HeroDecor from "../components/HeroDecor.jsx";
import portrait from "../assets/portrait.jpg";
import { site } from "../data/site.js";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* HERO HEADER — ABOUT */}
      <section className="relative overflow-hidden">
        <HeroDecor variant="default" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl mb-6">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                  My Story
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                Curious by nature.
                <span className="block mt-2 bg-gradient-to-r from-white/70 to-white/50 bg-clip-text text-transparent">
                  Learning-driven by choice.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                I'm a final-year Bachelor of Information Technology student who enjoys learning
                how systems work — and improving them step by step.
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
                My background includes academic IT projects, real-world web development,
                and creative photography — all connected by problem-solving, structure,
                and continuous improvement.
              </p>

              {/* Social link — LinkedIn only */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/kishwor-singh-khadka-296532246/"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white/90 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    LinkedIn
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE — VALUES / MINDSET */}
            <div className="grid gap-4 sm:grid-cols-2">
              <AboutPill icon="🎯" title="Learning mindset" desc="Always improving and open to feedback." />
              <AboutPill icon="🧩" title="Problem solver" desc="Breaks problems into clear, logical steps." />
              <AboutPill icon="⚡" title="Practical thinker" desc="Focuses on real-world usability." />
              <AboutPill icon="✨" title="Detail oriented" desc="Clean UI and clear structure matter." />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative border-t border-slate-200/60 bg-white">
        <div className="relative mx-auto max-w-6xl px-6 py-20 space-y-20">
          {/* Skills */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Skills & Expertise
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard
                icon="💻"
                title="Web Development"
                items={[
                  "React + Vite",
                  "TailwindCSS UI systems",
                  "Responsive layouts",
                  "Netlify deployment",
                ]}
              />
              <InfoCard
                icon="🛠️"
                title="IT & Academic"
                items={[
                  "Troubleshooting mindset",
                  "Databases & documentation",
                  "Networking fundamentals",
                  "Team projects",
                ]}
              />
              <InfoCard
                icon="📸"
                title="Photography"
                items={[
                  "Street / food / urban",
                  "Composition & storytelling",
                  "Consistent editing style",
                ]}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let’s build something together
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Open to opportunities, collaborations, and conversations.
            </p>
            <Link
              to="/contact"
              className="inline-flex rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== Small components ===== */

function AboutPill({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="font-bold">{title}</p>
      <p className="text-sm text-white/70">{desc}</p>
    </div>
  );
}

function InfoCard({ icon, title, items }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3 text-slate-600">
        {items.map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}
