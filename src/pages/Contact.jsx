import { Helmet } from 'react-helmet-async'
import ContactHero from '../components/contact/ContactHero'
import ContactSpread from '../components/contact/ContactSpread'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact · Darshna Studio, Ahmedabad</title>
        <meta
          name="description"
          content="New projects, partnerships and press. Pan-India service in filmmaking, photography and event coverage since 1993."
        />
      </Helmet>
      <ContactHero />
      <ContactSpread />
    </>
  )
}
