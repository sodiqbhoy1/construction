import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router'

const footerLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  return (
    <footer className="border-t border-primary/15 bg-bg-main">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-10">
        <div>
          <div className="text-lg font-extrabold tracking-tight text-text-main sm:text-xl">
            LifeGrid construction
          </div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-text-muted sm:text-base">
            A simple road repair and reporting platform built for clear updates, faster response, and easier follow-up.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:justify-items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
              Explore
            </div>
            <div className="mt-3 grid gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={`/${link.href}`}
                  className="text-sm font-medium text-text-main transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
              Get started
            </div>
            <Link
              to="/#top"
              className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-primary-hover"
            >
              Back to top
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer