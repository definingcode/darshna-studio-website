import Container from './Container'

function renderHeadline(headline) {
  if (typeof headline !== 'string') return headline
  if (headline.endsWith('.')) {
    return (
      <>
        {headline.slice(0, -1)}
        <span className="text-gold">.</span>
      </>
    )
  }
  return headline
}

export default function PageHero({
  eyebrow,
  headline,
  sub,
  minH = 'min-h-[70vh]',
  background = 'bg-white',
  align = 'left',
  className = '',
  children,
}) {
  const alignment = align === 'center' ? 'items-center text-center' : ''
  const subAlign = align === 'center' ? 'mx-auto' : ''

  return (
    <section className={`${background} ${className}`}>
      <Container
        className={`${minH} flex flex-col justify-center py-24 lg:py-32 ${alignment}`}
      >
        {eyebrow && <div className="mb-8">{eyebrow}</div>}
        <h1 className="text-[clamp(48px,6vw,96px)] font-bold tracking-[-0.02em] leading-[1.05] text-ink">
          {renderHeadline(headline)}
        </h1>
        {sub && (
          <p
            className={`mt-8 max-w-[640px] text-base md:text-lg leading-relaxed text-mid ${subAlign}`}
          >
            {sub}
          </p>
        )}
        {children && <div className="mt-12">{children}</div>}
      </Container>
    </section>
  )
}
