import { useEffect, useState } from 'react'

const links = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Company', href: '#company' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const logoUrl = `${import.meta.env.BASE_URL}brand/darpa-engineering-logo.webp`

  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <a className="brand-link" href="#home" aria-label="DARPA Engineering home">
          <img src={logoUrl} alt="" width="960" height="416" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a className="nav-enquiry" href="#contact">Enquire <span aria-hidden="true">↗</span></a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </button>
      </div>

      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a className="mobile-nav-contact" href="#contact" onClick={closeMenu}>Enquire <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
