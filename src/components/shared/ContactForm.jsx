import { useState } from 'react'

const disciplines = [
  'Filmmaking',
  'Conceptual Videos',
  '3D Product Render',
  'Product Shoot',
  'Corporate Shoot',
  'Industrial Shoot',
  'Exhibitions and Conferences',
  'Live Streaming',
  'Event Coverage',
  'Other',
]

const labelClass =
  'block text-[11px] font-medium uppercase tracking-[0.1em] text-mid mb-2'
const inputClass =
  'w-full bg-transparent border-0 border-b border-soft py-2.5 text-base text-ink focus:outline-none focus:border-b-2 focus:border-ink focus:pb-[9px] transition-colors'

function Field({ label, name, type = 'text', required = false, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </div>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    // TODO: wire to Web3Forms when VITE_WEB3FORMS_KEY is provided
    console.log('Contact form payload:', data)
    setTimeout(() => setStatus('success'), 600)
  }

  if (status === 'success') {
    return (
      <div className="border-l-2 border-gold pl-6 py-2">
        <p className="text-ink text-base md:text-lg">
          Received. We'll be in touch within one working day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
        <Field
          label="Company / Organisation"
          name="company"
          autoComplete="organization"
        />
      </div>

      <div>
        <label htmlFor="discipline" className={labelClass}>
          What can we shoot for you?
        </label>
        <select
          id="discipline"
          name="discipline"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Select a discipline
          </option>
          {disciplines.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us more
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-y min-h-[96px]`}
        />
      </div>

      {status === 'error' && (
        <p className="text-mid text-sm">
          Something went wrong. Please email us directly at{' '}
          <a
            href="mailto:Info@darshnastudio.com"
            className="text-ink underline"
          >
            info@darshnastudio.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        className="self-start w-full md:w-auto bg-ink text-white px-7 py-3.5 text-sm font-medium tracking-[0.02em] hover:bg-black transition-colors"
      >
        {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}
