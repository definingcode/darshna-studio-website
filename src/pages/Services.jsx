import PageHero from '../components/ui/PageHero'
import SectionLabel from '../components/ui/SectionLabel'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow={<SectionLabel number="01" label="Services" />}
        headline="What we do."
        sub="Seven disciplines. One studio. Thirty-three years of practice."
      />

      <div className="bg-white">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="border-t border-soft py-16 lg:py-24"
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                <div className="lg:col-span-3">
                  <div className="text-2xl lg:text-3xl font-bold text-mid tracking-tight">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.015em] leading-[1.1] text-ink">
                    {s.name}
                  </h2>
                  <p className="mt-6 text-lg md:text-xl text-ink leading-relaxed max-w-[640px]">
                    {s.oneLine}
                  </p>
                  <p className="mt-6 text-mid leading-relaxed max-w-[640px]">
                    {s.deliver}
                  </p>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <section className="border-t border-soft py-24 lg:py-32 bg-white">
        <Container>
          <div className="max-w-[900px]">
            <p className="text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.015em] leading-[1.2] text-ink">
              If your shoot isn't on this list, ask. In thirty-three years,
              we've likely done it<span className="text-gold">.</span>
            </p>
            <div className="mt-10">
              <Button to="/contact" variant="primary" size="lg">
                Brief Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
