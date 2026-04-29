import SpreadBlock from '../ui/SpreadBlock'

function PullQuote() {
  return (
    <section className="bg-white border-t border-b border-soft py-20 lg:py-40">
      <div className="mx-auto max-w-[880px] px-6 lg:px-10 text-center">
        <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-mid mb-8">
          03 / The Discipline
        </div>
        <p className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.02em] leading-[1.15] text-ink">
          The technology has changed across three decades. The discipline has
          not<span className="text-gold">.</span>
        </p>
      </div>
    </section>
  )
}

export default function FoundingPhilosophy() {
  return (
    <>
      <SpreadBlock
        eyebrow="02 / Founding"
        bigNumber="1993"
        caption="Ahmedabad"
      >
        <p className="first-letter:float-left first-letter:font-bold first-letter:text-[64px] first-letter:leading-[0.85] first-letter:pr-3 first-letter:pt-2 first-letter:text-ink text-ink text-[17px] leading-[1.7] mb-6">
          Darshna Studio was founded in Ahmedabad in 1993. A single studio with
          a single discipline: to document Indian enterprise honestly, frame by
          frame.
        </p>
        <p className="text-mid text-[17px] leading-[1.7] mb-6">
          Thirty-three years later, the discipline hasn't changed. The cameras
          have. The clients have. The scale has. The studio has not.
        </p>
        <p className="text-mid text-[17px] leading-[1.7]">
          We do not chase trends. We document what is in front of the camera.
          Products. Processes. People. Milestones.
        </p>
      </SpreadBlock>

      <PullQuote />
    </>
  )
}
