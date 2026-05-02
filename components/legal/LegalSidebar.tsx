'use client'

import { useState, useEffect } from 'react'

interface SidebarItem {
  id: string
  title: string
}

interface Props {
  sections: SidebarItem[]
}

export default function LegalSidebar({ sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <nav
      className="hidden lg:block sticky top-24 w-64 flex-shrink-0 self-start max-h-[calc(100vh-7rem)] overflow-y-auto"
      aria-label="Table of contents"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        On this page
      </p>
      <ol className="space-y-0.5">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`flex items-start gap-2.5 text-sm py-1.5 px-2 rounded-lg transition-colors ${
                activeId === s.id
                  ? 'bg-brand-100 text-brand-800 font-semibold'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span
                className={`mt-0.5 text-xs w-5 text-center flex-shrink-0 tabular-nums ${
                  activeId === s.id ? 'text-brand-800' : 'text-gray-400'
                }`}
              >
                {i + 1}
              </span>
              <span className="leading-snug">{s.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
