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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080b12]/90 backdrop-blur-md border-b border-slate-800/60 py-3' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-syne font-bold text-lg text-white">
          <span className="text-[#5bafd6]">&lt;</span>Lalà Nanté
          <span className="text-[#5bafd6]">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
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

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white">
          <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${open ? 'rotate-45 translate-y-1.5' : ''}`}/>
          <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${open ? 'opacity-0' : ''}`}/>
          <div className={`w-5 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1117] border-t border-slate-800 px-6 py-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2 font-mono-dm text-xs text-slate-400 hover:text-[#5bafd6] uppercase tracking-widest">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
