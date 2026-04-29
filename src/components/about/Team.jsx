import Container from '../ui/Container'

export default function Team() {
  return (
    <section className="bg-white border-b border-soft py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex items-start justify-start">
            <span className="text-[clamp(140px,30vw,240px)] lg:text-[clamp(180px,22vw,320px)] font-bold tracking-[-0.05em] leading-[0.85] text-ink">
              50<span className="text-gold">+</span>
            </span>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-mid">
              07 / The Team
            </div>
            <div
              className="mt-6 mb-8 w-12 h-px bg-gold"
              aria-hidden="true"
            />
            <h2 className="text-[clamp(36px,4vw,52px)] font-bold tracking-[-0.025em] leading-[1.1] text-ink mb-6">
              Fifty plus people.<br />
              One studio.<br />
              Every discipline<span className="text-gold">.</span>
            </h2>
            <p className="text-[17px] leading-[1.7] text-mid max-w-[480px]">
              <strong className="text-ink font-medium">
                Cinematographers, photographers, editors, producers, sound,
                grip, light.
              </strong>{' '}
              All in-house. All briefed under one roof. No agencies. No
              handoffs. No losses in translation.
            </p>
            <div className="mt-8 pt-6 border-t border-soft text-sm font-medium tracking-[0.02em] text-ink leading-[1.7]">
              In-house disciplines
              <span className="text-gold mx-2" aria-hidden="true">·</span>
              Seven
              <span className="text-gold mx-2" aria-hidden="true">·</span>
              One roof
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
