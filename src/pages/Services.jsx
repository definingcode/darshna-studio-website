import { Helmet } from 'react-helmet-async'
import ServicesHero from '../components/services/ServicesHero'
import ServicesIndexLayout from '../components/services/ServicesIndexLayout'
import ServicesClosing from '../components/services/ServicesClosing'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Disciplines, In-House · Darshna Studio</title>
        <meta
          name="description"
          content="Nine disciplines, one studio. Filmmaking, conceptual videos, 3D product render, product and corporate shoots, industrial shoots, exhibitions and conferences, live streaming, event coverage. Pan-India since 1993."
        />
      </Helmet>
      <ServicesHero />
      <ServicesIndexLayout />
      <ServicesClosing />
    </>
  )
}
