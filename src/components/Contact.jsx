// Icônes SVG réelles
const IconEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="#5bafd6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
)

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="#5bafd6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013.09 4.18 2 2 0 015.07 2h3a2 2 0 012 1.72 12.9 12.9 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.9 12.9 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
)

const IconGitHub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#5bafd6">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
)

export default function Contact() {
  const contacts = [
    {
      icon: <IconEmail />,
      label: 'Email',
      value: 'nantelala08@gmail.com',
      href: 'mailto:nantelala08@gmail.com'
    },
    {
      icon: <IconPhone />,
      label: 'Téléphone',
      value: '038 781 5005',
      href: 'tel:0387815005'
    },
    {
      icon: <IconGitHub />,
      label: 'GitHub',
      value: 'Lala7nante',
      href: 'https://github.com/Lala7nante'
    },
  ]

  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#060810' }}>
      <div className="max-w-3xl mx-auto text-center">

        {/* Titre */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, rgba(91,175,214,0.3), transparent)' }} />
          <span style={{ fontFamily: 'DM Mono, monospace', color: '#5bafd6', fontSize: '0.85rem' }}>06.</span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.9rem', color: '#ffffff' }}>Contact</h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(91,175,214,0.3), transparent)' }} />
        </div>

        <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          Vous avez un projet, une opportunité de stage, ou simplement envie d'échanger ?<br />
          <span style={{ color: '#94a3b8' }}>N'hésitez pas à me contacter !</span>
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {contacts.map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              className="rounded-xl p-6 flex flex-col items-center gap-3 transition-all hover:-translate-y-2 group"
              style={{
                background: 'linear-gradient(145deg, #0a0d16, #080b12)',
                border: '1px solid rgba(91,175,214,0.12)',
                boxShadow: '0 0 0 rgba(91,175,214,0)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = '1px solid rgba(91,175,214,0.45)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(91,175,214,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(91,175,214,0.12)'
                e.currentTarget.style.boxShadow = '0 0 0 rgba(91,175,214,0)'
              }}>
              <div style={{ filter: 'drop-shadow(0 0 8px rgba(91,175,214,0.4))' }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#475569', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {c.label}
                </div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA principal */}
        <a href="mailto:nantelala08@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105"
          style={{
            fontFamily: 'Syne, sans-serif',
            background: 'linear-gradient(135deg, #5bafd6, #3d8fb5)',
            color: '#050508',
            boxShadow: '0 0 25px rgba(91,175,214,0.35)',
          }}>
          <IconEmail />
          Envoyer un message
        </a>

        {/* Footer */}
        <p className="mt-16" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#1e293b', letterSpacing: '0.08em' }}>
          © 2025 Onjalalaina Edmond RANDRIANANTENAINA — Développeur Web
        </p>
      </div>
    </section>
  )
}