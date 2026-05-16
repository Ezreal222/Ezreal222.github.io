import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { label: 'about', to: 'about' },
  { label: 'stack', to: 'skills' },
  { label: 'work', to: 'experience' },
  { label: 'projects', to: 'projects' },
  { label: 'contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/75 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo — serif italic */}
        <Link
          to="hero"
          smooth
          duration={400}
          className="font-serif italic text-2xl text-text-primary hover:text-teal transition-colors cursor-pointer select-none"
        >
          yz<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={400}
                offset={-80}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted hover:text-teal transition-colors cursor-pointer relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 border border-teal/60 text-teal font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-md hover:bg-teal/10 transition-all duration-300"
        >
          resume ↗
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-muted hover:text-teal transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={400}
              offset={-80}
              className="font-mono text-sm uppercase tracking-[0.2em] text-text-muted hover:text-teal transition-colors cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            resume ↗
          </a>
        </div>
      )}
    </header>
  )
}
