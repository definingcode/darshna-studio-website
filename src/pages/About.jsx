import PageHero from '../components/ui/PageHero'
import SectionLabel from '../components/ui/SectionLabel'
import Container from '../components/ui/Container'
import { reach } from '../data/reach'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={<SectionLabel number="01" label="About" />}
        headline="Behind the lens since 1993."
        sub="A studio shaped by three decades of work across India."
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="max-w-[720px] space-y-8">
            <p className="first-letter:float-left first-letter:text-[80px] first-letter:font-bold first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1 first-letter:text-ink text-mid leading-relaxed text-base md:text-lg">
              Darshna Studio was founded in Ahmedabad in 1993. A single studio
              with a single discipline: to document Indian enterprise honestly,
              frame by frame.
            </p>
            <p className="text-mid leading-relaxed text-base md:text-lg">
              Thirty-three years later, the discipline hasn't changed. The
              cameras have. The clients have. The scale has. The studio has
              not.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <Container>
          <div className="max-w-[720px]">
            <div className="w-16 h-px bg-gold" aria-hidden="true" />
            <div className="mt-8 space-y-6">
              <p className="text-mid leading-relaxed text-base md:text-lg">
                We do not chase trends. We document what is in front of the
                camera. Products. Processes. People. Milestones.
              </p>
              <p className="text-ink leading-relaxed text-lg md:text-xl">
                The technology has changed across three decades. The discipline
                has not. The work is the point. Everything else follows.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-soft py-24 lg:py-32">
        <Container>
          <SectionLabel number="02" label="Scale and Reach" />
          <dl className="mt-12 max-w-[720px] divide-y divide-soft border-y border-soft">
            {reach.map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between gap-6 py-5"
              >
                <dt className="text-ink/70 text-sm md:text-base uppercase tracking-[0.04em]">
                  {k}
                </dt>
                <dd className="text-ink font-medium text-right text-base md:text-lg">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="max-w-[720px]">
            <p className="text-mid leading-relaxed text-base md:text-lg">
              Fifty people, one studio. Cinematographers, photographers,
              editors, producers, sound, grip, light. All in-house. All briefed
              under one roof. No agencies, no handoffs, no losses in
              translation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-32 lg:pb-40">
        <Container>
          <p className="text-center text-[clamp(28px,3vw,48px)] font-bold tracking-[-0.015em] leading-[1.2] text-ink max-w-[900px] mx-auto">
            Since 1993, the camera has stayed pointed at the same thing: the
            work itself<span className="text-gold">.</span>
          </p>
        </Container>
      </section>
    </>
  )
}
