export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0d14]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-slate-800"/>
          <span className="font-mono-dm text-[#5bafd6] text-sm">06.</span>
          <h2 className="font-syne font-bold text-3xl text-white">Contact</h2>
          <div className="flex-1 h-px bg-slate-800"/>
        </div>

        <p className="text-slate-400 mb-10 leading-relaxed">
          Vous avez un projet, une opportunité de stage, ou simplement envie d'échanger ?<br/>
          N'hésitez pas à me contacter !
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: '📧', label: 'Email',    value: 'nantelala08@gmail.com', href: 'mailto:nantelala08@gmail.com' },
            { icon: '📱', label: 'Téléphone',value: '038 781 5005',          href: 'tel:0387815005' },
            { icon: '🐙', label: 'GitHub',   value: 'Lala7nante',            href: 'https://github.com/Lala7nante' },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 hover:border-[#5bafd6]/40 hover:-translate-y-1 transition-all group">
              <div className="text-2xl mb-3">{c.icon}</div>
              <div className="font-mono-dm text-xs text-slate-600 uppercase tracking-widest mb-1">{c.label}</div>
              <div className="font-syne text-sm text-white group-hover:text-[#5bafd6] transition-colors">{c.value}</div>
            </a>
          ))}
        </div>

        <a href="mailto:nantelala08@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#5bafd6] text-[#080b12] font-syne font-bold rounded-lg hover:bg-[#3d8fb5] transition-all hover:scale-105">
          ✉️ Envoyer un message
        </a>
      </div>
    </section>
  )
}
