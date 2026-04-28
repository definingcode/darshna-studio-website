import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
        This frame doesn't exist.
      </h1>
      <p className="mt-4 text-mid">Let's get you back to ones that do.</p>
      <Link
        to="/"
        className="mt-10 inline-block bg-ink text-white text-sm px-6 py-4 hover:bg-ink/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
