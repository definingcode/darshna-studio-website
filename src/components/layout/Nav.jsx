import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

function Wordmark({ tone = 'ink' }) {
  const base = tone === 'white' ? 'text-white' : 'text-ink'
  return (
    <span className={`text-xl tracking-tight ${base}`}>
      Darshna<span className="font-bold ml-1">Studio</span>
      <span className="text-gold">.</span>
    </span>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-ink/10">
      <Container className="h-[72px] flex items-center justify-between">
        <Link to="/" aria-label="Darshna Studio" className="flex items-center">
          <Wordmark />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                [
                  'relative text-sm py-1 transition-colors',
                  isActive
                    ? 'text-ink after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-gold'
                    : 'text-mid hover:text-ink',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" size="sm">
            Get in Touch
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="lg:hidden text-ink"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink text-white lg:hidden flex flex-col">
          <div className="h-[72px] px-6 flex items-center justify-between border-b border-white/10">
            <Link
              to="/"
              aria-label="Darshna Studio"
              onClick={() => setOpen(false)}
              className="flex items-center"
            >
              <Wordmark tone="white" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-12 flex flex-col gap-6" aria-label="Primary mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'text-3xl font-bold tracking-tight transition-colors',
                    isActive ? 'text-gold' : 'text-white',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button
              to="/contact"
              variant="inverted"
              size="md"
              onClick={() => setOpen(false)}
              className="mt-6 w-fit"
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
