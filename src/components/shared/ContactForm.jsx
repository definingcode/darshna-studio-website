import { useState } from 'react'
import Button from '../ui/Button'

const subjects = [
  'Filmmaking',
  'Event',
  'Expo',
  'Product',
  'Corporate Shoot',
  'Corporate Event',
  'Industrial',
  'Other',
]

const fieldClass =
  'mt-3 w-full bg-transparent border-0 border-b border-soft pb-3 text-ink text-base placeholder:text-mid focus:outline-none focus:border-ink transition-colors'
const labelClass =
  'block text-xs font-medium text-mid uppercase tracking-[0.08em]'

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
        className={fieldClass}
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
    // TODO: wire to Web3Forms once VITE_WEB3FORMS_KEY is in .env
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
    <form onSubmit={handleSubmit} className="space-y-8">
      <Field
        label="Name"
        name="name"
        required
        autoComplete="name"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
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

      <div>
        <label htmlFor="subject" className={labelClass}>
          What are you shooting?
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Select a discipline
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
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
          rows={5}
          className={`${fieldClass} resize-none`}
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

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidthMobile
      >
        {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </Button>
    </form>
  )
}
