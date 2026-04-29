import { Helmet } from 'react-helmet-async'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import PortfolioSpread from '../components/portfolio/PortfolioSpread'

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | The Showreel · Darshna Studio</title>
        <meta
          name="description"
          content="Three decades of work for India's industries, brands and milestones, condensed into a single reel."
        />
      </Helmet>
      <PortfolioHero />
      <PortfolioSpread />
    </>
  )
}
