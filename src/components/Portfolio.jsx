import portfolio from '../data/portfolio.json'
import services from '../data/services.json'

function serviceName(id) {
  return services.find((s) => s.id === id)?.name ?? id
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-display uppercase tracking-[0.25em] text-xs text-rust">Portfolio</span>
          <h2 className="font-display uppercase text-4xl md:text-5xl text-ink mt-3 leading-[1.05]">
            Recent work.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project) => (
            <div key={project.id} className="group">
              <div className="aspect-[4/3] bg-stonelight rounded-sm overflow-hidden relative">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-ink/40 px-6 text-center gap-2">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="7" width="28" height="22" rx="1" />
                      <circle cx="12" cy="14" r="2.5" />
                      <path d="M4 24l8-8 6 6 5-5 9 9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-body">Photo coming soon</span>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <span className="font-display uppercase text-xs tracking-widest text-rust">
                  {serviceName(project.service)}
                </span>
                <h3 className="font-display uppercase text-lg text-ink mt-1">{project.title}</h3>
                <p className="text-sm text-ink/60 mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink/50 max-w-xl">
          Adding a project: drop a photo in <code className="bg-ink/5 px-1.5 py-0.5 rounded">public/portfolio/</code>,
          then add an entry to <code className="bg-ink/5 px-1.5 py-0.5 rounded">src/data/portfolio.json</code> pointing
          <code className="bg-ink/5 px-1.5 py-0.5 rounded ml-1">imageUrl</code> at it.
        </p>
      </div>
    </section>
  )
}
