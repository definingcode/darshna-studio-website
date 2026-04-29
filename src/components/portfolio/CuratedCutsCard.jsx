import Button from '../ui/Button'

export default function CuratedCutsCard() {
  return (
    <div className="bg-cream p-8 lg:p-12">
      <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-mid mb-[18px]">
        02 / Curated Cuts
      </div>
      <h3 className="text-[28px] font-bold tracking-[-0.02em] leading-[1.15] text-ink mb-3.5">
        Want a reel specific to your industry?
      </h3>
      <p className="text-[15px] leading-[1.6] text-mid max-w-[520px] mb-6">
        Manufacturing, real estate, hospitality, healthcare, FMCG. We'll send
        a curated cut briefed for your sector.
      </p>
      <Button to="/contact" variant="primary" size="md" arrow>
        Request a Reel
      </Button>
    </div>
  )
}
