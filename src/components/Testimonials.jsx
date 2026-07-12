import testimonials from '../data/testimonials.json'

function Stars({ count }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < count ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1">
          <path d="M8 1l2.1 4.6 5 .5-3.8 3.4 1.1 4.9L8 11.9 3.6 14.4l1.1-4.9L.9 6.1l5-.5L8 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-display uppercase tracking-[0.25em] text-xs text-rust">Reviews</span>
          <h2 className="font-display uppercase text-4xl md:text-5xl text-ink mt-3 leading-[1.05]">
            What customers say.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure key={t.id} className="bg-cream border-l-4 border-rust rounded-sm p-7">
              <Stars count={t.rating} />
              <blockquote className="mt-4 text-ink/80 leading-relaxed font-body text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-display uppercase text-sm tracking-wide text-ink">
                {t.name}
                <span className="block text-xs text-ink/50 font-body normal-case tracking-normal mt-0.5">
                  {t.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink/50 max-w-xl">
          Adding a review: edit <code className="bg-ink/5 px-1.5 py-0.5 rounded">src/data/testimonials.json</code> —
          each entry is just a name, location, quote, and star rating.
        </p>
      </div>
    </section>
  )
}
