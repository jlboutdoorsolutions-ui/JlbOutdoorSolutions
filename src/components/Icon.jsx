const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, className = 'w-7 h-7' }) {
  switch (name) {
    case 'concrete':
      return (
        <svg viewBox="0 0 32 32" className={className} {...common}>
          <rect x="4" y="10" width="24" height="14" />
          <path d="M4 17h24M11 10v14M20 10v14" />
        </svg>
      )
    case 'spray':
      return (
        <svg viewBox="0 0 32 32" className={className} {...common}>
          <path d="M12 12h6l2-4h-8z" />
          <rect x="10" y="12" width="10" height="14" rx="1" />
          <path d="M24 10l3-2M25 14h3M23 6l2-2" />
        </svg>
      )
    case 'seal':
      return (
        <svg viewBox="0 0 32 32" className={className} {...common}>
          <path d="M6 22c4-10 8-4 10-10s6 2 10-6" />
          <path d="M6 26h20" />
        </svg>
      )
    case 'pavers':
      return (
        <svg viewBox="0 0 32 32" className={className} {...common}>
          <rect x="4" y="6" width="9" height="7" />
          <rect x="15" y="6" width="13" height="7" />
          <rect x="4" y="15" width="13" height="7" />
          <rect x="19" y="15" width="9" height="7" />
          <rect x="4" y="24" width="24" height="2" />
        </svg>
      )
    case 'wall':
      return (
        <svg viewBox="0 0 32 32" className={className} {...common}>
          <rect x="4" y="20" width="24" height="6" />
          <rect x="4" y="14" width="10" height="6" />
          <rect x="16" y="14" width="12" height="6" />
          <rect x="4" y="8" width="24" height="6" />
        </svg>
      )
    case 'erosion':
      return (
        <svg viewBox="0 0 32 32" className={className} {...common}>
          <path d="M4 24c4-10 8-14 12-14s8 4 12 14" />
          <path d="M8 10v-4M12 8V4M16 7V3" />
        </svg>
      )
    case 'snow':
      return (
        <svg viewBox="0 0 32 32" className={className} {...common}>
          <path d="M16 4v24M6 10l20 12M26 10L6 22" />
        </svg>
      )
    default:
      return null
  }
}
