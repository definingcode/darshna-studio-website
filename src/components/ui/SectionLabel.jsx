export default function SectionLabel({
  number,
  label,
  phrase,
  tone = 'light',
  className = '',
}) {
  const phraseColor = tone === 'dark' ? 'text-white' : 'text-ink'
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.08em] ${className}`}
    >
      <span className="text-mid">
        {number} / {label}
      </span>
      {phrase && (
        <>
          <span className="text-mid" aria-hidden="true">
            ·
          </span>
          <span className={phraseColor}>{phrase}</span>
        </>
      )}
    </div>
  )
}
