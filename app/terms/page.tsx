import type { Metadata } from 'next'
import LegalHero from '@/components/legal/LegalHero'
import LegalSidebar from '@/components/legal/LegalSidebar'
import LegalContent from '@/components/legal/LegalContent'
import { termsDoc } from '@/lib/data/terms'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms of service governing your use of the DishDiscover application.',
}

export default function TermsPage() {
  const tocItems = termsDoc.sections.map((s) => ({ id: s.id, title: s.title }))

  return (
    <>
      <LegalHero
        title={termsDoc.title}
        lastUpdated={termsDoc.lastUpdated}
        description="By using DishDiscover, you agree to these terms. Please read carefully before creating an account or using our services."
        sectionCount={termsDoc.sections.length}
      />
      <div className="bg-gray-50 min-h-screen py-10 px-6">
        <div className="max-w-6xl mx-auto flex gap-10 items-start">
          <LegalSidebar sections={tocItems} />
          <LegalContent sections={termsDoc.sections} />
        </div>
      </div>
    </>
  )
}
