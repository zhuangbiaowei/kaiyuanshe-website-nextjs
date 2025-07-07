import { HeroSection } from '@/components/sections/hero-section'
import { VisionSection } from '@/components/sections/vision-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ActivitiesSection } from '@/components/sections/activities-section'
import { NewsSection } from '@/components/sections/news-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <ProjectsSection />
      <ActivitiesSection />
      <NewsSection />
    </>
  )
}