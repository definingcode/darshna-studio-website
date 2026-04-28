import PageHero from '../components/ui/PageHero'
import SectionLabel from '../components/ui/SectionLabel'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

// TODO: replace with real showreel video ID
const SHOWREEL_ID = 'dQw4w9WgXcQ'

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow={<SectionLabel number="01" label="Portfolio" />}
        headline="The work."
        sub="A condensed look at thirty-three years."
      />

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="max-w-[720px] mx-auto text-center space-y-6">
            <p className="text-mid leading-relaxed text-base md:text-lg">
              Since 1993, Darshna Studio has shot more than fifteen thousand
              projects. For industries from manufacturing to hospitality. For
              brands across nineteen states. For milestones across six
              countries.
            </p>
            <p className="text-mid leading-relaxed text-base md:text-lg">
              This reel is a glimpse.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <Container>
          <div className="mx-auto max-w-[1100px]">
            <div className="aspect-video border-4 border-ink relative">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${SHOWREEL_ID}`}
                title="Darshna Studio Showreel"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-soft py-24 lg:py-32">
        <Container>
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.015em] leading-[1.2] text-ink">
              Want a reel specific to your industry?
            </h2>
            <p className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg">
              Manufacturing, real estate, hospitality, healthcare, FMCG. We'll
              send a curated cut.
            </p>
            <div className="mt-10">
              <Button to="/contact" variant="primary" size="lg">
                Request a Reel
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
