export default function ShowreelRail() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start lg:h-fit border-b border-soft pb-12 mb-12 lg:border-0 lg:pb-0 lg:mb-0">
      <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-mid mb-6">
        Showreel
      </div>
      <div className="w-12 h-px bg-gold mb-6" aria-hidden="true" />
      {/* TODO: update runtime when real showreel lands */}
      <div className="text-[clamp(48px,5vw,64px)] font-bold tracking-[-0.02em] leading-none text-mid mb-3.5">
        2:14
      </div>
      <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-mid mb-8">
        Edition · 2026
      </div>
      <div className="border-t border-soft pt-6 space-y-3.5 text-[13px] leading-[1.7] tracking-[-0.005em] text-ink">
        <div>Filmed continuously since 1993</div>
        <div>Edited entirely in-house</div>
        <div>Across thirty-eight industries</div>
        <div>Briefed under one roof</div>
      </div>
    </aside>
  )
}
