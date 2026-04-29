import Container from './Container'

export default function SpreadBlock({
  eyebrow,
  bigNumber,
  caption,
  topBorder = true,
  className = '',
  children,
}) {
  return (
    <section
      className={`bg-white py-24 lg:py-32 ${topBorder ? 'border-t border-soft' : ''} ${className}`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            {eyebrow && (
              <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-mid">
                {eyebrow}
              </div>
            )}
            {bigNumber && (
              <div className="mt-6 text-[clamp(48px,5vw,72px)] font-bold tracking-[-0.02em] leading-none text-mid">
                {bigNumber}
              </div>
            )}
            <div className="mt-4 w-12 h-px bg-gold" aria-hidden="true" />
            {caption && (
              <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.08em] text-mid">
                {caption}
              </div>
            )}
          </aside>

          <div className="max-w-[640px]">{children}</div>
        </div>
      </Container>
    </section>
  )
}
