import { clients } from '../../data/clients'
import Container from '../ui/Container'
import SectionLabel from '../ui/SectionLabel'

const dimmed = 'grayscale(1) brightness(0.4) opacity(0.7)'
const lit = 'grayscale(0) brightness(1) opacity(1)'

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
            <div
              key={`${c.name}-${i}`}
              aria-hidden={i >= clients.length ? 'true' : undefined}
              className="flex-shrink-0 pr-16 lg:pr-24 flex items-center"
            >
              <img
                src={`/logos/clients/${c.file}`}
                alt={c.alt}
                className="w-32 lg:w-40 h-auto object-contain transition-all duration-300"
                style={{ filter: dimmed }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = lit
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = dimmed
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
