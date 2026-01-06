import { site } from "../data/site.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {site.brand}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              IT • Web • Photography • Continuous learning
            </p>
          </div>

          {/* Action */}
          <div>
            <a
              href={site.cvFile}
              download
              className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs text-slate-500">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
