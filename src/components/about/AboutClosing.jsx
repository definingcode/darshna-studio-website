import Container from '../ui/Container'

export default function AboutClosing() {
  return (
    <section className="bg-navy py-32 lg:py-40">
      <Container className="text-center">
        <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/50 mb-8">
          08 / In Closing
        </div>
        <p className="text-[clamp(36px,4.5vw,56px)] font-bold tracking-[-0.02em] leading-[1.2] text-white max-w-[920px] mx-auto">
          Since 1993, the camera has stayed pointed at the same thing: the
          work itself<span className="text-gold">.</span>
        </p>
      </Container>
    </section>
  )
}
