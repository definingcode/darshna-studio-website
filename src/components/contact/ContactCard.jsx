const labelClass =
  'text-[11px] font-medium uppercase tracking-[0.1em] text-mid'
const valueClass = 'text-[14px] text-ink leading-[1.55] font-normal'
const linkClass =
  'inline-block text-ink border-b border-transparent hover:border-gold transition-colors'

function Row({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className={labelClass}>{label}</div>
      <div className={valueClass}>{children}</div>
    </div>
  )
}

export default function ContactCard() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start lg:h-fit bg-cream p-8 lg:p-10 flex flex-col gap-8">
      <Row label="Studio">
        24, Jivraj Park Shopping Center
        <br />
        Vidhyani Ketan School, Khodiyar Nagar Road
        <br />
        Ahmedabad 382350
      </Row>

      <div className="w-8 h-px bg-gold" aria-hidden="true" />

      <Row label="Phone">
        <a href="tel:+918980540857" className={linkClass}>
          +91 89805 40857
        </a>
      </Row>

      <Row label="Email">
        <a href="mailto:Info@darshnastudio.com" className={linkClass}>
          info@darshnastudio.com
        </a>
      </Row>

      <Row label="Hours">
        Monday to Saturday
        <br />
        10am to 7pm IST
      </Row>
    </aside>
  )
}
