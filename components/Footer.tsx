import Link from 'next/link'
import Image from 'next/image'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <Image
              src="/assets/app_logo_dark.svg"
              alt="DishDiscover"
              width={140}
              height={36}
            />
            <p className="mt-3 text-green-300 text-sm">Cook. Share. Inspire.</p>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-brand-800 hover:bg-brand-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76a2 2 0 0 0 2.2-.29l13.4-7.74-3.08-3.08-12.52 11.11zm-1.18-22c-.06.2-.1.43-.1.67v19.14c0 .24.04.47.1.67l.08.07 10.72-10.72v-.24L2.08 1.69l-.08.07zm21.27 9.71-3.03-1.75-3.39 3.39 3.39 3.39 3.05-1.76c.87-.5.87-1.77-.02-2.27zM3.18.24l12.41 11.13 3.08-3.08L5.38.53A2 2 0 0 0 3.18.24z" />
              </svg>
              Google Play
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">Company</p>
              <Link href="/about" className="block text-sm text-white/70 hover:text-white transition-colors mb-2">About</Link>
              <Link href="/faq" className="block text-sm text-white/70 hover:text-white transition-colors mb-2">FAQ</Link>
              <Link href="/changelog" className="block text-sm text-white/70 hover:text-white transition-colors">Changelog</Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">Legal</p>
              <Link href="/privacy" className="block text-sm text-white/70 hover:text-white transition-colors mb-2">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-white/70 hover:text-white transition-colors mb-2">Terms &amp; Conditions</Link>
              <Link href="/cookies" className="block text-sm text-white/70 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">Account</p>
              <Link href="/delete-account" className="block text-sm text-white/70 hover:text-white transition-colors">Delete Account</Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">Support</p>
              <a href="mailto:dishdiscover111@gmail.com" className="block text-sm text-white/70 hover:text-white transition-colors mb-2">dishdiscover111@gmail.com</a>
              <a href="mailto:bhattmeet887@gmail.com" className="block text-sm text-white/70 hover:text-white transition-colors">bhattmeet887@gmail.com</a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} DishDiscover. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
