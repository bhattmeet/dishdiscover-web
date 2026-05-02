import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delete Account & Data',
  description: 'How to delete your DishDiscover account and all associated personal data.',
}

const inAppSteps = [
  'Open the DishDiscover app on your device',
  'Tap your profile picture in the top-right corner',
  'Go to Settings',
  'Tap Account',
  'Select Delete Account',
  'Read the confirmation message and tap Confirm Delete',
]

const deletedData = [
  'Your profile name, email address, and profile picture',
  'All recipes and food content you have created',
  'Your reviews, ratings, and comments',
  'Meal plans and shopping lists',
  'Follower and following relationships',
  'Achievements, badges, and activity history',
  'Push notification tokens and device identifiers',
  'Saved bookmarks and preferences',
]

const retainedData = [
  'Anonymised, aggregated usage statistics (no personal identifiers)',
  'Content that other users have saved or interacted with before deletion',
]

export default function DeleteAccountPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-green-300 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white">Delete Account &amp; Data</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Delete Account &amp; Data
          </h1>
          <p className="text-green-100 max-w-2xl">
            You have the right to delete your DishDiscover account and all associated personal data at any time. Choose the method that works best for you.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-brand-800/60 text-green-200 text-xs font-medium px-3 py-1 rounded-full border border-brand-700">
              Processed within 30 days
            </span>
            <span className="inline-flex items-center gap-1.5 bg-brand-800/60 text-green-200 text-xs font-medium px-3 py-1 rounded-full border border-brand-700">
              Permanent &amp; irreversible
            </span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Warning callout */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-5">
            <p className="text-yellow-800 font-semibold text-sm mb-1">Before you proceed</p>
            <p className="text-yellow-700 text-sm leading-relaxed">
              Account deletion is permanent and cannot be undone. All your recipes, meal plans, achievements, and activity will be permanently removed. Make sure to save anything you want to keep before proceeding.
            </p>
          </div>

          {/* Method 1: In-app */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-brand-800 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h2 className="text-lg font-bold text-gray-900">Delete via the App</h2>
            </div>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">The fastest way — delete your account directly from within DishDiscover.</p>
            <ol className="space-y-3">
              {inAppSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-800 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-600 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Method 2: Email */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-brand-800 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="text-lg font-bold text-gray-900">Request via Email</h2>
            </div>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              If you cannot access the app, send us a deletion request by email. Include the email address associated with your account.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:dishdiscover111@gmail.com?subject=Account Deletion Request"
                className="flex items-center gap-3 p-4 bg-brand-100 rounded-xl hover:bg-brand-100/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-800 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-800">dishdiscover111@gmail.com</div>
                  <div className="text-xs text-brand-800/70">Subject: Account Deletion Request</div>
                </div>
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-3">We will verify your identity and confirm deletion within 30 days.</p>
          </div>

          {/* What gets deleted */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5">What gets deleted</h2>
            <ul className="space-y-2">
              {deletedData.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What's retained */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What may be retained</h2>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              In limited cases, some data may be retained to comply with legal obligations or protect legitimate interests:
            </p>
            <ul className="space-y-2">
              {retainedData.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* More info */}
          <div className="bg-brand-100 rounded-2xl p-6">
            <h3 className="font-semibold text-brand-900 mb-2">Have questions?</h3>
            <p className="text-sm text-brand-800 leading-relaxed mb-4">
              For any questions about your data or the deletion process, read our Privacy Policy or contact us directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/privacy"
                className="text-sm font-semibold text-brand-800 hover:text-brand-700 underline underline-offset-2"
              >
                Read Privacy Policy
              </Link>
              <span className="text-brand-800/30">·</span>
              <a
                href="mailto:dishdiscover111@gmail.com"
                className="text-sm font-semibold text-brand-800 hover:text-brand-700 underline underline-offset-2"
              >
                Contact Support
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
