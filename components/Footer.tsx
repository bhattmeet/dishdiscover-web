import Link from 'next/link'
import Image from 'next/image'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Image
              src="/assets/app_logo_dark.svg"
              alt="DishDiscover"
              width={140}
              height={36}
            />
            <p className="mt-3 text-green-300 text-sm">Cook. Share. Inspire.</p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">App</p>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Google Play
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">Legal</p>
              <Link href="/privacy" className="block text-sm text-white/70 hover:text-white transition-colors mb-2">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-white/70 hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">Support</p>
              <a
                href="mailto:bhattmeet887@gmail.com"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>&copy; 2025 DishDiscover. All rights reserved.</span>
          <span>Last Updated: November 23, 2025</span>
        </div>
      </div>
    </footer>
  )
}
