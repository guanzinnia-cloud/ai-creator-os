# AI Creator OS

> **品牌**：AI-1st Builder — THE AUTOMATED CREATIVE ENGINE  
> **产品官网**：[https://ai-creator-os.vercel.app](https://ai-creator-os.vercel.app)  
> **当前部署**：[https://5x2svswmoafaa.ok.kimi.link](https://5x2svswmoafaa.ok.kimi.link)  
> **一句话**：6 个 AI Agent 实时协作的自动化创意引擎，覆盖创作者从灵感到变现的全链路。

---

## 产品定位

**THE AUTOMATED CREATIVE ENGINE, REBUILT BY AGENTS.**

AI-1st Builder 不是又一个 AI 写作工具。它是一个由 6 个专业 Agent 组成的协作网络，覆盖创作者从「灵感输入」到「内容落地」到「变现评估」的完整链路。每个 Agent 内置 TDD-R 自我迭代机制，发得越多，系统越精准。

**热点洞察、用户建模、内容架构、知识管理、平台运营、商业化评估 —— 你负责灵感，它们负责落地。**

---

## 产品 01：Creator Workflow v1

### 使用场景

> 早上刷到一条行业动态，你隐约觉得可以做成内容 —— 但不确定值不值得投入。输入一句话灵感，4 个 Agent 在 30 秒内完成热点匹配、用户验证、脚本创作和商业化评估，输出一份可直接执行的内容方案。

### 4 节点 Agent 接力

| 节点 | Agent | 产出 |
|------|-------|------|
| 01 热点匹配 | `trend-intelligence-scout` | 灵感到热点的实时校准 |
| 02 用户建模 | `user-research-architect` | JTBD 推导 + 痛点定位 |
| 03 脚本创作 | `video-content-architect` | 多平台适配的内容产出 |
| 04 商业化评估 | `monetization-strategist` | 变现路径与定价策略 |

**Dify Workflow 链接**：`YOUR_WORKFLOW_URL`

---

## Agent 矩阵：6 Skill × 6 Chatflow

每个 Skill 对应一个可交互的 Chatflow Agent，覆盖创作全链路。

| # | Skill | 对应 Agent | 使用场景 | 状态 |
|---|-------|-----------|---------|------|
| 1 | `trend-intelligence-scout` | 🔥 热点侦查助手 | 每天获取 3-5 个经过验证的热点选题，附带热度评分与关联知识标注 | ✅ 已上线 |
| 2 | `video-content-architect` | 🎬 内容架构助手 | 输入一个话题，输出小红书/B站/YouTube 三平台的完整脚本 | ✅ 已上线 |
| 3 | `user-research-architect` | 👤 用户建模助手 | 每次发布前，验证内容是否精准命中目标用户的 Job-to-be-Done | ✅ 已上线 |
| 4 | `knowledge-os-curator` | 📚 知识库管家 | 上传学习笔记和资料，Agent 自动建立知识图谱，其他 Agent 随时调用 | 🔨 打造中 |
| 5 | `platform-growth-engineer` | 📈 平台运营官 | 发布后立即获取三平台的运营诊断报告，明确下一步优化动作 | 🔨 打造中 |
| 6 | `monetization-strategist` | 💼 商业化顾问 | 基于粉丝画像和内容数据，生成个性化的商业化路径与定价建议 | 🔨 打造中 |

### 已上线 Agent 链接

```html
<!-- 热点侦查助手 -->
<iframe src="YOUR_CHATFLOW_URL_1"></iframe>

<!-- 内容架构助手 -->
<iframe src="YOUR_CHATFLOW_URL_2"></iframe>

<!-- 用户建模助手 -->
<iframe src="YOUR_CHATFLOW_URL_3"></iframe>
```

### Skill 文档

- [trend-intelligence-scout](https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/trend-intelligence-scout/SKILL.md)
- [video-content-architect](https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/video-content-architect/SKILL.md)
- [user-research-architect](https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/user-research-architect/SKILL.md)
- [knowledge-os-curator](https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/knowledge-os-curator/SKILL.md)
- [platform-growth-engineer](https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/platform-growth-engineer/SKILL.md)
- [monetization-strategist](https://github.com/guanzinnia-cloud/ai-creator-os/blob/main/skills/monetization-strategist/SKILL.md)

---

## 核心亮点

### 亮点 1：认知层 — 业务知识图谱驱动

每个 Agent 不是孤立模型，而是嵌入在业务认知网络中的节点。创作者画像、内容类型、平台规则构成三层本体，Agent 的每次输出都在知识图谱的约束下进行 —— 确保策略可落地，而非泛泛而谈。

**方法论栈**：本体建模 → 四支柱框架 → T.A.M.T. → JTBD + 四层需求

### 亮点 2：交易链路 — Agent Economics 定价引擎

Agent 时代的成本结构被重写：同任务 Token 消耗存在数百倍波动，传统订阅制难以为继。三层计费模型（体验 / 订阅+按量 / 私有化+效果付费）配合 LTV/CAC 动态评估，让创作者经济的商业化路径清晰可见。

| 层级 | 模式 | 定价 | 交付形态 |
|------|------|------|---------|
| **Free** | 体验 | $0 | 单 Agent 基础功能 |
| **Pro** | 订阅+超额按量 | $9.9-29.9/月 | 多 Agent Workflow + 知识库 |
| **Enterprise** | 私有化+效果付费 | 定制 | 本地模型 + 定制 Ontology |

---

## 自我进化：TDD-R 迭代机制

**工作流**：灵感输入 → 热点匹配 → 用户建模 → 脚本创作 → 知识管理 → 商业化评估

每个 Agent 内置 **Train → Diagnose → Deploy → Reflect** 闭环：
- **Train**：输入历史数据和行业知识
- **Diagnose**：视频发布后抓取互动数据，诊断表现
- **Deploy**：根据诊断结果更新策略参数
- **Reflect**：周期性回顾，提炼经验，优化系统设计

---

## 技术栈

| 层级 | 工具 | 用途 |
|------|------|------|
| **Agent 编排** | Claude Code + Dify | Skill 开发 + Chatflow/Workflow 产品化 |
| **模型层** | Claude / Qwen / DeepSeek | 推理中枢 |
| **知识库** | 本地 Markdown + 飞书多维表格 | 结构化知识存储 |
| **版本控制** | GitHub | Skill 即代码，作品集即产品 |
| **前端** | React + TypeScript + Tailwind CSS + Vercel | 产品官网 |
| **内容生产** | 剪映 / Remotion | 口播录屏 + 半自动剪辑 |

---

## 部署

- **GitHub 仓库**：[https://github.com/guanzinnia-cloud/ai-creator-os](https://github.com/guanzinnia-cloud/ai-creator-os)
- **部署平台**：Vercel

---

## 求职方向

- 云产品运营
- AI 应用产品经理
- 产品策划
- 智能体产品经理
- AI 创新业务产品经理
- AI 研究

---

*6 Agents, 1 human.*
