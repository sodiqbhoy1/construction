import { useState } from 'react'
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router'

import logoImage from '../assets/favicon.png'
const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-bg-main/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        <Link to="/#top" className="navbar-logo flex items-center justify-start flex-shrink-0">
          <img
            src={logoImage}
            alt="Life grid construction logo"
            className="h-8 w-auto sm:h-10 md:h-12 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={`/${link.href}`}
              className="text-sm font-semibold text-text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/#contact"
            className="rounded-md border border-primary/20 px-4 py-2 text-sm font-semibold text-text-main transition-colors hover:border-primary hover:text-primary"
          >
            Contact team
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent-cta px-5 py-2.5 text-sm font-semibold text-brand-white transition-colors hover:bg-accent-hover"
          >
            Get started
            <FiArrowRight />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary/20 text-text-main transition-colors hover:border-primary hover:text-primary lg:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      <div className={`${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-t border-primary/15 transition-all duration-300 lg:hidden`}>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={`/${link.href}`}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-4 py-3 text-sm font-semibold text-text-main transition-colors hover:bg-primary/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <Link
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-md border border-primary/20 px-4 py-3 text-center text-sm font-semibold text-text-main transition-colors hover:border-primary hover:text-primary"
            >
              Contact team
            </Link>
            <Link
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-cta px-4 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-accent-hover"
            >
              Get started
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar