import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative bg-ink overflow-hidden">
      {/* TODO: replace src with compressed showreel cut, 1080p max ~5MB,
          muted ambient B-roll preferred over edited reel */}
      <video
        className="hero-video absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src=""
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[5] bg-gradient-to-b from-ink/40 via-ink/30 to-ink/60"
        aria-hidden="true"
      />

      <Container className="relative z-10 min-h-[85vh] flex flex-col justify-center py-32 lg:py-40">
        <h1 className="text-[clamp(48px,6vw,96px)] font-bold tracking-[-0.02em] leading-[1.05] text-white">
          India's frames, since 1993<span className="text-gold">.</span>
        </h1>

        <p className="mt-8 max-w-[640px] text-base md:text-lg leading-relaxed text-white/70">
          A studio out of Ahmedabad, three decades old. Filmmaking,
          photography and event coverage for India's industries, brands and
          milestones.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <Button to="/portfolio" variant="primary" size="lg" underline fullWidthMobile>
            View the Showreel
          </Button>
          <Button to="/contact" variant="text" tone="dark" arrow>
            Start a Conversation
          </Button>
        </div>
      </Container>
    </section>
  )
}
