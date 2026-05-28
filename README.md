# AI Creator OS

> **产品官网**：[https://ai-creator-os.vercel.app](https://ai-creator-os.vercel.app)  
> **一句话**：一个基于 DOMA 决策智能架构和 Agent Economics 定价模型的 Self-improving 内容操作系统。

---

## 🏗️ 产品架构

```
┌─────────────────────────────────────────┐
│  输出层：小红书 / B站 / YouTube 三语视频    │
├─────────────────────────────────────────┤
│  决策层：6 个 Self-improving Agent        │
│  热点 → 用户 → 脚本 → 知识库 → 运营 → 商业化 │
├─────────────────────────────────────────┤
│  基础设施：Claude Code + Dify + GitHub    │
│  知识库 + Skill 体系 + 版本控制 + Vercel  │
└─────────────────────────────────────────┘
```

---

## 💡 两大核心设计

### 设计 1：知问 —— 基于业务认知网的 Agent 快速制作企业

> "没有本体，大模型就不懂业务。"

借鉴 **DIP 决策智能平台**的本体建模方法论，构建了个人版业务认知网：

| DIP 企业级 | AI Creator OS 个人级 |
|-----------|---------------------|
| 业务对象 | 细分用户群、内容类型、平台规则 |
| 业务关系 | 用户-痛点-内容-平台关联图谱 |
| 业务认知网 | 博主定位体系 + 用户画像本体 + 内容分类体系 |
| 智能判断 | 6 个 Agent 的 Hybrid 拓扑协作 |
| 推动行动 | 内容生产流水线 + 飞书数据回流 |

**方法论栈**：DOMA → 四支柱 → T.A.M.T. → JTBD + 四层需求

### 设计 2：交易链路 —— Agent Economics 定价模型

> "用户购买的是任务完成，厂商计量的是计算过程。"

订阅制在 Agent 场景下的成本不可预测问题（同任务 Token 消耗存在数百倍差异），揭示核心矛盾：**订阅制无法覆盖 Agent 不可预测的 Token 消耗**。

三层计费结构：

| 层级 | 模式 | 定价 | 交付形态 |
|------|------|------|---------|
| **Free** | 体验 | $0 | 单 Agent 基础功能 |
| **Pro** | 订阅+超额按量 | $9.9-29.9/月 | 多 Agent Workflow + 知识库 |
| **Enterprise** | 私有化+效果付费 | 定制 | 本地模型 + 定制 Ontology |

**核心公式**：
- LTV/CAC > 3（SaaS 健康基准）
- 效果付费：按任务完成量计费（视频数/互动增量），而非不可预测的 Token
- 降本策略：Edge-TTS + Remotion 替代云端 API，成本降 80-100%

---

## 🤖 Agent-Based 产品设计思维

**不是「人找工具」，而是「人编排 Agent 团队」完成业务闭环。**

### Workflow 流水线
```
灵感输入 → 用户建模 → 热点匹配 → 脚本创作 → 商业化评估
```

### TDD-R 自我迭代机制
每个 Agent 内置 **Train → Diagnose → Deploy → Reflect** 循环：
- **Train**：输入历史数据和行业知识
- **Diagnose**：视频发布后抓取互动数据，诊断表现
- **Deploy**：根据诊断结果更新策略参数
- **Reflect**：周期性回顾，提炼经验，优化系统设计

---

## 📦 6 个 Self-improving Skill

| Skill | 角色 | 核心能力 | 自我迭代指标 |
|-------|------|---------|-------------|
| `trend-intelligence-scout` | 热点侦察兵 | 多平台抓取、选题推荐、动态领域匹配 | 选题采纳率与视频表现相关性 |
| `user-research-architect` | 用户建模师 | JTBD 推导、四层需求、痛点热力图 | 完播率与用户画像匹配度 |
| `video-content-architect` | 内容架构师 | 脚本创作、多语适配、A/B-Ready 预埋 | 爆款脚本自动提取模板 |
| `knowledge-os-curator` | 知识库管家 | 自动索引、按需检索、关联图谱 | 知识调用准确率 |
| `platform-growth-engineer` | 平台运营官 | 三平台诊断、A/B 策略评估、数据看板 | 粉丝增长率、爆款率 |
| `monetization-strategist` | 商业化顾问 | Agent Economics 定价、私有化部署、LTV/CAC | 变现效率、客户续约率 |

---

## 🛠️ 技术栈

| 层级 | 工具 | 用途 |
|------|------|------|
| **Agent 编排** | Claude Code + Dify | Skill 开发 + Chatflow/Workflow 产品化 |
| **模型层** | Claude / Qwen / DeepSeek | 推理中枢 |
| **知识库** | 本地 Markdown + 飞书多维表格 | 结构化知识存储 |
| **版本控制** | GitHub | Skill 即代码，作品集即产品 |
| **前端** | Trae + Vercel | 产品官网部署 |
| **内容生产** | 剪映 / Remotion | 口播录屏 + 半自动剪辑 |

---

## 🚀 可交互 Demo

- **产品官网**：[https://ai-creator-os.vercel.app](https://ai-creator-os.vercel.app)
- **Dify Workflow**（4 节点 Agent 接力）：[链接占位]
- **Dify Chatflow**（单 Agent 验证）：[链接占位]

---

## 📬 求职方向

- 云产品运营
- AI 应用产品经理
- 产品策划
- 智能体产品经理
- AI 创新业务产品经理
- AI 研究

---

*6 Agents, 1 human.*
