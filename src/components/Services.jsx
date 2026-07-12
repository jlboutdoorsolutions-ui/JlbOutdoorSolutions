import services from '../data/services.json'
import { Icon } from './Icon.jsx'

const MATERIAL_STYLES = {
  concrete: { bg: 'bg-concretelight', text: 'text-ink', accent: 'text-ink/50' },
  blacktop: { bg: 'bg-blacktop', text: 'text-cream', accent: 'text-cream/50' },
  stone: { bg: 'bg-stonelight', text: 'text-ink', accent: 'text-ink/50' },
}

function formatRate(service) {
  if (service.unit === 'visit') {
    return `$${service.lowRate}–$${service.highRate} / visit`
  }
  const unitShort = service.unit === 'sqft' ? 'sq ft' : 'linear ft'
  return `$${service.lowRate}–$${service.highRate} / ${unitShort}`
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-display uppercase tracking-[0.25em] text-xs text-rust">What We Do</span>
          <h2 className="font-display uppercase text-4xl md:text-5xl text-ink mt-3 leading-[1.05]">
            Seven services, one crew you can count on.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const style = MATERIAL_STYLES[service.material]
            return (
              <div
                key={service.id}
                className={`${style.bg} ${style.text} rounded-sm p-6 flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1`}
              >
                <div>
                  <Icon name={service.icon} className={`w-8 h-8 mb-4 ${style.accent}`} />
                  <h3 className="font-display uppercase text-xl tracking-wide">{service.name}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${style.text === 'text-cream' ? 'text-cream/80' : 'text-ink/75'}`}>
                    {service.shortDescription}
                  </p>
                </div>
                <div className={`mt-6 pt-4 border-t ${style.text === 'text-cream' ? 'border-cream/20' : 'border-ink/15'} flex items-center justify-between`}>
                  <span className="font-mono text-sm font-semibold">{formatRate(service)}</span>
                  <a
                    href="#estimator"
                    className={`text-xs font-display uppercase tracking-wide underline underline-offset-4 ${style.text === 'text-cream' ? 'decoration-cream/50 hover:decoration-cream' : 'decoration-ink/40 hover:decoration-ink'}`}
                  >
                    Estimate
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
