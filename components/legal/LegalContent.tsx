import type { Section, Block } from '@/types/legal'

const calloutConfig = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-400',
    titleColor: 'text-blue-700',
    textColor: 'text-blue-700',
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-400',
    titleColor: 'text-yellow-800',
    textColor: 'text-yellow-700',
  },
  success: {
    bg: 'bg-brand-100',
    border: 'border-brand-700',
    titleColor: 'text-brand-900',
    textColor: 'text-brand-800',
  },
  security: {
    bg: 'bg-brand-100',
    border: 'border-brand-800',
    titleColor: 'text-brand-900',
    textColor: 'text-brand-800',
  },
}

function renderBlock(block: Block, idx: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={idx} className="text-gray-600 text-sm leading-relaxed">{block.text}</p>
    case 'subheading':
      return <h3 key={idx} className="text-sm font-semibold text-gray-800 mt-4 mb-1">{block.text}</h3>
    case 'list':
      return (
        <ul key={idx} className="list-disc list-inside space-y-1 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="text-gray-600 text-sm leading-relaxed">{item}</li>
          ))}
        </ul>
      )
    case 'callout': {
      const cfg = calloutConfig[block.variant]
      return (
        <div key={idx} className={`${cfg.bg} border-l-4 ${cfg.border} rounded-r-lg p-4`}>
          {block.title && (
            <p className={`${cfg.titleColor} font-semibold text-xs uppercase tracking-wide mb-1`}>
              {block.title}
            </p>
          )}
          {block.text && <p className={`${cfg.textColor} text-sm`}>{block.text}</p>}
        </div>
      )
    }
  }
}

interface Props {
  sections: Section[]
}

export default function LegalContent({ sections }: Props) {
  return (
    <div className="flex-1 min-w-0 space-y-6">
      {sections.map((section, i) => (
        <div
          key={section.id}
          id={section.id}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-800 text-white text-sm font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
          </div>
          <div className="space-y-3">
            {section.blocks.map((block, bi) => renderBlock(block, bi))}
          </div>
        </div>
      ))}
    </div>
  )
}
