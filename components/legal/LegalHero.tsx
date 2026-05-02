import Link from 'next/link'

interface Props {
  title: string
  lastUpdated: string
  description: string
  sectionCount: number
}

export default function LegalHero({ title, lastUpdated, description, sectionCount }: Props) {
  return (
    <section className="bg-brand-900 pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-green-300 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white">{title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h1>
        <p className="text-green-100 mb-6 max-w-2xl">{description}</p>

        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 bg-brand-800/60 text-green-200 text-xs font-medium px-3 py-1 rounded-full border border-brand-700">
            Last updated: {lastUpdated}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-brand-800/60 text-green-200 text-xs font-medium px-3 py-1 rounded-full border border-brand-700">
            {sectionCount} sections
          </span>
        </div>
      </div>
    </section>
  )
}
