import HeroDecor from "../components/HeroDecor.jsx";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <HeroDecor variant="contact" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white/80">
            Contact
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Let’s work together
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/60">
            Whether it’s a website, a collaboration, or a creative idea —
            feel free to reach out.
          </p>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            {/* decorative orbs */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative p-10 md:p-14">
              <h2 className="text-3xl font-bold text-white">
                Send a message
              </h2>
              <p className="mt-2 text-white/60">
                I usually respond within 24 hours.
              </p>

              {/* FORM */}
              <form
                action="https://formspree.io/f/mqeaonjy"
                method="POST"
                className="mt-10 grid gap-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Input
                    label="Your name"
                    name="name"
                    placeholder="John Doe"
                  />
                  <Input
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <Input
                  label="Subject"
                  name="subject"
                  placeholder="Project inquiry"
                />

                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Tell me about your idea or project..."
                />

                <button
                  type="submit"
                  className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-900 transition hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-white/60">
            Prefer social platforms?
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <SocialLink label="GitHub" href="#" />
            <SocialLink label="LinkedIn" href="#" />
            <SocialLink label="YouTube" href="#" />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/80">
        {label}
      </span>
      <input
        {...props}
        required
        className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30"
      />
    </label>
  );
}

function Textarea({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/80">
        {label}
      </span>
      <textarea
        {...props}
        rows={5}
        required
        className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30"
      />
    </label>
  );
}

function SocialLink({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold text-white/70 hover:bg-white/10 hover:text-white transition"
    >
      {label}
    </a>
  );
}
