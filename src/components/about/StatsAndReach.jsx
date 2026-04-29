import Container from '../ui/Container'

const aboutStats = [
  { value: '33', suffix: '+', label: 'Years in frame' },
  { value: '15,000', suffix: '+', label: 'Clients served' },
  { value: '1,000', suffix: '+', label: 'MNC engagements' },
  { value: '50', suffix: '+', label: 'Person team' },
  { value: '19', suffix: '+', label: 'States served' },
  { value: '6', suffix: '+', label: 'Countries' },
]

export default function StatsAndReach() {
  return (
    <section className="bg-white border-b border-soft py-24 lg:py-32">
      <Container>
        <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-mid mb-12 lg:mb-16">
          06 / Scale and Reach
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 border-t border-l border-soft">
          {aboutStats.map((s) => (
            <div
              key={s.label}
              className="min-w-0 overflow-hidden px-6 py-10 lg:py-12 text-center border-r border-b border-soft"
            >
              <div className="text-[clamp(28px,5vw,64px)] xl:text-[clamp(28px,2.5vw,36px)] font-bold tracking-[-0.025em] leading-[1.05] text-ink whitespace-nowrap">
                {s.value}{s.suffix && <span className="text-gold ml-[-0.05em]">{s.suffix}</span>}
              </div>
              <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.1em] text-mid">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
