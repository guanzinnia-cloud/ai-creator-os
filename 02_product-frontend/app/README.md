# 产品前端 — Agent Architect

基于 Vite + React + TypeScript + Tailwind CSS + shadcn/ui 构建的产品官网。

## 改造指南

当前代码展示的是旧版 Creator Workflow 内容，需要进行以下改造以适配 Agent Architect：

### 需要修改的文件

| 文件 | 修改内容 |
|------|---------|
| `src/sections/HeroSection.tsx` | 品牌名 → THE AUTOMATED AGENTIC ENGINE，导航链接指向Agent Architect相关，副标题改为Agent Architect场景故事 |
| `src/sections/HighlightsSection.tsx` | 亮点卡片改为：1.数据驱动设计 2.模型选择+成本引擎 3.多Agent拓扑 4.六步法闭环 |
| `src/sections/SkillsSection.tsx` | 改为展示 agent-architect 和 skill-creator 两个Skill（或改为"产品分层"展示） |
| `src/sections/PipelineSection.tsx` | TDD-R循环改为六步法流程（Step 0-6可视化入口） |
| `src/sections/DemoSection.tsx` | Creator Workflow → Agent Architect |
| `src/sections/FooterSection.tsx` | 品牌名更新，链接更新 |

### 技术说明

- Node.js 20, Tailwind CSS v3.4.19, Vite v7.2.4
- 使用 shadcn/ui 组件库（40+组件）
- GSAP + Lenis 实现平滑滚动和动画
- 部署：Vercel（vercel.json 已配置）
