import { useState, useEffect } from 'react'

const links = [
  { label: 'Accueil',     href: '#hero' },
  { label: 'À propos',    href: '#about' },
  { label: 'Formation',   href: '#education' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets',     href: '#projects' },
  { label: 'GitHub',      href: '#github' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 w-screen z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080b12]/90 backdrop-blur-md border-b border-slate-800/60 py-3' : 'py-5'
    }`}>

      <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="font-syne font-bold text-lg text-white shrink-0">
          <span className="text-[#5bafd6]">&lt;</span>Lalà Nanté
          <span className="text-[#5bafd6]">/&gt;</span>
        </a>

        {/* Desktop links — visible seulement sur lg et plus (1024px+) */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className="font-mono-dm text-xs text-slate-400 hover:text-[#5bafd6] transition-colors uppercase tracking-widest">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/cv.pdf" target="_blank"
              className="ml-2 px-4 py-2 border border-[#5bafd6] text-[#5bafd6] font-mono-dm text-xs rounded-md hover:bg-[#5bafd6]/10 transition-all uppercase tracking-widest">
              CV PDF
            </a>
          </li>
        </ul>

        {/* Hamburger — visible sur mobile ET tablet (< 1024px) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 shrink-0 text-slate-400 hover:text-white focus:outline-none"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : 'mb-1'}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : 'mb-1'}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>

      </div>

      {/* Menu déroulant mobile + tablet */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#0d1117] border-t border-slate-800 px-6 py-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2.5 font-mono-dm text-xs text-slate-400 hover:text-[#5bafd6] uppercase tracking-widest border-b border-slate-800/50 last:border-0">
              {l.label}
            </a>
          ))}
          <a href="/cv.pdf" target="_blank" onClick={() => setOpen(false)}
            className="block mt-3 py-2.5 font-mono-dm text-xs text-[#5bafd6] uppercase tracking-widest">
            ↓ Télécharger CV
          </a>
        </div>
      </div>

    </nav>
  )
}