import Container from '../ui/Container'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function PortfolioTeaser() {
  return (
    <section className="bg-navy py-20 lg:py-32">
      <Container className="text-center">
        <div className="flex justify-center">
          <SectionLabel number="05" label="The Work" tone="dark" />
        </div>
        <h2 className="mt-10 text-[clamp(48px,6vw,96px)] font-bold tracking-[-0.02em] leading-[1.05] text-white">
          The work<span className="text-gold">.</span>
        </h2>
        <p className="mt-8 text-white/70 leading-relaxed text-base md:text-lg max-w-[560px] mx-auto">
          Decades of frames, condensed into a single reel.
        </p>
        <div className="mt-12 flex justify-center">
          <Button to="/portfolio" variant="text" tone="dark" arrow>
            Watch the showreel
          </Button>
        </div>
      </Container>
    </section>
  )
}
