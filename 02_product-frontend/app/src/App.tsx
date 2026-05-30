import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import HeroSection from './sections/HeroSection'
import HighlightsSection from './sections/HighlightsSection'
import SkillsSection from './sections/SkillsSection'
import PipelineSection from './sections/PipelineSection'
import DemoSection from './sections/DemoSection'
import FooterSection from './sections/FooterSection'
import ChatWidget from './components/ChatWidget'

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app-root">
      <HeroSection />
      <HighlightsSection />
      <SkillsSection />
      <PipelineSection />
      <DemoSection />
      <FooterSection />
      <ChatWidget />
    </div>
  )
}
