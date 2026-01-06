import { useMemo, useState, useEffect } from "react";
import HeroDecor from "../components/HeroDecor.jsx";

// 🔥 Auto-import ALL images from photography folder
const images = import.meta.glob(
  "../assets/photography/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

export default function Photography() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Convert object → array
  const photos = useMemo(() => Object.values(images), []);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, selectedIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedIndex(null), 300);
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <HeroDecor variant="photography" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl mb-6">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                Photography Portfolio
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Visual Stories
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-white/60 font-light leading-relaxed">
              A continuously growing collection of moments — captured organically, arranged as a visual collage.
            </p>

            {/* Stats */}
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-white">{photos.length}</p>
                <p className="mt-1 text-sm text-white/50 uppercase tracking-wider">Photos</p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-4xl font-bold text-white">∞</p>
                <p className="mt-1 text-sm text-white/50 uppercase tracking-wider">Moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLAGE GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40 break-inside-avoid shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer w-full"
            >
              <img
                src={src}
                alt={`Photography ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay with expand icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <div className="rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty state */}
        {photos.length === 0 && (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4">
              <svg className="w-8 h-8 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-white/60 font-semibold">No photos found</p>
            <p className="text-white/40 text-sm mt-2">
              Add images to <code className="bg-white/5 px-2 py-1 rounded">src/assets/photography</code>
            </p>
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {isLightboxOpen && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[102] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-3 text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 z-[102] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3">
            <span className="text-sm font-bold text-white">
              {selectedIndex + 1} / {photos.length}
            </span>
          </div>

          {/* Navigation hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[102] flex items-center gap-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3">
            <div className="flex items-center gap-2">
              <kbd className="rounded bg-white/10 px-2 py-1 text-xs font-bold text-white">←</kbd>
              <span className="text-sm text-white/70">Previous</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <kbd className="rounded bg-white/10 px-2 py-1 text-xs font-bold text-white">→</kbd>
              <span className="text-sm text-white/70">Next</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <kbd className="rounded bg-white/10 px-2 py-1 text-xs font-bold text-white">Esc</kbd>
              <span className="text-sm text-white/70">Close</span>
            </div>
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-[102] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-4 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-[102] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-4 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="flex h-full items-center justify-center p-12 md:p-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedIndex]}
              alt={`Photography ${selectedIndex + 1}`}
              className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}

      {/* FOOTNOTE */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>This gallery updates automatically as new photos are added locally</span>
          </div>
        </div>
      </section>
    </main>
  );
}