import { stats } from '../../data/stats'

const cellBorders = [
  'border-r border-b lg:border-b-0',
  'border-b md:border-r lg:border-b-0',
  'border-r border-b md:border-r-0 lg:border-r lg:border-b-0',
  'border-b md:border-r md:border-b-0',
  'border-r',
  '',
]

export default function StatsStrip() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-y border-soft">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-10 lg:py-12 border-soft ${cellBorders[i]}`}
            >
              <div className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight leading-[1.05] text-ink">
                {s.value}{s.suffix && <span className="text-gold">{s.suffix}</span>}
              </div>
              <div className="mt-4 text-xs font-medium uppercase tracking-[0.08em] text-mid">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
