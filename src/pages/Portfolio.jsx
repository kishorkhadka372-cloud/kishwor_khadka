import { useMemo, useState } from "react";
import { projects } from "../data/projects.js";
import HeroDecor from "../components/HeroDecor.jsx";

const filters = ["All", "Web", "IT"];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter(
      (p) => (p.type || "").toLowerCase() === active.toLowerCase()
    );
  }, [active]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
      {/* HERO HEADER */}
      <section className="relative overflow-hidden">
        <HeroDecor variant="portfolio" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                  Available for Opportunities
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Portfolio
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
                Web builds + university IT projects — focused on practical skills, clean UI,
                and continuous learning.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={cx(
                    "rounded-full px-6 py-3 text-sm font-bold transition-all duration-300",
                    active === f
                      ? "bg-gradient-to-r from-white to-slate-100 text-slate-900 shadow-xl shadow-white/20 scale-105"
                      : "border border-white/15 bg-white/5 text-white/85 hover:bg-white/10 hover:border-white/20"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Quick stats row */}
          <div className="mt-12 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">
            <Stat icon="🚀" title="Web Builds" value="2 Live Projects" />
            <Stat icon="💻" title="IT Projects" value="University Portfolio" />
            <Stat icon="✨" title="Style" value="Clean + Vibrant" />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative bg-gradient-to-b from-transparent via-slate-100/50 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2">
            {filtered.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onOpen={() => setSelected(p)}
              />
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white shadow-2xl shadow-slate-900/10">
            <div className="relative p-12 md:p-16">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-pink-400/10 to-orange-400/10 blur-3xl" />
              
              <div className="relative">
                <div className="inline-flex rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-2 mb-4">
                  <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-widest">
                    Continuous Growth
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Always learning, always improving
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                  I enjoy learning new tools and improving my systems thinking — from UI/UX
                  and web builds to databases, troubleshooting, and networking fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}

function Stat({ icon, title, value }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-2xl mb-2">{icon}</div>
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="mt-1 text-sm text-white/70">{value}</p>
      </div>
    </div>
  );
}

function getLiveLink(project) {
  const type = (project?.type || "").toLowerCase();
  if (type !== "web") return "";

  const live = project?.live || project?.links?.live || "";
  if (!live || live === "#") return "";
  return live;
}

function getAccent(project) {
  if (project?.accent) return project.accent;
  return (project?.type || "").toLowerCase() === "web"
    ? "from-fuchsia-500/30 via-cyan-400/20 to-amber-300/20"
    : "from-slate-900/20 via-slate-700/10 to-slate-900/5";
}

function ProjectCard({ project, onOpen }) {
  const live = getLiveLink(project);
  const accent = getAccent(project);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
      {/* Visual header with screenshot placeholder */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <div className={cx("absolute inset-0 bg-gradient-to-br", accent)} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

        {/* Floating orbs */}
        <div className="absolute top-6 right-10 h-32 w-32 rounded-full bg-gradient-to-br from-white/40 to-transparent blur-3xl transition-transform duration-700 group-hover:scale-150" />
        <div className="absolute bottom-6 left-10 h-40 w-40 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-3xl transition-transform duration-700 group-hover:scale-150" />

        {/* Mock browser/window frame */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full max-w-sm rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-xl p-3 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-red-400/80" />
              <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
              <div className="h-2 w-2 rounded-full bg-green-400/80" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 rounded bg-white/40" />
              <div className="h-2 w-1/2 rounded bg-white/30" />
              <div className="h-2 w-5/6 rounded bg-white/30" />
            </div>
          </div>
        </div>

        {/* Type badge */}
        <div className="absolute left-6 top-6 z-10">
          <p className="inline-flex rounded-full border border-slate-300/50 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 backdrop-blur-xl shadow-lg">
            {project.type}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-slate-700">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {(project.stack || []).slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={onOpen}
            className="group/btn rounded-xl border-2 border-slate-900 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-xl hover:shadow-slate-900/20 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Open Case Study
              <svg
                className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="group/btn rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/30"
            >
              <span className="flex items-center gap-2">
                Live Website
                <svg
                  className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const isAcademic = project.id === "it-projects" && project.academic;
  const live = getLiveLink(project);
  const accent = getAccent(project);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-hidden overflow-y-auto rounded-3xl bg-white shadow-2xl shadow-slate-900/50 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header gradient bar */}
        <div className="relative h-28 overflow-hidden">
          <div className={cx("absolute inset-0 bg-gradient-to-br", accent)} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2),rgba(255,255,255,0))]" />
          
          <div className="absolute top-0 right-12 h-40 w-40 rounded-full bg-gradient-to-br from-white/40 to-transparent blur-3xl" />
          <div className="absolute -bottom-12 left-12 h-48 w-48 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-3xl" />
        </div>

        {/* Title section */}
        <div className="flex items-start justify-between gap-6 border-b border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-10">
          <div className="flex-1">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {project.type}
              </p>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {project.title}
            </h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">{project.summary}</p>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-lg"
          >
            Close
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 space-y-10 bg-gradient-to-br from-white via-slate-50/30 to-white">
          {isAcademic ? (
            <>
              {project.academic.overview && (
                <Section title="Overview" icon="📋">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {project.academic.overview}
                  </p>
                </Section>
              )}

              {project.academic.projects?.length > 0 && (
                <Section title="Projects Included" icon="🎯">
                  <div className="space-y-5">
                    {project.academic.projects.map((p, idx) => (
                      <div
                        key={p.name}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl" />
                        
                        <div className="relative">
                          <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 text-sm font-bold text-white shadow-lg">
                              {idx + 1}
                            </span>
                            <div className="flex-1">
                              <p className="text-lg font-bold text-slate-900">
                                {p.name}
                              </p>
                              <p className="mt-1 text-sm font-semibold text-slate-600">
                                {p.context}
                              </p>
                            </div>
                          </div>

                          <ul className="mt-5 space-y-3 pl-14">
                            {p.bullets.map((b, bidx) => (
                              <li key={bidx} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {project.academic.outcomes?.length > 0 && (
                <Section title="Outcomes" icon="✨">
                  <ul className="space-y-3">
                    {project.academic.outcomes.map((o, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-lg text-slate-700 leading-relaxed">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 mt-2" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}
            </>
          ) : (
            project.highlights?.length > 0 && (
              <Section title="Key Highlights" icon="⭐">
                <ul className="space-y-3">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg text-slate-700 leading-relaxed">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 mt-2" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )
          )}

          <Section title="Technologies" icon="🛠️">
            <div className="flex flex-wrap gap-3">
              {(project.stack || []).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-300 bg-gradient-to-br from-white to-slate-50 px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {live && (
            <div className="pt-4">
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-slate-900/40 hover:scale-105 transition-all duration-300"
              >
                Visit Live Website
                <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, children }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-6">
        {icon && <span className="text-2xl">{icon}</span>}
        <h4 className="text-2xl font-bold text-slate-900">{title}</h4>
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}