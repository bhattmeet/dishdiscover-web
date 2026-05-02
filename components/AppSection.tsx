import Image from 'next/image'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export default function AppSection() {
  return (
    <section className="bg-brand-800 py-16 px-6" aria-label="Download DishDiscover">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/assets/app_logo.png"
            alt="DishDiscover app icon"
            width={96}
            height={96}
            className="rounded-2xl"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white mb-3">DishDiscover</h2>
          <p className="text-green-100 text-sm leading-relaxed mb-6 max-w-lg">
            A recipe discovery and sharing platform that connects food enthusiasts worldwide.
            Browse thousands of recipes from diverse cuisines, create your own culinary masterpieces,
            and build a community around your love for food.
          </p>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-800 font-semibold px-5 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            <PlayIcon />
            Google Play
          </a>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76a2 2 0 0 0 2.2-.29l13.4-7.74-3.08-3.08-12.52 11.11zm-1.18-22c-.06.2-.1.43-.1.67v19.14c0 .24.04.47.1.67l.08.07 10.72-10.72v-.24L2.08 1.69l-.08.07zm21.27 9.71-3.03-1.75-3.39 3.39 3.39 3.39 3.05-1.76c.87-.5.87-1.77-.02-2.27zM3.18.24l12.41 11.13 3.08-3.08L5.38.53A2 2 0 0 0 3.18.24z" />
    </svg>
  )
}
