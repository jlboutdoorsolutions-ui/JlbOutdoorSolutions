import siteConfig from '../data/siteConfig.json'
import logo from '../assets/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-blacktop text-cream/70 py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-10 w-10 rounded-full object-contain" />
          <div>
            <p className="font-display uppercase text-cream text-sm tracking-wide">
              {siteConfig.businessName}
            </p>
            <p className="text-xs text-cream/50">Based in {siteConfig.city}</p>
          </div>
        </div>

        <p className="text-xs text-cream/40 text-center">
          © {new Date().getFullYear()} {siteConfig.businessName}. {siteConfig.license}
        </p>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="font-mono text-sm text-gold hover:text-cream transition-colors"
        >
          {siteConfig.phone}
        </a>
      </div>
    </footer>
  )
}
