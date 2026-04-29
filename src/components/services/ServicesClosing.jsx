import { Link } from 'react-router-dom'
import Container from '../ui/Container'

export default function ServicesClosing() {
  return (
    <section className="bg-ink py-32 lg:py-40">
      <Container className="text-center">
        <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/50 mb-8">
          02 / Brief Us
        </div>
        <h2 className="text-[clamp(36px,4.5vw,56px)] font-bold tracking-[-0.025em] leading-[1.15] text-white max-w-[760px] mx-auto mb-8">
          If your shoot isn't on this list, ask. In thirty-three years, we've
          likely done it<span className="text-gold">.</span>
        </h2>
        <Link
          to="/contact"
          className="group inline-flex items-center bg-gold text-ink px-8 py-4 text-sm font-medium tracking-[0.02em] transition-colors hover:bg-gold/90"
        >
          Brief Us
          <span
            aria-hidden="true"
            className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </Container>
    </section>
  )
}
