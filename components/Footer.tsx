import Link from 'next/link'
import Image from 'next/image'

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
