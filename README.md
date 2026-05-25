# AI Creator OS —— Agent-Native Content Operating System

> 一个基于 DOMA 决策智能架构和 Hybrid 多 Agent 拓扑的 Self-improving 内容操作系统，支持动态领域匹配与中/英/粤三语视频自动生产。

[![GitHub](https://img.shields.io/badge/GitHub-ai--creator--os-black)](https://github.com/guanzinnia-cloud/ai-creator-os)
[![License](https://img.shields.io/badge/License-MIT-green)]()

---

## 基本介绍

### Why：为什么做这个项目？
作为 AI 产品经理，我相信 **"Dogfooding"**——自己先用 AI 搭建完整业务闭环，才能真正理解 Agent 编排、多模态生成、全球化运营的痛点。市面上工具都是单点（ChatGPT 写文案、剪映剪视频），缺乏**端到端的 Agent 协作系统**。我想做一个**越用越强**的内容工厂，同时作为 GitHub 作品集。

### What：系统架构

```
┌─────────────────────────────────────────┐
│  输出层：小红书 / B站 / YouTube 三语视频     │
├─────────────────────────────────────────┤
│  决策层：6 个 Self-improving Agent 编排    │
│  热点 → 用户 → 创作 → 知识库 → 运营 → 商业化│
├─────────────────────────────────────────┤
│  基础设施：Claude Code + GitHub + 飞书 + Dify│
│  知识库 + Skill 体系 + 版本控制 + 产品化     │
└─────────────────────────────────────────┘
```

### How：方法论深度
- **DOMA 决策智能架构**（中科闻歌）：Data → Ontology → Models → Agents。核心判断："没有本体，大模型就不懂业务"。
- **Andrew Ng 四支柱**：Reflection / Tool Use / Planning / Multi-Agent。
- **T.A.M.T. 单 Agent 设计框架**：Task / Answer / Model / Tools。
- **JTBD + 四层需求模型**：Wants → Demand → Need → Requirement，确保内容不是自嗨。
- **TDD-R 自我迭代**：Train → Diagnose → Deploy → Reflect，每个 Agent 根据视频数据自动修正策略。

### Result：当前成果
- 6 大 Agent Skill 全部就位，遵循统一的 7 段式 Prompt 结构标准
- 结构化知识库（DOMA、四支柱、T.A.M.T.、JTBD、用户洞察、项目复盘）
- 第一条三语视频脚本完成平台差异化适配（小红书 90s / B站 5min / YouTube 7min）
- 动态领域匹配支持：香港求职 / 深圳求职 / 港深双城生活 / AI产品能力 / 跨境运营 / AI科技趋势

### Next Step
- 短期：完成剩余 5 个 Agent 的 Dify Chatflow，串成 Workflow
- 中期：发布 10 条视频，验证数据回流和自我迭代机制
- 长期：开源为模板，帮助更多 AI PM 用系统化方法做内容副业

---

## 系统架构详解

### 6 大 Agent（Hybrid 拓扑）

| Agent | 角色 | 核心能力 | 自我迭代机制 |
|-------|------|---------|-------------|
| `trend-intelligence-scout` | 热点侦察兵 | 多平台热点抓取、选题推荐、动态领域匹配 | 预测准确度每周校准 |
| `user-research-architect` | 用户建模师 | JTBD 推导、四层需求映射、痛点热力图 | 根据视频数据自动修正画像权重 |
| `video-content-architect` | 内容架构师 | 脚本创作、多语适配、平台差异化、A/B-Ready 预埋 | 爆款脚本自动提取模板 |
| `knowledge-os-curator` | 知识库管家 | 自动索引、按需检索、关联图谱、入库处理 | 知识缺口自动触发补充学习 |
| `platform-growth-engineer` | 平台运营官 | 三平台诊断、A/B-Ready 策略评估、数据看板 | 策略效果自动标记有效/无效 |
| `monetization-strategist` | 商业化顾问 | 渐进式变现路径、合作评估、产品化建议 | 合作后更新品牌库和报价模型 |

### 未来演进：Hierarchical Manager 模式

```
Manager Agent（决策中枢）
├── 情报层：Trend Scout + User Research + Knowledge Curator
├── 执行层：Video Architect
└── 输出层：Platform Engineer + Monetization Strategy + Harness Eval
```

---

## 知识库结构

```
knowledge-base/
├── 01-agent-architecture/       # Agent 设计方法论
│   ├── doma-framework.md          # DOMA 决策智能架构
│   ├── four-pillars.md            # Andrew Ng 四支柱
│   ├── tamt-framework.md          # T.A.M.T. 单 Agent 设计
│   ├── multi-agent-topologies.md  # 多 Agent 拓扑结构
│   ├── harness-evaluation.md      # 质量保障层
│   ├── mcp-integration.md         # MCP 接入规划
│   └── hierarchical-topology.md   # 层级架构优化
├── 02-user-research/              # 用户洞察与分层
│   └── user-segments.md           # JTBD + 四层需求模型
├── 03-content-strategy/           # 内容策略与运营（待补充）
├── 04-project-experience/         # 个人项目复盘（待补充）
├── 05-industry-trends/            # 行业趋势与竞品（待补充）
└── 06-tools-resources/            # 工具与资源（待补充）
```

---

## 技术栈

| 层级 | 工具 | 用途 |
|------|------|------|
| **Agent 编排** | Claude Code + Dify | Skill 开发 + Chatflow 产品化 |
| **模型层** | Claude / Qwen / DeepSeek | 推理中枢（逐步迁移至最优模型） |
| **知识库** | 本地 Markdown + 飞书多维表格 | 结构化知识存储 + 人类维护备份 |
| **版本控制** | GitHub | Skill 即代码，作品集即产品 |
| **内容生产** | 剪映 / Remotion（规划） | 口播录屏 + 半自动剪辑 |
| **数据看板** | 飞书多维表格（规划 API 自动化） | 视频数据、选题池、用户洞察 |

---

## Roadmap

| 阶段 | 目标 | 状态 |
|------|------|------|
| **Skill 验证** | 6 个 Agent Skill 全部就位 | 完成 |
| **单 Agent Chatflow** | 热点抓取 + 内容创作 Dify 验证 | 进行中 |
| **Workflow 编排** | 选题 → 脚本 → 运营 串成流水线 | 待开始 |
| **视频发布** | 发布 10 条视频，验证数据回流 | 待开始 |
| **产品化封装** | Dify Web App 上线 + GitHub Pages 作品集 | 待开始 |

---

## 如何运行（本地）

```bash
# 克隆仓库
git clone https://github.com/guanzinnia-cloud/ai-creator-os.git
cd ai-creator-os

# 查看 Skill 体系
ls skills/

# 查看知识库
ls knowledge-base/

# 在 Claude Code 中使用
claud
# /skills trend-intelligence-scout
```

---

*Built with VibeCoding paradigm. 6 Agents, 1 human, infinite scalability.*
