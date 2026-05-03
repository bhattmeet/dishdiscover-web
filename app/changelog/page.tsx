import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'DishDiscover version history — new features, improvements, and bug fixes.',
}

type TagVariant = 'new' | 'improvement' | 'release' | 'default'

interface ChangelogEntry {
  version: string
  date: string
  tag: string
  tagVariant: TagVariant
  changes: string[]
}

const changelog: ChangelogEntry[] = [
  {
    version: 'v1.3.0',
    date: 'May 2025',
    tag: 'New Features',
    tagVariant: 'new',
    changes: [
      'Added: Meal planning feature — create weekly meal plans from saved recipes',
      'Added: Achievements & badges system — earn badges for cooking milestones',
      'Added: Smart notifications — personalized recipe recommendations',
      'Improved: Recipe feed algorithm for better discovery',
    ],
  },
  {
    version: 'v1.2.0',
    date: 'March 2025',
    tag: 'Improvements',
    tagVariant: 'improvement',
    changes: [
      'Added: Follow other food lovers and see their recipes in your feed',
      'Added: User profiles with bio, follower count, and recipe gallery',
      'Improved: Search with filters for cuisine, cook time, and dietary preferences',
      'Fixed: Occasional crash when uploading recipe photos',
    ],
  },
  {
    version: 'v1.1.0',
    date: 'January 2025',
    tag: 'New Features',
    tagVariant: 'new',
    changes: [
      'Added: Save/bookmark recipes to your personal collection',
      'Added: 30+ cuisines browsable from the home screen',
      'Added: Recipe ratings and reviews',
      'Improved: App startup performance',
    ],
  },
  {
    version: 'v1.0.0',
    date: 'December 2024',
    tag: 'Initial Release',
    tagVariant: 'release',
    changes: [
      'Launch: DishDiscover available on Google Play',
      'Browse and discover 1000+ recipes',
      'Share your own recipes with photos and step-by-step instructions',
      'User accounts with Google sign-in support',
    ],
  },
]

const tagStyles: Record<TagVariant, string> = {
  new: 'bg-brand-100 text-brand-800',
  improvement: 'bg-blue-50 text-blue-700',
  release: 'bg-gray-100 text-gray-700',
  default: 'bg-gray-100 text-gray-600',
}

export default function ChangelogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-green-300 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white">Changelog</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
            Changelog
          </h1>
          <p className="text-green-100 text-lg max-w-xl leading-relaxed">
            New features, improvements, and fixes in every release
          </p>
        </div>
      </section>

      {/* Timeline */}
      <div className="bg-white py-14 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Desktop: timeline with vertical line; Mobile: stacked cards */}
          <div className="relative">

            {/* Vertical line — hidden on mobile */}
            <div
              className="hidden md:block absolute left-[5.5rem] top-3 bottom-3 w-px bg-brand-800/20"
              aria-hidden="true"
            />

            <ol className="space-y-10">
              {changelog.map((entry) => (
                <li key={entry.version} className="relative flex flex-col md:flex-row md:gap-8">

                  {/* Left column: version + date (desktop) / inline badge (mobile) */}
                  <div className="hidden md:flex flex-col items-center w-36 flex-shrink-0 pt-1 z-10">
                    {/* Dot on the line */}
                    <span className="w-3 h-3 rounded-full bg-brand-800 ring-4 ring-white mt-1.5 flex-shrink-0" aria-hidden="true" />
                    <span className="mt-3 bg-brand-800 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">
                      {entry.version}
                    </span>
                    <span className="mt-1.5 text-xs text-gray-400 font-medium">{entry.date}</span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Card header */}
                    <div className="flex flex-wrap items-center gap-3 px-6 pt-5 pb-4 border-b border-gray-50">
                      {/* Mobile-only version badge */}
                      <span className="md:hidden bg-brand-800 text-white rounded-full px-3 py-1 text-sm font-bold">
                        {entry.version}
                      </span>
                      {/* Tag pill */}
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[entry.tagVariant]}`}>
                        {entry.tag}
                      </span>
                      {/* Mobile-only date */}
                      <span className="md:hidden ml-auto text-xs text-gray-400 font-medium">{entry.date}</span>
                    </div>

                    {/* Change items */}
                    <ul className="px-6 py-5 space-y-3">
                      {entry.changes.map((change, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {/* Green square icon */}
                          <span
                            className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-sm bg-brand-700"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-gray-700 leading-relaxed">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="bg-brand-100 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-900 mb-3 tracking-tight">
            Always improving
          </h2>
          <p className="text-brand-800 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Have a suggestion for a new feature? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:dishdiscover111@gmail.com"
            className="inline-flex items-center gap-2.5 bg-brand-800 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            dishdiscover111@gmail.com
          </a>
        </div>
      </section>
    </>
  )
}
