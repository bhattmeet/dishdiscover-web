import Link from 'next/link'

interface LinkItem {
  href: string
  isExternal: boolean
  iconBg: string
  iconColor: string
  icon: React.ReactNode
  title: string
  desc: string
  cta: string
  ctaColor: string
}

const links: LinkItem[] = [
  {
    href: '/privacy',
    isExternal: false,
    iconBg: 'bg-brand-100',
    iconColor: 'text-brand-800',
    icon: <ShieldIcon />,
    title: 'Privacy Policy',
    desc: 'Learn how we collect, use, and protect your personal data when you use DishDiscover.',
    cta: 'Read Privacy Policy',
    ctaColor: 'text-brand-800',
  },
  {
    href: '/terms',
    isExternal: false,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: <DocIcon />,
    title: 'Terms & Conditions',
    desc: 'Read our terms of service governing your use of the DishDiscover application.',
    cta: 'Read Terms',
    ctaColor: 'text-blue-600',
  },
  {
    href: 'mailto:bhattmeet887@gmail.com',
    isExternal: true,
    iconBg: 'bg-brand-100',
    iconColor: 'text-brand-800',
    icon: <MailIcon />,
    title: 'Contact Us',
    desc: 'Questions about privacy or our terms? We respond within 30 days.',
    cta: 'bhattmeet887@gmail.com',
    ctaColor: 'text-brand-800',
  },
]

export default function QuickLinks() {
  return (
    <section className="-mt-16 relative z-10 px-6" aria-label="Quick links">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link) => {
          const content = (
            <>
              <div className={`${link.iconBg} ${link.iconColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                {link.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{link.title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{link.desc}</p>
              <div className={`${link.ctaColor} text-sm font-semibold flex items-center gap-1`}>
                {link.cta}
                <ArrowIcon />
              </div>
            </>
          )

          const cardClass = 'bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow block'

          return link.isExternal ? (
            <a key={link.href} href={link.href} className={cardClass}>
              {content}
            </a>
          ) : (
            <Link key={link.href} href={link.href} className={cardClass}>
              {content}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

function ShieldIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
}
function DocIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
}
function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
}
