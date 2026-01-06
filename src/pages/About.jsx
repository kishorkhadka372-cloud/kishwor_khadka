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
                how systems work — and improving them step by step. I'm not just focused on
                results, but on understanding the process behind them.
              </p>
              
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
                My background includes academic IT projects, real-world web development,
                and creative photography — all connected by problem-solving, structure,
                and continuous improvement.
              </p>

              {/* Social links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white/90 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    GitHub
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white/90 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    LinkedIn
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE — VALUES / MINDSET */}
            <div className="grid gap-4 sm:grid-cols-2">
              <AboutPill
                icon="🎯"
                title="Learning mindset"
                desc="I'm always improving, open to feedback, and willing to learn new tools."
              />
              <AboutPill
                icon="🧩"
                title="Problem solver"
                desc="I approach challenges logically and break them down step by step."
              />
              <AboutPill
                icon="⚡"
                title="Practical thinker"
                desc="I value real-world usability over just theory."
              />
              <AboutPill
                icon="✨"
                title="Detail oriented"
                desc="Clean UI, clear structure, and thoughtful design matter to me."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative border-t border-slate-200/60 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/50 pointer-events-none" />
        
        <div className="relative mx-auto max-w-6xl px-6 py-20 space-y-20">
          {/* Skills Section */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
                  What I Do
                </span>
              </div>
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
                  "Responsive layout + components",
                  "Deployment (Netlify)",
                ]}
              />
              <InfoCard
                icon="🛠️"
                title="IT & Academic"
                items={[
                  "Troubleshooting mindset",
                  "Databases + documentation",
                  "Networking fundamentals",
                  "Team projects & version control",
                ]}
              />
              <InfoCard
                icon="📸"
                title="Photography"
                items={[
                  "Street / food / urban",
                  "Composition + storytelling",
                  "Curated gallery workflow",
                  "Consistency in editing style",
                ]}
              />
            </div>
          </div>

          {/* How I Work */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/50 to-white shadow-xl shadow-slate-900/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/5 via-emerald-500/5 to-transparent rounded-full blur-3xl" />
            
            <div className="relative p-10 md:p-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  My Approach
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                How I work
              </h2>
              
              <p className="mt-5 max-w-3xl text-lg text-slate-600 leading-relaxed">
                I like building with structure: clear goals, clean UI, reusable components,
                and a focus on usability. I'm comfortable learning new tools fast, and I
                enjoy collaborating in teams. If something breaks, I troubleshoot step-by-step
                until it's fixed.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="group rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/30 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    View Portfolio
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  to="/photography"
                  className="group rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    View Photography
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  to="/contact"
                  className="group rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.1),transparent)]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's build something together
              </h3>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                I'm always open to new opportunities, collaborations, and conversations about technology, design, and creative projects.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-2xl hover:shadow-white/20 hover:scale-105"
              >
                Start a Conversation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutPill({ icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-2xl mb-3">{icon}</div>
        <p className="text-sm font-bold text-white mb-2">{title}</p>
        <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, items }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">{icon}</div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </div>
        
        <ul className="space-y-3 text-slate-600">
          {items.map((x) => (
            <li key={x} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-2" />
              <span className="leading-relaxed">{x}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}