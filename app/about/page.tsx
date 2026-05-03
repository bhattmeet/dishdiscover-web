import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about DishDiscover — the recipe discovery and sharing app built for food lovers worldwide.',
}

const values = [
  {
    title: 'Accessible to All',
    desc: 'Great recipes for every skill level — from beginner to seasoned chef. No experience required.',
    bg: 'bg-brand-100',
    iconColor: 'text-brand-800',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Community First',
    desc: 'Food is better when shared. Follow cooks, share recipes, and build your culinary network.',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Privacy Focused',
    desc: 'Your data stays yours. We collect only what is needed to run the app — nothing more.',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '1000+', label: 'Recipes' },
  { value: '30+', label: 'Cuisines' },
  { value: '4.5★', label: 'Rating' },
  { value: 'Free', label: 'To Download' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-3 inline-flex">
            <Image
              src="/assets/app_logo_light.svg"
              alt="DishDiscover"
              width={120}
              height={32}
              priority
            />
          </div>
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 bg-brand-800/60 px-3 py-1 rounded-full border border-brand-700 mb-4">
              Our Story
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
              Built by a food lover,<br />for food lovers
            </h1>
            <p className="text-green-100 text-lg max-w-xl mx-auto leading-relaxed">
              DishDiscover started as a passion project to make cooking accessible, social, and fun — turning everyday meals into a shared culinary journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-brand-800">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-800">Mission</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">Why we built DishDiscover</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe great food brings people together. DishDiscover is built to help anyone — from beginner home cooks to seasoned chefs — discover new dishes, share their own creations, and build a community around the joy of cooking.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every feature in the app is designed with one goal: making your cooking journey easier, more inspiring, and more connected.
            </p>
          </div>

          <div className="relative">
            <div className="bg-brand-900 rounded-3xl p-8 text-white">
              <Image
                src="/assets/app_logo_dark.svg"
                alt="DishDiscover"
                width={130}
                height={34}
                className="mb-6"
              />
              <p className="text-green-100 text-sm leading-relaxed mb-6">
                A recipe discovery and sharing platform that connects food enthusiasts worldwide. Browse thousands of recipes, share your own creations, and build a community around your love for food.
              </p>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M3.18 23.76a2 2 0 0 0 2.2-.29l13.4-7.74-3.08-3.08-12.52 11.11zm-1.18-22c-.06.2-.1.43-.1.67v19.14c0 .24.04.47.1.67l.08.07 10.72-10.72v-.24L2.08 1.69l-.08.07zm21.27 9.71-3.03-1.75-3.39 3.39 3.39 3.39 3.05-1.76c.87-.5.87-1.77-.02-2.27zM3.18.24l12.41 11.13 3.08-3.08L5.38.53A2 2 0 0 0 3.18.24z" />
                </svg>
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-800">Values</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 tracking-tight">What we stand for</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className={`${v.bg} ${v.iconColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  {v.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-800">The Developer</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">Made with care by Meet Bhatt</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            DishDiscover is an independent app built and maintained by Meet Bhatt — a developer passionate about creating products that make everyday life better. Every bug fix, feature, and design decision is made with real users in mind.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:dishdiscover111@gmail.com"
              className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Get in Touch
            </a>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
