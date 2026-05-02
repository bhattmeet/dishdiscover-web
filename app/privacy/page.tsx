import type { Metadata } from 'next'
import LegalHero from '@/components/legal/LegalHero'
import LegalSidebar from '@/components/legal/LegalSidebar'
import LegalContent from '@/components/legal/LegalContent'
import { privacyDoc } from '@/lib/data/privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how DishDiscover collects, uses, and protects your personal data.',
}

export default function PrivacyPage() {
  const tocItems = privacyDoc.sections.map((s) => ({ id: s.id, title: s.title }))

  return (
    <>
      <LegalHero
        title={privacyDoc.title}
        lastUpdated={privacyDoc.lastUpdated}
        description="We are committed to protecting your privacy. This policy explains exactly how your data is collected, used, and safeguarded."
        sectionCount={privacyDoc.sections.length}
      />
      <div className="bg-gray-50 min-h-screen py-10 px-6">
        <div className="max-w-6xl mx-auto flex gap-10 items-start">
          <LegalSidebar sections={tocItems} />
          <LegalContent sections={privacyDoc.sections} />
        </div>
      </div>
    </>
  )
}
