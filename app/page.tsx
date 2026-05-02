import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import QuickLinks from '@/components/QuickLinks'
import StatsBar from '@/components/StatsBar'
import FeaturesGrid from '@/components/FeaturesGrid'
import AppSection from '@/components/AppSection'

export const metadata: Metadata = {
  title: 'DishDiscover — Discover & Share Recipes',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <StatsBar />
      <FeaturesGrid />
      <AppSection />
    </>
  )
}
