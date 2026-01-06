import { Link } from "react-router-dom";
import portrait from "../assets/portrait.jpg";
import { site } from "../data/site.js";

const YOUTUBE_URL = "https://www.youtube.com/@Un5haded";
const LINKEDIN_URL = "https://www.linkedin.com/in/kishwor-singh-khadka-296532246/";

export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden -mt-16 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute top-10 -right-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-[28rem] w-[28rem] rounded-full bg-amber-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/80">
                {site.tagline}
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Building modern web systems
                <span className="block text-white/80">
                  and visual stories — with a mindset of continuous learning.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-white/70">
                I’m a final-year Bachelor of Information Technology student with
                hands-on experience in academic IT projects, real-world web
                development, and creative photography.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow transition hover:bg-white/90"
                >
                  View Portfolio
                </Link>

                <Link
                  to="/photography"
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Photography
                </Link>

                <a
                  href={site.cvFile}
                  download
                  className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Download CV
                </a>
              </div>

              {/* Direct socials (as requested) */}
              <div className="mt-8 flex flex-wrap gap-3">
                <SocialLink href={LINKEDIN_URL} label="LinkedIn" />
                <SocialLink href={YOUTUBE_URL} label="YouTube" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="md:justify-self-end">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/10 to-amber-300/10 blur-xl" />
                <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden">
                  <img
                    src={portrait}
                    alt={site.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="relative border-t border-white/10 p-5">
                  <p className="text-sm font-semibold text-white">{site.name}</p>
                  <p className="mt-1 text-xs text-white/60">
                    Always learning. Always improving.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HERO STATS */}
          <div className="mt-16 grid gap-3 border-t border-white/10 pt-10 sm:grid-cols-3">
            <HeroStat title="IT Projects" desc="Databases, networking, system support." />
            <HeroStat title="Web Builds" desc="Newtown Pork Roll & Butcher." />
            <HeroStat title="Photography" desc="Street, food, urban, travel." />
          </div>
        </div>
      </section>

      {/* ================= PREVIEW CARDS ================= */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 space-y-16">
          <div className="grid gap-10 md:grid-cols-3">
            <PreviewCard
              title="Portfolio"
              desc="Academic IT projects and real-world web development case studies."
              to="/portfolio"
            />
            <PreviewCard
              title="Photography"
              desc="A curated visual collage that updates as I add more images."
              to="/photography"
            />
            <PreviewCard
              title="About"
              desc="My background, skills, and learning journey."
              to="/about"
            />
          </div>

          {/* ================= INFOGRAPHIC VIDEOS ================= */}
          <div className="border-t border-slate-200 pt-16">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600">
                Research & Visual Storytelling
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
                Infographic video projects
              </h2>

              <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                Research-driven infographic videos where I handled research,
                scripting, visual design, editing, and final presentation.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <VideoCard
                src="https://www.youtube.com/embed/ebe6XM_XVn0"
                title="Research-based Infographic Video"
                desc="Topic research, infographic design, structured scripting, and editing."
              />
              <VideoCard
                src="https://www.youtube.com/embed/9_imGWHXeZE"
                title="Data-driven Visual Storytelling"
                desc="Simplifying research and data into clear visual narratives."
              />
            </div>

            <div className="mt-12 text-center">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                View more on YouTube
              </a>
            </div>
          </div>

          {/* ================= CONTACT CTA ================= */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-slate-900">
              Let’s build something useful.
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              If you’d like to collaborate or discuss an opportunity, feel free to reach out.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function PreviewCard({ title, desc, to }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
      <Link
        to={to}
        className="mt-5 inline-block text-sm font-semibold text-slate-900 underline underline-offset-4"
      >
        Explore →
      </Link>
    </div>
  );
}

function VideoCard({ src, title, desc }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
      <div className="aspect-video">
        <iframe
          src={src}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function HeroStat({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-white/65">{desc}</p>
    </div>
  );
}

function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
    >
      {label}
    </a>
  );
}
