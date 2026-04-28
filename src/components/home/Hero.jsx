import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="bg-white">
      <Container className="min-h-[85vh] flex flex-col justify-center py-32 lg:py-40">
        <h1 className="text-[clamp(48px,6vw,96px)] font-bold tracking-[-0.02em] leading-[1.05] text-ink">
          India's frames, since 1993<span className="text-gold">.</span>
        </h1>

        <p className="mt-8 max-w-[640px] text-base md:text-lg leading-relaxed text-mid">
          A studio out of Ahmedabad, three decades old. Filmmaking,
          photography and event coverage for India's industries, brands and
          milestones.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <Button to="/portfolio" variant="primary" size="lg" underline fullWidthMobile>
            View the Showreel
          </Button>
          <Button to="/contact" variant="text" arrow>
            Start a Conversation
          </Button>
        </div>
      </Container>
    </section>
  )
}
