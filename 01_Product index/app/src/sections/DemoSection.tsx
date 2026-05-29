import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Workflow URL - 用户可在此粘贴链接
const WORKFLOW_URL = 'https://udify.app/workflow/eg0F0sOLw6P5Rqfn'

export default function DemoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    if (contentRef.current) {
      const st = ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo(contentRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          )
        },
      })
      triggers.push(st)
    }

    return () => { triggers.forEach(st => st.kill()) }
  }, [])

  return (
    <section ref={sectionRef} id="product" className="demo-section">
      <div className="demo-header">
        <span className="section-label">Creator Workflow v1</span>
        <h2 className="section-title">
          灵感到落地，<span className="text-primary">4 个 Agent</span> 接力完成
        </h2>
      </div>

      <div ref={contentRef} className="demo-content">
        {/* 使用场景 - 优化排版 */}
        <div className="user-story">
          <span className="story-label">使用场景</span>
          <p className="story-text">
            早上刷到一条行业动态，你隐约觉得可以做成内容 —— 但不确定值不值得投入。
            输入一句话灵感，4 个 Agent 在 30 秒内完成热点匹配、用户验证、脚本创作和商业化评估，
            输出一份可直接执行的内容方案。
          </p>
        </div>

        {/* 简化为标题 + 按钮 */}
        <div className="workflow-cta">
          <div className="workflow-info">
            <h3 className="workflow-title">Creator Workflow v1</h3>
            <p className="workflow-subtitle">4 节点 Agent 接力 · 输入灵感 → 输出完整内容方案</p>
          </div>
          <a 
            href={WORKFLOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="workflow-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
            体验 Workflow
          </a>
        </div>
      </div>
    </section>
  )
}
