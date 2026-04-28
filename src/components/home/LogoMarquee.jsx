import { clients } from '../../data/clients'
import Container from '../ui/Container'
import SectionLabel from '../ui/SectionLabel'

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
      <Container className="py-16 lg:py-24">
        <SectionLabel
          number="01"
          label="Roster"
          phrase="Some of the names we've shot for"
        />
        <p className="mt-6 max-w-[640px] text-mid leading-relaxed">
          From manufacturing and real estate to healthcare and technology.
          Indian enterprises and MNCs alike.
        </p>
      </Container>

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
