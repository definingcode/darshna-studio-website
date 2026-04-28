import PageHero from '../components/ui/PageHero'
import SectionLabel from '../components/ui/SectionLabel'
import Container from '../components/ui/Container'
import ContactForm from '../components/shared/ContactForm'

function ContactItem({ label, value }) {
  return (
    <div className="py-5">
      <div className="text-xs font-medium uppercase tracking-[0.08em] text-mid">
        {label}
      </div>
      <div className="mt-2 text-ink text-base md:text-lg">{value}</div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow={<SectionLabel number="01" label="Contact" />}
        headline="Let's talk."
        sub="For new projects, partnerships and press."
      />

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <div className="divide-y divide-soft border-y border-soft">
                {/* TODO: needs value */}
                <ContactItem label="Studio" value="[Ahmedabad address]" />
                {/* TODO: needs value */}
                <ContactItem label="Phone" value="[phone]" />
                {/* TODO: needs value */}
                <ContactItem label="Email" value="[email]" />
                <ContactItem
                  label="Hours"
                  value="Monday to Saturday, 10am to 7pm IST"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-soft">
        <div className="aspect-[16/7] w-full">
          <iframe
            title="Darshna Studio location"
            // TODO: replace with precise studio coordinates once address confirmed
            src="https://maps.google.com/maps?q=Ahmedabad,Gujarat&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
