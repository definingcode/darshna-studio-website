import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <Container className="min-h-[70vh] flex flex-col items-center justify-center text-center py-24 lg:py-32">
      <h1 className="text-[clamp(48px,6vw,96px)] font-bold tracking-[-0.02em] leading-[1.05] text-ink">
        This frame doesn't exist<span className="text-gold">.</span>
      </h1>
      <p className="mt-8 text-mid leading-relaxed text-base md:text-lg max-w-[480px]">
        Let's get you back to ones that do.
      </p>
      <div className="mt-12">
        <Button to="/" variant="primary" size="md">
          Return Home
        </Button>
      </div>
    </Container>
  )
}
