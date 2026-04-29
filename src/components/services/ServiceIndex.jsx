import { services } from '../../data/services'

const indexLabels = {
  filmmaking: 'Filmmaking',
  'conceptual-videos': 'Conceptual Videos',
  '3d-product-render': '3D Product Render',
  'product-shoot': 'Product Shoot',
  'corporate-shoot': 'Corporate Shoot',
  'industrial-shoot': 'Industrial Shoot',
  'exhibitions-conferences': 'Exhibitions & Conferences',
  'live-streaming': 'Live Streaming',
  'event-coverage': 'Event Coverage',
}

export default function ServiceIndex({ activeId }) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start lg:h-fit border-b border-soft pb-12 mb-12 lg:border-0 lg:pb-0 lg:mb-0">
      <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-mid mb-6">
        Index
      </div>
      <div className="w-12 h-px bg-gold mb-8" aria-hidden="true" />
      <ul className="flex flex-col gap-3.5">
        {services.map((s, i) => {
          const id = `service-${s.id}`
          const isActive = activeId === id
          return (
            <li key={s.id}>
              <a
                href={`#${id}`}
                className={`relative flex gap-3.5 items-baseline transition-colors duration-200 text-[15px] tracking-[-0.005em] no-underline ${
                  isActive ? 'text-ink font-medium' : 'text-mid hover:text-ink'
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-5 top-1/2 -translate-y-1/2 w-3 h-px bg-gold"
                  />
                )}
                <span
                  className={`font-mono text-[11px] font-normal tracking-[0.05em] w-[18px] flex-shrink-0 ${
                    isActive ? 'text-mid' : 'text-mid'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{indexLabels[s.id] || s.name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
