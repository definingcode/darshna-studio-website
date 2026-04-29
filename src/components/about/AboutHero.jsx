import Container from '../ui/Container'

export default function AboutHero() {
  return (
    <section className="bg-white border-b border-soft">
      <Container className="py-32 lg:py-40 flex flex-col items-center text-center">
        <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-mid">
          01 / The Studio
        </div>
        <h1 className="mt-8 text-[clamp(48px,7vw,96px)] font-bold tracking-[-0.025em] leading-[1.05] text-ink">
          Behind the lens since 1993<span className="text-gold">.</span>
        </h1>
        <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-mid">
          A studio shaped by three decades of work across India, and
          increasingly, beyond it.
        </p>
      </Container>
    </section>
  )
}
