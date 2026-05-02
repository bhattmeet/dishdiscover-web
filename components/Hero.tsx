import Image from 'next/image'
import Link from 'next/link'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export default function Hero() {
  return (
    <section className="bg-brand-900 pt-32 pb-36 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="bg-white rounded-3xl shadow-xl px-10 py-6">
          <Image
            src="/assets/app_logo_light.svg"
            alt="DishDiscover"
            width={200}
            height={52}
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Your Culinary Journey<br />Starts Here
          </h1>
          <p className="text-lg text-green-100 max-w-xl mx-auto leading-relaxed">
            Explore thousands of recipes from every cuisine, share your own creations,
            and connect with food lovers around the world.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <PlayIcon />
            Download on Google Play
          </a>
          <Link
            href="/privacy"
            className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <ShieldIcon />
            Privacy &amp; Legal
          </Link>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76a2 2 0 0 0 2.2-.29l13.4-7.74-3.08-3.08-12.52 11.11zm-1.18-22c-.06.2-.1.43-.1.67v19.14c0 .24.04.47.1.67l.08.07 10.72-10.72v-.24L2.08 1.69l-.08.07zm21.27 9.71-3.03-1.75-3.39 3.39 3.39 3.39 3.05-1.76c.87-.5.87-1.77-.02-2.27zM3.18.24l12.41 11.13 3.08-3.08L5.38.53A2 2 0 0 0 3.18.24z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
