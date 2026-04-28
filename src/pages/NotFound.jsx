import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
        This frame doesn't exist.
      </h1>
      <p className="mt-4 text-mid">Let's get you back to ones that do.</p>
      <Button to="/" variant="primary" size="md" className="mt-10">
        Return Home
      </Button>
    </div>
  )
}
