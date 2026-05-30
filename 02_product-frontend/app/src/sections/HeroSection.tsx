import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import NetworkCanvas from '../components/NetworkCanvas'

export default function HeroSection() {
  const navRef = useRef<HTMLElement>(null)
  const titleLine1Ref = useRef<HTMLSpanElement>(null)
  const titleLine2Ref = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(titleLine1Ref.current,
      { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(titleLine2Ref.current,
      { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    )

    return () => { tl.kill() }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Workflow URL - 用户可在此粘贴链接
  const WORKFLOW_URL = 'https://udify.app/workflow/eg0F0sOLw6P5Rqfn'

  return (
    <section className="hero-section">
      {/* Network Canvas as background */}
      <div className="hero-canvas-bg">
        <NetworkCanvas />
      </div>

      <nav ref={navRef} className="hero-nav">
        <div className="hero-logo">
          <span className="logo-mark">THE AUTOMATED CREATIVE</span>
          <span className="logo-suffix">COMMERCIALIZATION ENGINE</span>
        </div>
        <div className="hero-nav-links">
          <button onClick={() => scrollTo('highlights')} className="nav-link-btn">核心亮点</button>
          <button onClick={() => scrollTo('agents')} className="nav-link-btn">Agent 矩阵</button>
          <button onClick={() => scrollTo('pipeline')} className="nav-link-btn">自我进化</button>
          <button onClick={() => scrollTo('product')} className="nav-link-btn">Creator Workflow v1</button>
          <a
            href="https://github.com/guanzinnia-cloud/ai-creator-os"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-btn nav-github"
          >
            GitHub
          </a>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          <span ref={titleLine1Ref} className="title-line title-solid">
            THE AUTOMATED CREATIVE
          </span>
          <span ref={titleLine2Ref} className="title-line title-stroke">
            COMMERCIALIZATION ENGINE
          </span>
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          每天早上，你只需要输入一句话灵感 —— 6 个 AI Agent 自动完成选题匹配、用户验证、
          脚本创作、知识检索、运营诊断和变现评估。创作全链路，一次搞定。
        </p>
        <div ref={ctaRef} className="hero-cta-group">
          <a 
            href={WORKFLOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-primary"
          >
            体验 Workflow
          </a>
          <button onClick={() => scrollTo('agents')} className="hero-cta-secondary">
            探索 Agent 矩阵
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
