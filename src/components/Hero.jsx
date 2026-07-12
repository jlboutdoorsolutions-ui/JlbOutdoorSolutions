import siteConfig from '../data/siteConfig.json'
import logo from '../assets/logo.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-cream">
      {/* subtle oversized watermark tree, cropped off-canvas */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-24 -bottom-24 w-[420px] md:w-[560px] opacity-[0.07] rotate-[6deg]"
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          {/* stamp badge */}
          <div className="inline-flex items-center gap-2 stamp-rotate border-2 border-rust text-rust font-display uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-rust" />
            {siteConfig.city} — Locally Owned
          </div>

          <h1 className="font-display uppercase text-ink leading-[0.95] text-5xl sm:text-6xl md:text-7xl tracking-tight">
            Concrete, hardscape
            <br />
            <span className="text-rust">&amp; outdoor work,</span>
            <br />
            built to last.
          </h1>

          <p className="mt-7 max-w-xl text-lg text-ink/75 font-body leading-relaxed">
            {siteConfig.businessName} handles the flatwork, cleaning, sealing, and hardscaping
            projects around your property — plus winter driveway service when the snow flies.
            Serving the {siteConfig.city} metro.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#estimator"
              className="inline-flex items-center gap-2 bg-rust text-cream font-display uppercase tracking-wide px-7 py-3.5 rounded-sm hover:bg-rustdark transition-colors"
            >
              Get a Ballpark Estimate
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-ink text-ink font-display uppercase tracking-wide px-7 py-3.5 rounded-sm hover:bg-ink hover:text-cream transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* teaser work-order ticket — previews the estimator tool below */}
        <div className="relative bg-paper border-2 border-ink/15 rounded-sm shadow-xl p-6 rotate-2">
          <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 pb-3 mb-4">
            <span className="font-display uppercase tracking-widest text-xs text-ink/60">Job Ticket</span>
            <span className="font-mono text-xs text-ink/50">No. 0142</span>
          </div>
          <dl className="space-y-3 font-mono text-sm text-ink/80">
            <div className="flex justify-between">
              <dt>Concrete Flatwork</dt>
              <dd>$7.50–$10.50 / sq ft</dd>
            </div>
            <div className="flex justify-between">
              <dt>Driveway Sealing</dt>
              <dd>$0.25–$0.40 / sq ft</dd>
            </div>
            <div className="flex justify-between">
              <dt>Hardscaping</dt>
              <dd>$17–$29 / sq ft</dd>
            </div>
            <div className="flex justify-between">
              <dt>Snow Removal</dt>
              <dd>$40–$86 / visit</dd>
            </div>
          </dl>
          <div className="mt-5 pt-4 border-t-2 border-dashed border-ink/20 flex items-center justify-between">
            <span className="font-display uppercase text-xs tracking-widest text-ink/60">Full estimator ↓</span>
            <span className="stamp-rotate border border-rust text-rust text-[10px] font-display uppercase tracking-widest px-2 py-1 rounded-full">
              Ballpark only
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
