const IconEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="#5bafd6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
)

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="#5bafd6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013.09 4.18 2 2 0 015.07 2h3a2 2 0 012 1.72 12.9 12.9 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.9 12.9 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#5bafd6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const IconGitHub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#5bafd6">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
  </svg>
)

const IconReact = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2.5" fill="#5bafd6"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#5bafd6" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#5bafd6" strokeWidth="1.5" fill="none"
      transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#5bafd6" strokeWidth="1.5" fill="none"
      transform="rotate(120 12 12)"/>
  </svg>
)

export default function Contact() {
  const contacts = [
    { icon: <IconEmail />,     label: 'Email',     value: 'nantelala08@gmail.com', href: 'mailto:nantelala08@gmail.com' },
    { icon: <IconPhone />,     label: 'Téléphone', value: '038 78 150 05',          href: 'tel:0387815005' },
    { icon: <IconWhatsApp />,  label: 'WhatsApp',  value: '033 30 236 09',          href: 'https://wa.me/261333023609' },
    { icon: <IconGitHub />,    label: 'GitHub',    value: 'Lala7nante',            href: 'https://github.com/Lala7nante' },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-[#5bafd6]/30"/>
          <span className="font-mono-dm text-[#5bafd6] text-sm">06.</span>
          <h2 className="font-syne font-bold text-3xl text-white">Contact</h2>
          <div className="flex-1 h-px bg-[#5bafd6]/30"/>
        </div>

        <p className="text-slate-400 mb-10 leading-relaxed">
          Vous avez un projet, une opportunité de stage, ou simplement envie d'échanger ?<br/>
          <span className="text-[#5bafd6]">N'hésitez pas à me contacter !</span>
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-4 gap-4 mb-10">
          {contacts.map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              className="rounded-xl p-6 flex flex-col items-center gap-3 transition-all hover:-translate-y-2"
              style={{
                background: 'transparent',
                border: '1px solid rgba(91,175,214,0.25)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = '1px solid rgba(91,175,214,0.6)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(91,175,214,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(91,175,214,0.25)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <div style={{ filter: 'drop-shadow(0 0 8px rgba(91,175,214,0.5))' }}>
                {c.icon}
              </div>
              <div>
                <div className="font-mono-dm text-xs text-slate-600 uppercase tracking-widest mb-1">
                  {c.label}
                </div>
                <div className="font-syne text-sm text-slate-300 font-medium">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tech badge React */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: 'transparent',
              border: '1px solid rgba(91,175,214,0.2)',
            }}>
            <IconReact/>
            <span className="font-mono-dm text-xs text-[#5bafd6]">Conçu avec React</span>
          </div>
        </div>

        {/* CTA */}
        <a href="mailto:nantelala08@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105"
          style={{
            fontFamily: 'Syne Bold',
            background: 'linear-gradient(135deg, #5bafd6, #3d8fb5)',
            color: '#000000',
            boxShadow: '0 0 25px rgba(91,175,214,0.35)',
          }}>
          <IconEmail/>
          Envoyer un message
        </a>
      </div>
    </section>
  )
}