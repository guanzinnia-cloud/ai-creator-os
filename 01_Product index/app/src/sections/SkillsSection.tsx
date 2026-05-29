import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Skill {
  icon: string
  name: string
  desc: string
  scenario: string
  href: string
  color: string
  metric: string
  agentName: string
  chatflowStatus: 'live' | 'soon'
  chatflowUrl: string
}

const skills: Skill[] = [
  {
    icon: '👤',
    name: 'user-research-architect',
    desc: 'JTBD 推导 + 四层需求模型 + 痛点热力图。用 Jobs-to-be-Done 替代简单的人口统计标签。',
    scenario: '每次发布前，让 Agent 验证你的内容是否精准命中目标用户的 Job-to-be-Done。',
    href: 'https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/user-research-architect/SKILL.md',
    color: '#05D5FA',
    metric: '视频完播率、用户画像匹配度、评论区痛点词频',
    agentName: '用户建模助手',
    chatflowStatus: 'live',
    chatflowUrl: 'https://udify.app/chat/le5nzqDHAgzeKS3A',
  },
  {
    icon: '🔥',
    name: 'trend-intelligence-scout',
    desc: '多平台热点抓取与选题推荐，支持动态领域匹配。只推荐有知识增量的话题。',
    scenario: '每天打开，获取 3-5 个经过验证的热点选题，附带热度评分与关联知识标注。',
    href: 'https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/trend-intelligence-scout/SKILL.md',
    color: '#FF2A6D',
    metric: '选题采纳率、视频表现相关性',
    agentName: '热点侦查助手',
    chatflowStatus: 'live',
    chatflowUrl: 'https://udify.app/chat/bLSjoBFFCt0ZcHb7',
  },
  {
    icon: '🎬',
    name: 'video-content-architect',
    desc: '脚本创作、多语适配、A/B-Ready 预埋。短视频/中视频/长视频三档自动适配。',
    scenario: '输入一个话题，输出小红书/B站/YouTube 三平台的完整脚本，含钩子、结构、CTA。',
    href: 'https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/video-content-architect/SKILL.md',
    color: '#C1A8FF',
    metric: '视频完播率、互动率、用户满意度评分',
    agentName: '内容架构助手',
    chatflowStatus: 'live',
    chatflowUrl: 'https://udify.app/chat/eUtE2pqQLOECuH14',
  },
  {
    icon: '📚',
    name: 'knowledge-os-curator',
    desc: '自动索引、按需检索、关联图谱。业务 Agent 标记知识缺口，自动触发补充学习。',
    scenario: '上传你的学习笔记和资料，Agent 自动建立知识图谱，其他 Agent 随时调用。',
    href: 'https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/knowledge-os-curator/SKILL.md',
    color: '#4AF6FF',
    metric: '知识调用准确率、知识缺口发现率',
    agentName: '知识库管家',
    chatflowStatus: 'soon',
    chatflowUrl: 'YOUR_CHATFLOW_URL_4',
  },
  {
    icon: '📈',
    name: 'platform-growth-engineer',
    desc: '三平台差异化运营诊断、A/B-Ready 策略评估、数据驱动的增长优化。',
    scenario: '发布后立即获取三平台的运营诊断报告，明确下一步的优化动作。',
    href: 'https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/platform-growth-engineer/SKILL.md',
    color: '#FFD700',
    metric: '粉丝增长率、爆款率、单条内容获客成本',
    agentName: '平台运营官',
    chatflowStatus: 'soon',
    chatflowUrl: 'YOUR_CHATFLOW_URL_5',
  },
  {
    icon: '💼',
    name: 'monetization-strategist',
    desc: 'Agent Economics 定价设计、渐进式变现路径规划、LTV/CAC 盈亏平衡分析。',
    scenario: '基于你的粉丝画像和内容数据，生成个性化的商业化路径与定价建议。',
    href: 'https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/monetization-strategist/SKILL.md',
    color: '#FF9F43',
    metric: '变现效率（收入/粉丝数）、LTV/CAC、客户续约率',
    agentName: '商业化顾问',
    chatflowStatus: 'soon',
    chatflowUrl: 'YOUR_CHATFLOW_URL_6',
  },
]

export default function SkillsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    const triggers: ScrollTrigger[] = []

    cards.forEach((card, i) => {
      const st = ScrollTrigger.create({
        trigger: card!,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.fromTo(card,
            { opacity: 0, y: 30, scale: 0.96 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.6, delay: i * 0.08, ease: 'power3.out',
            }
          )
        },
      })
      triggers.push(st)
    })

    return () => { triggers.forEach(st => st.kill()) }
  }, [])

  return (
    <section id="agents" className="skills-section">
      <div className="skills-header">
        <span className="section-label">Agent 矩阵</span>
        <h2 className="section-title">
          6 个 Skill，<span className="text-primary">6 个 Agent</span>
        </h2>
        <p className="section-desc">
          每个 Skill 对应一个可交互的 Chatflow Agent，覆盖创作全链路。
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div
            key={s.name}
            ref={el => { cardsRef.current[i] = el }}
            className={`skill-card ${s.chatflowStatus === 'live' ? 'skill-live' : 'skill-soon'}`}
            style={{ '--skill-color': s.color } as React.CSSProperties}
          >
            {/* Top color bar */}
            <div className="skill-top-bar" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />

            {/* Status badge */}
            <div className="skill-status-row">
              <span
                className="skill-status-badge"
                style={{
                  background: s.chatflowStatus === 'live'
                    ? `${s.color}18`
                    : 'rgba(255,255,255,0.04)',
                  color: s.chatflowStatus === 'live' ? s.color : 'var(--text-tertiary)',
                  borderColor: s.chatflowStatus === 'live' ? `${s.color}35` : 'var(--border)',
                }}
              >
                {s.chatflowStatus === 'live' ? '● 已上线' : '◦ 打造中'}
              </span>
            </div>

            {/* Icon + Agent Name 横向排列 */}
            <div className="skill-header-row">
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-agent-name" style={{ color: s.color }}>
                {s.agentName}
              </div>
            </div>

            <div className="skill-name">
              <code>{s.name}</code>
            </div>

            <div className="skill-desc">{s.desc}</div>

            {/* User scenario */}
            <div className="skill-scenario">
              <span className="scenario-label">使用场景</span>
              <p>{s.scenario}</p>
            </div>

            <div className="skill-metric">
              <span className="metric-label">迭代指标</span>
              <span className="metric-value">{s.metric}</span>
            </div>

            {/* Dual action buttons */}
            <div className="skill-actions">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-btn skill-btn-doc"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Skill 文档
              </a>

              {s.chatflowStatus === 'live' ? (
                <a
                  href={s.chatflowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-btn skill-btn-agent"
                  style={{
                    background: `${s.color}15`,
                    color: s.color,
                    borderColor: `${s.color}30`,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  体验 Agent
                </a>
              ) : (
                <button className="skill-btn skill-btn-disabled" disabled>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  即将开放
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
