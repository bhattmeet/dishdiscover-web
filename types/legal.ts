export interface CalloutBlock {
  type: 'callout'
  variant: 'info' | 'warning' | 'success' | 'security'
  title?: string
  text: string
}

export interface ParagraphBlock {
  type: 'paragraph'
  text: string
}

export interface ListBlock {
  type: 'list'
  items: string[]
}

export interface SubheadingBlock {
  type: 'subheading'
  text: string
}

export type Block = ParagraphBlock | ListBlock | SubheadingBlock | CalloutBlock

export interface Section {
  id: string
  title: string
  blocks: Block[]
}

export interface LegalDoc {
  title: string
  lastUpdated: string
  sections: Section[]
}
