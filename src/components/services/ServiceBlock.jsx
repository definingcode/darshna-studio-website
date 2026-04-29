export default function ServiceBlock({ service, index }) {
  const number = String(index + 1).padStart(2, '0')
  return (
    <section
      id={`service-${service.id}`}
      className="py-16 border-b border-soft last:border-b-0 first:pt-0 scroll-mt-24"
    >
      <div className="font-mono text-[13px] text-mid font-medium tracking-[0.05em] mb-5">
        {number} / {service.name}
      </div>
      <h2 className="text-[clamp(36px,4vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-ink mb-5">
        {service.name}
      </h2>
      <p className="text-xl leading-[1.5] text-ink mb-6 max-w-[580px]">
        {service.oneLine}
      </p>
      <p className="text-base leading-[1.7] text-mid max-w-[580px]">
        {service.deliver}
      </p>
    </section>
  )
}
