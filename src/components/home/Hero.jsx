import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 min-h-[85vh] flex flex-col justify-center py-32 lg:py-40">
        <h1 className="text-[clamp(48px,6vw,96px)] font-bold tracking-[-0.02em] leading-[1.05] text-ink">
          India's frames, since 1993<span className="text-gold">.</span>
        </h1>

        <p className="mt-8 max-w-[640px] text-base md:text-lg leading-relaxed text-mid">
          A studio out of Ahmedabad, three decades old. Filmmaking,
          photography and event coverage for India's industries, brands and
          milestones.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <Link
            to="/portfolio"
            className="group relative inline-flex items-center justify-center bg-ink text-white text-sm px-7 py-4 transition-colors hover:bg-ink/90 w-full sm:w-auto"
          >
            <span className="relative inline-block">
              View the Showreel
              <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-px bg-gold origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center text-sm text-ink"
          >
            <span className="relative inline-block">
              Start a Conversation
              <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-px bg-gold origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <span
              aria-hidden="true"
              className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
