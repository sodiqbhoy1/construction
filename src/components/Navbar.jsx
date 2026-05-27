import { useState } from 'react'
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi'
import { FaHammer } from 'react-icons/fa'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-bg-main/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-brand-white">
            <FaHammer className="text-lg" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-text-main sm:text-xl">
            Life grid construction
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-md border border-primary/20 px-4 py-2 text-sm font-semibold text-text-main transition-colors hover:border-primary hover:text-primary"
          >
            Contact team
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent-cta px-5 py-2.5 text-sm font-semibold text-brand-white transition-colors hover:bg-accent-hover"
          >
            Get started
            <FiArrowRight />
          </a>
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
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-4 py-3 text-sm font-semibold text-text-main transition-colors hover:bg-primary/10"
            >
              {link.label}
            </a>
          ))}
          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-md border border-primary/20 px-4 py-3 text-center text-sm font-semibold text-text-main transition-colors hover:border-primary hover:text-primary"
            >
              Contact team
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-cta px-4 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-accent-hover"
            >
              Get started
              <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar