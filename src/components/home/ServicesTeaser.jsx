import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { services } from '../../data/services'

function ServiceCard({ number, title }) {
  return (
    <Link
      to="/services"
      className="group relative block border-r border-b border-soft p-8 lg:p-10 transition-colors hover:bg-soft/40"
    >
      <div className="text-xs font-medium text-mid">{number}</div>
      <h3 className="mt-6 lg:mt-8 relative inline-block text-xl lg:text-2xl font-bold text-ink tracking-tight">
        {title}
        <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-px bg-gold origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </h3>
    </Link>
  )
}

export default function ServicesTeaser() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel number="03" label="Disciplines" />
            <h2 className="mt-8 text-[clamp(40px,4.5vw,64px)] font-bold tracking-[-0.015em] leading-[1.1] text-ink">
              What we shoot<span className="text-gold">.</span>
            </h2>
            <p className="mt-6 text-mid leading-relaxed">
              Disciplines, in-house. Briefed under one roof.
            </p>
            <div className="mt-10">
              <Button to="/services" variant="text" arrow>
                See all services
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-l border-t border-soft">
              {services.map((s, i) => (
                <ServiceCard
                  key={s.id}
                  number={String(i + 1).padStart(2, '0')}
                  title={s.name}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
