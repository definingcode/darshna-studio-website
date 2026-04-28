import Hero from '../components/home/Hero'
import StatsStrip from '../components/home/StatsStrip'
import LogoMarquee from '../components/home/LogoMarquee'
import ServicesTeaser from '../components/home/ServicesTeaser'
import AboutPreview from '../components/home/AboutPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <LogoMarquee />
      <ServicesTeaser />
      <AboutPreview />
    </>
  )
}
