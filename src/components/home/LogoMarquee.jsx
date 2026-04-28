import { clients } from '../../data/clients'

const styleClasses = {
  sans: 'font-sans font-normal',
  'sans-bold': 'font-sans font-bold tracking-tight',
  serif: 'font-serif font-normal',
  'serif-italic': 'font-serif italic',
}

export default function LogoMarquee() {
  const doubled = [...clients, ...clients]

  return (
    <section className="bg-white pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.08em]">
          <span className="text-mid">01 / Roster</span>
          <span className="text-mid" aria-hidden="true">·</span>
          <span className="text-ink">Some of the names we've shot for</span>
        </div>
        <p className="mt-6 max-w-[640px] text-mid leading-relaxed">
          From manufacturing and real estate to healthcare and technology.
          Indian enterprises and MNCs alike.
        </p>
      </div>

      <div className="marquee-wrap relative w-full overflow-hidden marquee-mask h-[80px] lg:h-[120px]">
        <div className="marquee-track flex h-full items-center">
          {doubled.map((c, i) => (
            <span
              key={`${c.name}-${i}`}
              aria-hidden={i >= clients.length ? 'true' : undefined}
              className={`${styleClasses[c.style]} text-2xl lg:text-3xl text-mid hover:text-ink transition-colors whitespace-nowrap shrink-0 pr-16 lg:pr-24`}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
