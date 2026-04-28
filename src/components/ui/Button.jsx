import { Link } from 'react-router-dom'

const sizeClass = {
  sm: 'px-5 py-3',
  md: 'px-6 py-4',
  lg: 'px-7 py-4',
}

const surfaceClass = {
  primary: 'bg-ink text-white hover:bg-ink/90',
  gold: 'bg-gold text-ink hover:bg-gold/90',
  inverted: 'bg-white text-ink',
}

export default function Button({
  to,
  href,
  type,
  onClick,
  variant = 'primary',
  size = 'md',
  tone = 'light',
  underline,
  arrow = false,
  fullWidthMobile = false,
  className = '',
  children,
  ...rest
}) {
  const isText = variant === 'text'
  const showUnderline = underline ?? isText

  const base = isText
    ? `group inline-flex items-center text-sm ${tone === 'dark' ? 'text-white' : 'text-ink'}`
    : `group relative inline-flex items-center justify-center text-sm transition-colors ${sizeClass[size]} ${surfaceClass[variant]}`

  const widthClass = fullWidthMobile && !isText ? 'w-full sm:w-auto' : ''

  const label = showUnderline ? (
    <span className="relative inline-block">
      {children}
      <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-px bg-gold origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </span>
  ) : (
    children
  )

  const content = (
    <>
      {label}
      {arrow && (
        <span
          aria-hidden="true"
          className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  )

  const cls = `${base} ${widthClass} ${className}`
    .trim()
    .replace(/\s+/g, ' ')

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={cls}
      {...rest}
    >
      {content}
    </button>
  )
}
