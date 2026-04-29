import Container from '../ui/Container'

export default function ServicesHero() {
  return (
    <section className="bg-white border-b border-soft">
      <Container className="py-32 lg:py-40 flex flex-col items-center text-center">
        <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-mid mb-8">
          01 / Disciplines
        </div>
        <h1 className="text-[clamp(48px,7vw,96px)] font-bold tracking-[-0.025em] leading-[1.05] text-ink">
          What we do<span className="text-gold">.</span>
        </h1>
        <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-mid">
          Disciplines, in-house. Three decades of practice.
        </p>
      </Container>
    </section>
  )
}
