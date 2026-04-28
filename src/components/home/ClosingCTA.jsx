import Container from '../ui/Container'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function ClosingCTA() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <Container>
        <SectionLabel number="06" label="Brief Us" tone="dark" />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(40px,4.5vw,64px)] font-bold tracking-[-0.015em] leading-[1.1] text-white">
              Tell us what you're shooting<span className="text-gold">.</span>
            </h2>
            <p className="mt-8 text-white/70 leading-relaxed text-base md:text-lg max-w-[640px]">
              A film. An expo. A product. An event. A factory floor. In
              thirty-three years, we've likely shot it before.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Button to="/contact" variant="gold" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
