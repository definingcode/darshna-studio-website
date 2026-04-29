import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="8" y1="10" x2="8" y2="17" />
      <circle cx="8" cy="7" r="0.5" fill="currentColor" stroke="none" />
      <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
      <line x1="12" y1="10" x2="12" y2="17" />
    </svg>
  )
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-mid">
      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <img
              src="/logos/darshna-stacked-white.svg"
              alt="Darshna Studio"
              className="h-20 w-auto"
            />
            <p className="mt-6 text-sm leading-relaxed">
              India's frames, since 1993.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:contents">
            <div>
              <h3 className="text-white text-xs font-medium uppercase tracking-[0.08em]">
                Navigate
              </h3>
              <ul className="mt-6 space-y-3 text-sm">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xs font-medium uppercase tracking-[0.08em]">
                Studio
              </h3>
              <address className="not-italic mt-6 text-sm space-y-3">
                <div className="space-y-1">
                  <div>24, Jivraj Park Shopping Center</div>
                  <div>Vidhyani Ketan School, Khodiyar Nagar Road</div>
                  <div>Ahmedabad 382350</div>
                </div>
                <div>
                  <a
                    href="tel:+918980540857"
                    className="hover:text-white transition-colors"
                  >
                    +91 89805 40857
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:Info@darshnastudio.com"
                    className="hover:text-white transition-colors"
                  >
                    info@darshnastudio.com
                  </a>
                </div>
              </address>
              <div className="mt-6 flex gap-5">
                <a
                  href="https://www.instagram.com/darshnastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/darshnastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gold text-xs text-mid">
          Founded 1993. © 2026 Darshna Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
