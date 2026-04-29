import Container from '../ui/Container'
import ShowreelRail from './ShowreelRail'
import ShowreelEmbed from './ShowreelEmbed'
import CuratedCutsCard from './CuratedCutsCard'

export default function PortfolioSpread() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          <ShowreelRail />

          <div className="flex flex-col gap-12">
            <div>
              <p className="text-[17px] leading-[1.7] text-ink mb-5 max-w-[640px]">
                Since 1993, Darshna Studio has shot more than fifteen thousand
                projects. For industries from manufacturing to hospitality. For
                brands across nineteen states. For milestones across six
                countries.
              </p>
              <p className="text-[17px] leading-[1.7] text-mid mb-0 max-w-[640px]">
                This reel is a glimpse.
              </p>
            </div>

            <ShowreelEmbed />

            <CuratedCutsCard />
          </div>
        </div>
      </Container>
    </section>
  )
}
