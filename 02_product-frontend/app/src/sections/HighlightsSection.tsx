import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  {
    icon: '🧠',
    title: '认知层 — 业务知识图谱驱动',
    desc: '每个 Agent 不是孤立模型，而是嵌入在业务认知网络中的节点。创作者画像、内容类型、平台规则构成三层本体，Agent 的每次输出都在知识图谱的约束下进行 —— 确保策略可落地，而非泛泛而谈。',
    tags: ['本体建模', '知识图谱', '认知约束'],
  },
  {
    icon: '💰',
    title: '交易链路 — Agent Economics 定价引擎',
    desc: 'Agent 时代的成本结构被重写：同任务 Token 消耗存在数百倍波动，传统订阅制难以为继。三层计费模型（体验 / 订阅+按量 / 私有化+效果付费）配合 LTV/CAC 动态评估，让创作者经济的商业化路径清晰可见。',
    tags: ['三层计费', '效果付费', 'LTV/CAC'],
  },
]

export default function HighlightsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    const triggers: ScrollTrigger[] = []

    cards.forEach((card, i) => {
      const st = ScrollTrigger.create({
        trigger: card!,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(card,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out' }
          )
        },
      })
      triggers.push(st)
    })

    return () => { triggers.forEach(st => st.kill()) }
  }, [])

  return (
    <section id="highlights" className="highlights-section">
      <div className="highlights-header">
        <span className="section-label">核心亮点</span>
        <h2 className="section-title">
          从认知到交易的<span className="text-primary">全链路闭环</span>
        </h2>
      </div>
      <div className="highlights-grid">
        {highlights.map((h, i) => (
          <div
            key={i}
            ref={el => { cardsRef.current[i] = el }}
            className="highlight-card"
          >
            <div className="highlight-icon">{h.icon}</div>
            <h3 className="highlight-title">{h.title}</h3>
            <p className="highlight-desc">{h.desc}</p>
            <div className="highlight-tags">
              {h.tags.map((tag, j) => (
                <span key={j} className="highlight-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
