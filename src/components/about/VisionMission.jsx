import Container from '../ui/Container'

function renderHeadline(headline) {
  if (typeof headline === 'string' && headline.endsWith('.')) {
    return (
      <>
        {headline.slice(0, -1)}
        <span className="text-gold">.</span>
      </>
    )
  }
  return headline
}

function Card({ number, label, headline, body }) {
  return (
    <div className="bg-cream p-10 lg:p-12">
      <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-mid mb-5">
        {number} / {label}
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.02em] leading-[1.15] text-ink mb-4">
        {renderHeadline(headline)}
      </h2>
      <p className="text-[15px] leading-[1.6] text-mid max-w-[420px]">
        {body}
      </p>
    </div>
  )
}

export default function VisionMission() {
  return (
    <section className="bg-white border-b border-soft py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card
            number="04"
            label="Vision"
            // TODO: client to provide vision statement
            headline="To be the studio India turns to first."
            // TODO: client to provide vision statement
            body="Vision copy placeholder. The aspirational long-arc statement of where Darshna is going. Will be replaced with the client's voice."
          />
          <Card
            number="05"
            label="Mission"
            // TODO: client to provide mission statement
            headline="To document the work of Indian enterprise."
            // TODO: client to provide mission statement
            body="Mission copy placeholder. The day-to-day operating principle that guides every shoot. Will be replaced with the client's voice."
          />
        </div>
      </Container>
    </section>
  )
}
