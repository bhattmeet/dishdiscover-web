import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how DishDiscover uses cookies and similar tracking technologies in our Android app.',
}

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-green-300 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white">Cookie Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-green-100 max-w-2xl">
            How DishDiscover uses cookies and similar tracking technologies
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 bg-brand-800/60 text-green-200 text-xs font-medium px-3 py-1 rounded-full border border-brand-700">
              Last Updated: May 2, 2025
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Info callout */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-800 text-sm mb-6 leading-relaxed">
            DishDiscover is a mobile app, not a website. We do not use traditional browser cookies. This policy describes the equivalent technologies used in our Android app.
          </div>

          {/* Section 1: What Are Cookies? */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What Are Cookies?</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              DishDiscover is a mobile application. Unlike traditional websites, mobile apps do not use browser cookies. Instead, we use similar technologies such as device identifiers, local storage, and analytics SDKs to enhance your experience and understand how the app is used.
            </p>
          </div>

          {/* Section 2: Technologies We Use */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Technologies We Use</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">Device Identifiers: </span>
                  Unique identifiers assigned to your Android device, used to maintain your session and personalize content.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">Local Storage: </span>
                  Data stored locally on your device to save your preferences, saved recipes, and app settings for faster access.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">Firebase Analytics: </span>
                  We use Google Firebase to collect anonymized usage statistics — such as which features are used most — to improve the app. Firebase may set its own identifiers. See Google&apos;s Privacy Policy for details.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">Firebase Cloud Messaging (FCM): </span>
                  Used to deliver push notifications. Your device token is stored securely and used only to send you relevant notifications.
                </p>
              </li>
            </ul>
          </div>

          {/* Section 3: Why We Use These Technologies */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Why We Use These Technologies</h2>
            <ul className="space-y-2">
              {[
                'Keep you signed in across sessions',
                'Remember your preferences and saved recipes',
                'Analyze app usage to improve features',
                'Send push notifications for new recipes and activity',
                'Detect and prevent fraudulent or abusive usage',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Your Choices */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Your Choices</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">Push Notifications: </span>
                  You can disable push notifications at any time in your Android device settings under Apps &rarr; DishDiscover &rarr; Notifications.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">Analytics: </span>
                  You can opt out of analytics data collection by going to Settings &rarr; Privacy within the DishDiscover app.
                </p>
              </li>
            </ul>
          </div>

          {/* Section 5: Third-Party Services */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Third-Party Services</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              DishDiscover uses the following third-party services which may collect data as described in their own privacy policies:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-600">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  Google Firebase (Analytics, Authentication, Cloud Messaging) &mdash;{' '}
                  <a
                    href="https://google.com/policies/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-800 hover:text-brand-700 underline underline-offset-2"
                  >
                    google.com/policies/privacy
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-600">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0D6F36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  Google Play Services &mdash;{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-800 hover:text-brand-700 underline underline-offset-2"
                  >
                    policies.google.com/privacy
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Section 6: Changes to This Policy */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Changes to This Policy</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of DishDiscover after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Section 7: Contact Us */}
          <div className="bg-brand-100 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-brand-900 mb-3">Contact Us</h2>
            <p className="text-sm text-brand-800 leading-relaxed mb-4">
              If you have questions about our use of cookies or tracking technologies, contact us:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:dishdiscover111@gmail.com"
                className="text-sm font-semibold text-brand-800 hover:text-brand-700 underline underline-offset-2"
              >
                dishdiscover111@gmail.com
              </a>
              <span className="text-brand-800/30">·</span>
              <Link
                href="/privacy"
                className="text-sm font-semibold text-brand-800 hover:text-brand-700 underline underline-offset-2"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
