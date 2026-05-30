import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 动态循环动画 - 持续迭代效果
const startCycleAnimation = (element: Element) => {
  const arrow = element.querySelector('.cycle-loop-arrow svg')
  const label = element.querySelector('.loop-label')
  
  if (arrow) {
    gsap.to(arrow, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
      transformOrigin: 'center center'
    })
  }
  
  if (label) {
    gsap.to(label, {
      opacity: 0.5,
      scale: 0.95,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }
}

// 自我进化循环步骤 - 基于上传的 SKILL.md 文件中的 self_improving 内容
const evolutionSteps = [
  {
    icon: '📊',
    title: 'Reflect',
    desc: '数据回流与效果评估',
    detail: '监控完播率、互动率、涨粉数等核心指标，评估内容表现与用户反馈',
    color: '#4AF6FF'
  },
  {
    icon: '🔍',
    title: 'Diagnose',
    desc: '诊断与归因分析',
    detail: '分析内容缺口、用户反馈，识别改进机会点，定位优化方向',
    color: '#FF6B35'
  },
  {
    icon: '🎯',
    title: 'Train',
    desc: '模型微调与知识更新',
    detail: '基于诊断结果更新 Few-shot 示例、调整 Prompt 参数，持续优化 Agent 输出质量',
    color: '#C1A8FF'
  },
  {
    icon: '🚀',
    title: 'Deploy',
    desc: '新版本部署与验证',
    detail: '小流量 A/B 测试验证改进效果，稳定后全量上线',
    color: '#05D5FA'
  }
]

// 各 Agent 的自我进化指标
const agentMetrics = [
  { agent: '用户建模助手', metric: '视频完播率、用户画像匹配度、评论区痛点词频', color: '#05D5FA' },
  { agent: '热点侦查助手', metric: '选题采纳率、视频表现相关性', color: '#FF2A6D' },
  { agent: '内容架构助手', metric: '视频完播率、互动率、用户满意度评分', color: '#C1A8FF' },
  { agent: '知识库管家', metric: '知识调用准确率、知识缺口发现率', color: '#4AF6FF' },
  { agent: '平台运营官', metric: '粉丝增长率、爆款率、单条内容获客成本', color: '#FFD700' },
  { agent: '商业化顾问', metric: '变现效率（收入/粉丝数）、LTV/CAC、客户续约率', color: '#FF9F43' }
]

export default function PipelineSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cycleRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    // 循环步骤动画
    const stepEls = cycleRef.current?.querySelectorAll('.evolution-step')
    stepEls?.forEach((step, i) => {
      const st = ScrollTrigger.create({
        trigger: step,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(step,
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: i * 0.15, ease: 'power3.out' }
          )
        },
      })
      triggers.push(st)
    })

    // 箭头连接线动画
    const connectorEls = cycleRef.current?.querySelectorAll('.step-connector')
    connectorEls?.forEach((connector, i) => {
      const st = ScrollTrigger.create({
        trigger: connector,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(connector,
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.4, delay: i * 0.2 + 0.3, ease: 'power2.out' }
          )
        },
      })
      triggers.push(st)
    })

    // 持续迭代循环动画
    const loopArrow = cycleRef.current?.querySelector('.cycle-loop-arrow')
    if (loopArrow) {
      const st = ScrollTrigger.create({
        trigger: loopArrow,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(loopArrow,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }
          )
          startCycleAnimation(loopArrow)
        },
      })
      triggers.push(st)
    }

    // 指标卡片动画
    const metricEls = metricsRef.current?.querySelectorAll('.metric-card')
    metricEls?.forEach((card, i) => {
      const st = ScrollTrigger.create({
        trigger: card,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.fromTo(card,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, delay: i * 0.08, ease: 'power3.out' }
          )
        },
      })
      triggers.push(st)
    })

    return () => { triggers.forEach(st => st.kill()) }
  }, [])

  return (
    <section id="pipeline" ref={sectionRef} className="pipeline-section">
      <div className="pipeline-header">
        <span className="section-label">自我进化</span>
        <h2 className="section-title">
          每一次发布，<span className="text-primary">都在训练下一次</span>
        </h2>
        <p className="section-desc">
          每个 Agent 内置 TDD-R 迭代闭环，发得越多，系统越精准
        </p>
      </div>

      {/* TDD-R 循环可视化 */}
      <div ref={cycleRef} className="evolution-cycle">
        <div className="cycle-container">
          {evolutionSteps.map((step, i) => (
            <div key={step.title} className="evolution-step">
              <div 
                className="step-icon-wrapper"
                style={{ 
                  background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                  borderColor: `${step.color}30`
                }}
              >
                <span className="step-icon">{step.icon}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title" style={{ color: step.color }}>{step.title}</h3>
                <p className="step-subtitle">{step.desc}</p>
                <p className="step-detail">{step.detail}</p>
              </div>
              {i < evolutionSteps.length - 1 && (
                <div className="step-connector">
                  <svg width="40" height="20" viewBox="0 0 40 20">
                    <path 
                      d="M0 10 L30 10 M25 5 L30 10 L25 15" 
                      stroke="rgba(74, 246, 255, 0.3)" 
                      strokeWidth="2" 
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
          {/* 循环回到起点的箭头 */}
          <div className="cycle-loop-arrow">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <path 
                d="M30 5 A25 25 0 1 1 5 30" 
                stroke="rgba(74, 246, 255, 0.2)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="4 4"
              />
              <polygon 
                points="5,30 0,25 0,35" 
                fill="rgba(74, 246, 255, 0.3)"
                transform="rotate(-90 5 30)"
              />
            </svg>
            <span className="loop-label">持续迭代</span>
          </div>
        </div>
      </div>

      {/* 各 Agent 迭代指标 */}
      <div className="metrics-section">
        <h3 className="metrics-title">
          <span className="metrics-icon">📈</span>
          Agent 迭代指标
        </h3>
        <div ref={metricsRef} className="metrics-grid">
          {agentMetrics.map((m) => (
            <div 
              key={m.agent} 
              className="metric-card"
              style={{ '--agent-color': m.color } as React.CSSProperties}
            >
              <div className="metric-dot" style={{ background: m.color }} />
              <div className="metric-info">
                <span className="metric-agent">{m.agent}</span>
                <span className="metric-name">{m.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
