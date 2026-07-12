import { useMemo, useState } from 'react'
import services from '../data/services.json'
import siteConfig from '../data/siteConfig.json'

const SNOW_SIZE_OPTIONS = [
  { id: 'small', label: '1-car driveway', multiplier: 1 },
  { id: 'medium', label: '2-car driveway', multiplier: 1.4 },
  { id: 'large', label: '3-car+ / long driveway', multiplier: 1.8 },
]

const money = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export default function Estimator() {
  const [serviceId, setServiceId] = useState(services[0].id)
  const [size, setSize] = useState('')
  const [snowSize, setSnowSize] = useState(SNOW_SIZE_OPTIONS[1].id)
  const [snowSeasonal, setSnowSeasonal] = useState(false)

  const service = services.find((s) => s.id === serviceId)

  const result = useMemo(() => {
    if (!service) return null

    if (service.unit === 'visit') {
      if (snowSeasonal) {
        return { low: service.seasonalLow, high: service.seasonalHigh, label: 'per season' }
      }
      const mult = SNOW_SIZE_OPTIONS.find((o) => o.id === snowSize)?.multiplier ?? 1
      return {
        low: Math.round(service.lowRate * mult),
        high: Math.round(service.highRate * mult),
        label: 'per visit',
      }
    }

    const sizeNum = parseFloat(size)
    if (!sizeNum || sizeNum <= 0) return null

    let low = sizeNum * service.lowRate
    let high = sizeNum * service.highRate
    low = Math.max(low, service.minJob)
    high = Math.max(high, service.minJob)

    return { low: Math.round(low), high: Math.round(high), label: 'total' }
  }, [service, size, snowSize, snowSeasonal])

  const unitLabel =
    service?.unit === 'sqft' ? 'Square feet' : service?.unit === 'linft' ? 'Linear feet' : null

  return (
    <section id="estimator" className="py-20 md:py-28 bg-ink relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 md:px-8 relative">
        <div className="max-w-xl mb-12">
          <span className="font-display uppercase tracking-[0.25em] text-xs text-gold">
            Ballpark Estimator
          </span>
          <h2 className="font-display uppercase text-4xl md:text-5xl text-cream mt-3 leading-[1.05]">
            See a rough number before you call.
          </h2>
          <p className="mt-4 text-cream/70 leading-relaxed">
            Pick a service, enter a size, and get a range. This is a starting point for budgeting
            — not a quote.
          </p>
        </div>

        {/* the ticket */}
        <div className="bg-paper rounded-sm shadow-2xl p-6 md:p-10">
          <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 pb-4 mb-6">
            <span className="font-display uppercase tracking-widest text-sm text-ink/60">
              {siteConfig.businessName} — Job Ticket
            </span>
            <span className="stamp-rotate border-2 border-rust text-rust font-display uppercase tracking-widest text-[10px] px-3 py-1 rounded-full">
              Ballpark Only
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service-select" className="block font-display uppercase text-xs tracking-widest text-ink/60 mb-2">
                Service
              </label>
              <select
                id="service-select"
                value={serviceId}
                onChange={(e) => {
                  setServiceId(e.target.value)
                  setSize('')
                }}
                className="w-full border-2 border-ink/20 bg-cream rounded-sm px-4 py-3 font-body text-ink focus:border-rust outline-none"
              >
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
              {service?.siteVisitRequired && (
                <p className="mt-2 text-xs text-rust font-semibold">
                  ⚠ Site conditions swing this price significantly — treat this range as very rough.
                </p>
              )}
            </div>

            {service?.unit === 'visit' ? (
              <div>
                <label className="block font-display uppercase text-xs tracking-widest text-ink/60 mb-2">
                  Driveway size
                </label>
                <select
                  value={snowSize}
                  onChange={(e) => setSnowSize(e.target.value)}
                  disabled={snowSeasonal}
                  className="w-full border-2 border-ink/20 bg-cream rounded-sm px-4 py-3 font-body text-ink focus:border-rust outline-none disabled:opacity-40"
                >
                  {SNOW_SIZE_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <label className="mt-3 flex items-center gap-2 text-sm text-ink/70">
                  <input
                    type="checkbox"
                    checked={snowSeasonal}
                    onChange={(e) => setSnowSeasonal(e.target.checked)}
                    className="w-4 h-4 accent-rust"
                  />
                  Show seasonal contract price instead
                </label>
              </div>
            ) : (
              <div>
                <label htmlFor="size-input" className="block font-display uppercase text-xs tracking-widest text-ink/60 mb-2">
                  {unitLabel}
                </label>
                <input
                  id="size-input"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder={service?.unit === 'sqft' ? 'e.g. 400' : 'e.g. 120'}
                  className="w-full border-2 border-ink/20 bg-cream rounded-sm px-4 py-3 font-body text-ink focus:border-rust outline-none"
                />
                <p className="mt-2 text-xs text-ink/50">{service?.unitLabel}</p>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-dashed border-ink/20">
            {result ? (
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <span className="font-display uppercase text-xs tracking-widest text-ink/50">
                    Estimated range ({result.label})
                  </span>
                  <div className="font-mono text-4xl md:text-5xl text-ink font-semibold mt-1">
                    {money(result.low)}
                    <span className="text-ink/40 mx-2">–</span>
                    {money(result.high)}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-rust text-cream font-display uppercase tracking-wide px-6 py-3 rounded-sm hover:bg-rustdark transition-colors whitespace-nowrap"
                >
                  Request Firm Quote
                </a>
              </div>
            ) : (
              <p className="text-ink/50 font-body italic">
                {service?.unit === 'visit'
                  ? 'Choose a driveway size to see a range.'
                  : 'Enter a size above to see a range.'}
              </p>
            )}
          </div>
        </div>

        {/* disclaimer — always visible, not tucked away */}
        <div className="mt-6 flex gap-3 items-start bg-cream/10 border border-cream/20 rounded-sm p-4">
          <span className="text-gold text-lg leading-none mt-0.5">✱</span>
          <p className="text-sm text-cream/70 leading-relaxed">
            <strong className="text-cream">These are ballpark numbers only.</strong> They're built
            from typical rate ranges and a size you enter — the real price may be different once
            we see your site, your material choices, and current conditions. Nothing here is a
            binding quote. For a firm number, request a quote and we'll follow up.
          </p>
        </div>
      </div>
    </section>
  )
}
