import Container from '../ui/Container'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function AboutPreview() {
  return (
    <section className="bg-soft py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <SectionLabel number="04" label="Studio" />
            <h2 className="mt-8 text-[clamp(40px,4.5vw,64px)] font-bold tracking-[-0.015em] leading-[1.1] text-ink">
              Three decades. One studio<span className="text-gold">.</span>
            </h2>
            <p className="mt-8 text-ink/75 leading-relaxed max-w-[520px]">
              Darshna Studio was founded in Ahmedabad in 1993. Thirty-three
              years later, the studio remains a single studio. Fifty people.
              A head office in Ahmedabad. A service footprint across nineteen
              states and six countries.
            </p>
            <div className="mt-10">
              <Button to="/about" variant="text" arrow>
                Read our story
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:flex lg:justify-end">
            <div
              className="w-full lg:max-w-[480px] aspect-[4/5] relative bg-white"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(135deg, transparent 0, transparent 12px, rgba(28,28,28,0.06) 12px, rgba(28,28,28,0.06) 13px)',
              }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-mid">
                  // TODO: HERITAGE PHOTOGRAPH AHMEDABAD · 1990S ARCHIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
