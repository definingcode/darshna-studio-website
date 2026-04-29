import Container from '../ui/Container'
import ContactForm from '../shared/ContactForm'
import ContactCard from './ContactCard'

export default function ContactSpread() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16">
          <div>
            <ContactForm />
          </div>
          <ContactCard />
        </div>
      </Container>
    </section>
  )
}
