import { useState } from 'react'
import siteConfig from '../data/siteConfig.json'
import services from '../data/services.json'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: services[0].id, message: '' })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const mailtoHref = () => {
    const serviceName = services.find((s) => s.id === form.service)?.name ?? ''
    const subject = encodeURIComponent(`Estimate request — ${serviceName}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${serviceName}\n\n${form.message}`
    )
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <span className="font-display uppercase tracking-[0.25em] text-xs text-gold">Contact</span>
          <h2 className="font-display uppercase text-4xl md:text-5xl text-cream mt-3 leading-[1.05]">
            Let's get it scheduled.
          </h2>
          <p className="mt-5 text-cream/70 leading-relaxed max-w-md">
            {siteConfig.serviceAreaNote}
          </p>

          <dl className="mt-9 space-y-5">
            <div>
              <dt className="font-display uppercase text-xs tracking-widest text-cream/50">Phone</dt>
              <dd>
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-cream text-xl font-mono hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display uppercase text-xs tracking-widest text-cream/50">Email</dt>
              <dd>
                <a href={`mailto:${siteConfig.email}`} className="text-cream text-lg font-mono hover:text-gold transition-colors">
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display uppercase text-xs tracking-widest text-cream/50">Hours</dt>
              <dd className="text-cream/80">{siteConfig.hours}</dd>
            </div>
            <div>
              <dt className="font-display uppercase text-xs tracking-widest text-cream/50">Winter Storms</dt>
              <dd className="text-cream/80">{siteConfig.emergencySnowNote}</dd>
            </div>
          </dl>

          <div className="mt-8 inline-flex items-center gap-2 stamp-rotate border-2 border-gold text-gold font-display uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full">
            {siteConfig.license}
          </div>
        </div>

        <form
          className="bg-paper rounded-sm p-6 md:p-8 shadow-2xl"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = mailtoHref()
          }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block font-display uppercase text-xs tracking-widest text-ink/60 mb-2">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={update('name')}
                className="w-full border-2 border-ink/20 bg-cream rounded-sm px-4 py-3 focus:border-rust outline-none"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="block font-display uppercase text-xs tracking-widest text-ink/60 mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={update('phone')}
                className="w-full border-2 border-ink/20 bg-cream rounded-sm px-4 py-3 focus:border-rust outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className="block font-display uppercase text-xs tracking-widest text-ink/60 mb-2">
                Service needed
              </label>
              <select
                id="service"
                value={form.service}
                onChange={update('service')}
                className="w-full border-2 border-ink/20 bg-cream rounded-sm px-4 py-3 focus:border-rust outline-none"
              >
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block font-display uppercase text-xs tracking-widest text-ink/60 mb-2">
                Project details
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="Rough size, timeline, anything we should know..."
                className="w-full border-2 border-ink/20 bg-cream rounded-sm px-4 py-3 focus:border-rust outline-none resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rust text-cream font-display uppercase tracking-wide px-7 py-3.5 rounded-sm hover:bg-rustdark transition-colors"
          >
            Send Request
          </button>
          <p className="mt-3 text-xs text-ink/50">
            Opens your email app with these details filled in. Prefer to talk it through? Call{' '}
            <a href={`tel:${siteConfig.phoneRaw}`} className="underline">{siteConfig.phone}</a>.
          </p>
        </form>
      </div>
    </section>
  )
}
