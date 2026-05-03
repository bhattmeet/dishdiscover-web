import type { Metadata } from 'next'
import Link from 'next/link'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about DishDiscover — the recipe discovery and sharing app.',
}

type FAQItem = {
  q: string
  a: React.ReactNode
}

type FAQCategory = {
  title: string
  headerBg: string
  headerText: string
  iconBg: string
  icon: React.ReactNode
  items: FAQItem[]
}

const categories: FAQCategory[] = [
  {
    title: 'Getting Started',
    headerBg: 'bg-brand-800',
    headerText: 'text-white',
    iconBg: 'bg-brand-700',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    items: [
      {
        q: 'What is DishDiscover?',
        a: 'DishDiscover is a mobile app for discovering, sharing, and organizing recipes from cuisines worldwide. Explore dishes made by real home cooks, save your favourites, and share your own culinary creations with a global community.',
      },
      {
        q: 'Is DishDiscover free?',
        a: 'Yes — DishDiscover is completely free to download and use. There are no subscription fees or in-app purchases required to access recipes, share your own dishes, or connect with other cooks.',
      },
      {
        q: 'How do I download DishDiscover?',
        a: (
          <>
            DishDiscover is available on the Google Play Store.{' '}
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-800 font-semibold hover:underline"
            >
              Tap here to download it free
            </a>
            {' '}on your Android device.
          </>
        ),
      },
      {
        q: 'What devices are supported?',
        a: 'DishDiscover is supported on Android smartphones and tablets. Make sure your device is running a recent version of Android for the best experience.',
      },
    ],
  },
  {
    title: 'Using the App',
    headerBg: 'bg-blue-700',
    headerText: 'text-white',
    iconBg: 'bg-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    items: [
      {
        q: 'How do I share a recipe?',
        a: 'Tap the + button at the bottom of the screen, fill in the recipe details — name, ingredients, step-by-step instructions, and photos — then tap Publish. Your recipe will appear in your profile and in the feeds of your followers.',
      },
      {
        q: 'Can I save recipes I like?',
        a: 'Yes. Tap the bookmark icon on any recipe card or recipe detail page to save it to your personal collection. Access all your saved recipes from your profile at any time.',
      },
      {
        q: 'How do I follow other users?',
        a: "Visit any user's profile and tap the Follow button. Once you follow someone, their new recipes will appear in your home feed so you never miss their latest creations.",
      },
      {
        q: 'Can I search for specific cuisines?',
        a: 'Yes. Use the search feature to look up recipes by name, ingredient, cuisine type, or cooking time. Filters help you narrow results to exactly what you are in the mood for.',
      },
    ],
  },
  {
    title: 'Account & Privacy',
    headerBg: 'bg-purple-700',
    headerText: 'text-white',
    iconBg: 'bg-purple-600',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    items: [
      {
        q: 'How do I create an account?',
        a: 'Sign up with your email address or Google account when you first open the app. The process takes under a minute and you can start browsing recipes immediately.',
      },
      {
        q: 'How do I delete my account?',
        a: (
          <>
            Go to <strong className="text-gray-800">Settings &rarr; Account &rarr; Delete Account</strong> inside the app, or visit our{' '}
            <Link href="/delete-account" className="text-brand-800 font-semibold hover:underline">
              Data Deletion page
            </Link>{' '}
            for step-by-step instructions, including an email request option.
          </>
        ),
      },
      {
        q: 'What data does DishDiscover collect?',
        a: (
          <>
            We collect your account information (name, email), the recipes and content you share, and usage data to improve the app. For full details, please read our{' '}
            <Link href="/privacy" className="text-brand-800 font-semibold hover:underline">
              Privacy Policy
            </Link>
            .
          </>
        ),
      },
      {
        q: 'Is my data safe?',
        a: 'We take your privacy seriously. All data is encrypted in transit and at rest. We never sell your personal data to third parties or use it for advertising without your consent.',
      },
    ],
  },
  {
    title: 'Troubleshooting',
    headerBg: 'bg-amber-600',
    headerText: 'text-white',
    iconBg: 'bg-amber-500',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    items: [
      {
        q: 'The app will not load. What should I do?',
        a: (
          <>
            First, check your internet connection. Then try force-closing the app and reopening it. If the issue persists, try uninstalling and reinstalling DishDiscover from the{' '}
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-800 font-semibold hover:underline"
            >
              Google Play Store
            </a>
            .
          </>
        ),
      },
      {
        q: 'I forgot my password. How do I reset it?',
        a: 'On the login screen, tap "Forgot Password" and enter your email address. You will receive a password reset link in your inbox within a few minutes. Check your spam folder if you do not see it.',
      },
      {
        q: 'How do I report a bug or inappropriate content?',
        a: (
          <>
            Email us at{' '}
            <a
              href="mailto:dishdiscover111@gmail.com"
              className="text-brand-800 font-semibold hover:underline"
            >
              dishdiscover111@gmail.com
            </a>{' '}
            with details and screenshots if possible. We review all reports and take inappropriate content seriously.
          </>
        ),
      },
      {
        q: 'I am not receiving notifications.',
        a: 'Open your Android Settings, navigate to Apps, find DishDiscover, and ensure notifications are enabled. Also check that Do Not Disturb mode is not blocking alerts. If the issue continues, try signing out and back in to refresh your notification token.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-green-300 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-green-100 text-lg max-w-2xl leading-relaxed">
            Everything you need to know about DishDiscover
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {categories.map((category) => (
            <div key={category.title} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">

              {/* Category header */}
              <div className={`${category.headerBg} ${category.headerText} px-6 py-4 flex items-center gap-3`}>
                <div className={`${category.iconBg} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {category.icon}
                </div>
                <h2 className="text-base font-bold tracking-tight">{category.title}</h2>
              </div>

              {/* Q&A items */}
              <div>
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`px-6 py-5 border-b border-gray-100 last:border-b-0 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <p className="font-semibold text-gray-900 mb-1.5 leading-snug">{item.q}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <section className="py-14 px-6 bg-brand-100">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center mx-auto mb-5">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-brand-900 mb-3 tracking-tight">Still have questions?</h2>
          <p className="text-brand-800 mb-6 leading-relaxed">
            Contact our support team and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:dishdiscover111@gmail.com"
            className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
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
