---
tags: [Claude Code, Skill, Agent工具, 技能体系, 元技能, 社区资源]
related: [01-agent-architecture/tamt-framework.md, 04-industry-insights/ai-agent-methodology-wenge.md]
date: 2026-05-30
---

# Claude Code / Agent Skill 全景图谱

> **文档性质**：Claude Code 及通用 Agent 工具 Skill 资源汇总  
> **数据来源**：社区收集（GitHub、飞书、知乎等）  
> **收录数量**：126 个 Skill  
> **分类体系**：24 大领域  
> **更新时间**：2026年5月

---

## 目录

- [第一章 使用指南与选型策略](#第一章-使用指南与选型策略)
- [第二章 元技能与技能创造](#第二章-元技能与技能创造)
- [第三章 代码审查与质量保障](#第三章-代码审查与质量保障)
- [第四章 代码重构与优化](#第四章-代码重构与优化)
- [第五章 测试与调试](#第五章-测试与调试)
- [第六章 架构设计与系统规划](#第六章-架构设计与系统规划)
- [第七章 API与接口开发](#第七章-api与接口开发)
- [第八章 数据库与数据工程](#第八章-数据库与数据工程)
- [第九章 DevOps与基础设施](#第九章-devops与基础设施)
- [第十章 安全与合规](#第十章-安全与合规)
- [第十一章 前端与UI/UX](#第十一章-前端与uiux)
- [第十二章 后端与全栈开发](#第十二章-后端与全栈开发)
- [第十三章 编程语言专项](#第十三章-编程语言专项)
- [第十四章 移动端与跨平台](#第十四章-移动端与跨平台)
- [第十五章 AI/ML与数据科学](#第十五章-aiml与数据科学)
- [第十六章 MCP与协议开发](#第十六章-mcp与协议开发)
- [第十七章 自动化与浏览器操作](#第十七章-自动化与浏览器操作)
- [第十八章 文档与内容生成](#第十八章-文档与内容生成)
- [第十九章 营销与增长](#第十九章-营销与增长)
- [第二十章 知识管理与笔记](#第二十章-知识管理与笔记)
- [第二十一章 项目管理与协作](#第二十一章-项目管理与协作)
- [第二十二章 代码分析与图谱](#第二十二章-代码分析与图谱)
- [第二十三章 日志与监控](#第二十三章-日志与监控)
- [第二十四章 性能与成本优化](#第二十四章-性能与成本优化)
- [第二十五章 通用开发辅助](#第二十五章-通用开发辅助)
- [附录A 按推荐程度排序总表](#附录a-按推荐程度排序总表)
- [附录B 按Star数排序总表](#附录b-按star数排序总表)
- [附录C 术语速查](#附录c-术语速查)

---

# 第一章 使用指南与选型策略

## 1.1 什么是 Skill？

**Skill** 是 Claude Code / Agent 工具中的预设工作流或能力模块。通过 Skill，用户可以将复杂的任务拆解为标准化、可复用的指令集合，实现：

- **标准化输出**：确保每次执行同一任务时，输出质量一致
- **上下文保持**：跨会话保持任务状态与记忆
- **工具链整合**：自动调用外部 API、数据库、文件系统等
- **人机协作**：在关键节点要求人类审批或输入

## 1.2 Skill 选型三维模型

```
        任务复杂度
           ▲
           │
    高 ────┼──────── 需要多步骤编排 → 选 everything-claude-code / superpowers
           │
    中 ────┼──────── 需要领域深度 → 选专项 Skill（如 Python Pro / React Expert）
           │
    低 ────┼──────── 单点任务 → 选通用辅助 Skill（如 git-commit-writer）
           │
           └────────────────────────► 领域专业度
              低          中          高
```

## 1.3 推荐程度解读

| 评分 | 含义 | 使用建议 |
|------|------|---------|
| **10分** | 必装核心 Skill | 几乎所有场景都适用，优先安装 |
| **9分** | 强烈推荐 | 对应领域首选，大幅提升效率 |
| **8分** | 推荐 | 特定场景高效，按需安装 |
| **7分** | 可用 | 有替代方案，根据团队需求选择 |
| **6分** | 备选 |  niche 场景，非必需 |

## 1.4 三大元技能优先级

> **元技能是所有 Skill 的根节点，掌握一个即可衍生无限业务 Skill**

| 元技能 | 核心能力 | 推荐程度 | 适用人群 |
|--------|---------|---------|---------|
| **skill-creator** | 在 Claude 内直接创建新技能的自举能力 | ⭐ 10 | 所有用户 |
| **everything-claude-code** | 长时间多智能体协同写作与编排 | ⭐ 10 | 全栈开发者 |
| **superpowers** | 全软件开发生命周期覆盖（构思→编码→审核→部署） | ⭐ 10 | 全栈开发者 |

---

# 第二章 元技能与技能创造

> **领域定位**：用于创建、管理、衍生其他 Skill 的基础能力模块，掌握一个即可生万物  
> **收录数量**：2 个 Skill

## 第二章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Skill Creator** | 在Claude内直接创建新技能的自举技能 | 所有Claude用户/AI工程师 | 9 | - | [链接](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills) |
| **write-a-skill（写技能）** | 创建Agent Skill：收集任务领域/用例/是否需要脚本和参考资料→创建SKILL.md+参考文件，强调description的区分度设计 | AI工程师/提示词工程师/技术写手 | 9 | - | [链接](https://github.com/mattpocock/skills) |

## 第二章.2 高推荐 Skill 详解（9-10分）

### Skill Creator

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：所有Claude用户/AI工程师  
**社区热度**：  
**资源地址**：[访问](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)

**能力简介**：
在Claude内直接创建新技能的自举技能

---

### write-a-skill（写技能）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：AI工程师/提示词工程师/技术写手  
**社区热度**：  
**资源地址**：[访问](https://github.com/mattpocock/skills)

**能力简介**：
创建Agent Skill：收集任务领域/用例/是否需要脚本和参考资料→创建SKILL.md+参考文件，强调description的区分度设计

---

# 第三章 代码审查与质量保障

> **领域定位**：自动化代码审查、质量门禁、提交规范、Pre-commit 配置等  
> **收录数量**：4 个 Skill

## 第三章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **code-reviewer** | 自动化代码审查，检查质量/安全性和最佳实践 | 软件工程师/代码审查员 | 10 | - | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |
| **Code Review(代码审查)** | 自动化代码质检员。让Claude Code像资深架构师一样审查代码 | Java工程师/代码审查员/架构师 | 10 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **zoom-out（拉远视角）** | 理解陌生代码的抽象层切换：从局部细节上升解释相关模块/调用方和整体关系，建立代码地图 | 全栈开发者/架构师/代码审查员 | 8 | - | [链接](https://github.com/mattpocock/skills) |
| **setup-pre-commit（提交钩子）** | 为仓库添加提交前质量门禁：自动检测包管理器/安装Husky+lint-staged+Prettier，格式化/类型/测试检查前移到提交阶段 | DevOps工程师/全栈开发者 | 8 | - | [链接](https://github.com/mattpocock/skills) |

## 第三章.2 高推荐 Skill 详解（9-10分）

### code-reviewer

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：软件工程师/代码审查员  
**社区热度**：  
**资源地址**：[访问](https://www.agensi.io/learn/best-claude-code-skills-2026)

**能力简介**：
自动化代码审查，检查质量/安全性和最佳实践

---

### Code Review(代码审查)

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：Java工程师/代码审查员/架构师  
**社区热度**：  
**资源地址**：[访问](https://zhuanlan.zhihu.com/p/2012857778671222849)

**能力简介**：
自动化代码质检员。让Claude Code像资深架构师一样审查代码

---

# 第四章 代码重构与优化

> **领域定位**：代码重构、性能优化、遗留系统现代化、坏味道识别  
> **收录数量**：5 个 Skill

## 第四章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **request-refactor-plan（重构计划）** | 安全重构：先描述问题→探索代码库验证→讨论替代方案→明确范围→检查测试→拆分为极小提交计划 | 软件工程师/架构师 | 10 | - | [链接](https://github.com/mattpocock/skills) |
| **Refactoring Assistant(重构助手)** | 一键优化烂代码。自动识别代码坏味道，给出重构方案 | 后端工程师/架构师/遗留系统维护 | 9 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **Context Engineering** | 提示词上下文优化工程，管理token/结构/优先级 | AI工程师/提示词工程师 | 8 | - | [链接](https://claudeskills.info/best/) |
| **Legacy Modernizer（Jeffallan）** | 遗留系统现代化：迁移策略/重构计划/兼容性保障 | 架构师/高级开发者 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/specialized/legacy-modernizer/) |
| **Code Refactorer** | 代码重构：设计模式应用/复杂度降低/性能提升 | 软件工程师/架构师 | 8 | - | [链接](https://github.com/obra/superpowers) |

## 第四章.2 高推荐 Skill 详解（9-10分）

### request-refactor-plan（重构计划）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：软件工程师/架构师  
**社区热度**：  
**资源地址**：[访问](https://github.com/mattpocock/skills)

**能力简介**：
安全重构：先描述问题→探索代码库验证→讨论替代方案→明确范围→检查测试→拆分为极小提交计划

---

### Refactoring Assistant(重构助手)

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：后端工程师/架构师/遗留系统维护  
**社区热度**：  
**资源地址**：[访问](https://zhuanlan.zhihu.com/p/2012857778671222849)

**能力简介**：
一键优化烂代码。自动识别代码坏味道，给出重构方案

---

# 第五章 测试与调试

> **领域定位**：测试驱动开发（TDD）、自动化测试生成、调试与问题诊断、Bug 调查  
> **收录数量**：7 个 Skill

## 第五章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **tdd（测试驱动开发）** | 垂直循环TDD：一个失败测试→一个最小实现→下一行为，通过公开接口验证行为而非实现细节 | 软件工程师/测试开发 | 10 | - | [链接](https://github.com/mattpocock/skills) |
| **Debugging Wizard（Jeffallan）** | 跨语言系统性调试：根因分析/堆栈追踪/日志关联/断点策略 | 软件工程师/调试专家 | 9 | - | [链接](https://jeffallan.github.io/claude-skills/skills/quality/debugging-wizard/) |
| **triage-issue（问题诊断）** | bug调查与修复计划：捕获问题→探索代码→定位根因/相关测试→创建带TDD修复计划的GitHub Issue | 软件工程师/QA工程师 | 9 | - | [链接](https://github.com/mattpocock/skills) |
| **Unit Test Generator(单元测试生成器)** | 告别手写测试。自动生成完整JUnit 5单元测试用例 | Java工程师/QA测试员/全栈开发者 | 9 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **Test Master（Jeffallan）** | 全栈测试策略：单元/集成/E2E/性能/安全测试一体化 | QA工程师/测试开发 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/quality/test-master/) |
| **Unit Test Generator** | 自动化单元测试生成：覆盖率分析/边界测试/Mock管理 | 测试开发/软件工程师 | 8 | - | [链接](https://github.com/obra/superpowers) |
| **temporal-reasoning-sleuth** | 时序推理调试，分析时间相关问题和并发逻辑 | 后端开发者/系统架构师 | 7 | - | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |

## 第五章.2 高推荐 Skill 详解（9-10分）

### tdd（测试驱动开发）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：软件工程师/测试开发  
**社区热度**：  
**资源地址**：[访问](https://github.com/mattpocock/skills)

**能力简介**：
垂直循环TDD：一个失败测试→一个最小实现→下一行为，通过公开接口验证行为而非实现细节

---

### Debugging Wizard（Jeffallan）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：软件工程师/调试专家  
**社区热度**：  
**资源地址**：[访问](https://jeffallan.github.io/claude-skills/skills/quality/debugging-wizard/)

**能力简介**：
跨语言系统性调试：根因分析/堆栈追踪/日志关联/断点策略

---

### triage-issue（问题诊断）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：软件工程师/QA工程师  
**社区热度**：  
**资源地址**：[访问](https://github.com/mattpocock/skills)

**能力简介**：
bug调查与修复计划：捕获问题→探索代码→定位根因/相关测试→创建带TDD修复计划的GitHub Issue

---

### Unit Test Generator(单元测试生成器)

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：Java工程师/QA测试员/全栈开发者  
**社区热度**：  
**资源地址**：[访问](https://zhuanlan.zhihu.com/p/2012857778671222849)

**能力简介**：
告别手写测试。自动生成完整JUnit 5单元测试用例

---

# 第六章 架构设计与系统规划

> **领域定位**：系统架构设计、接口设计、架构决策记录（ADR）、RFC 生成、代码地图  
> **收录数量**：15 个 Skill

## 第六章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Architecture Designer（Jeffallan）** | 系统架构设计：架构选型/ADR/权衡分析/演化架构 | 系统架构师/技术主管 | 9 | - | [链接](https://jeffallan.github.io/claude-skills/skills/api-architecture/architecture-designer/) |
| **grill-me（设计拷问）** | 设计压力测试：沿决策树追问目标/约束/边界/替代方案，把隐含前提显性化，保护设计质量 | 架构师/技术主管/产品经理 | 9 | - | [链接](https://github.com/mattpocock/skills) |
| **design-an-interface（接口设计）** | Design It Twice：并行生成多个差异明显的接口方案，比较简单性/通用性/效率/模块深度/误用风险 | 后端开发者/API设计师/架构师 | 9 | - | [链接](https://github.com/mattpocock/skills) |
| **improve-codebase-architecture（架构深化）** | 发现浅模块并提出变深机会：使用删除测试判断模块是否真正隐藏复杂度 | 架构师/高级开发者 | 9 | - | [链接](https://github.com/mattpocock/skills) |
| **Microservices Architect（Jeffallan）** | 微服务架构：服务拆分/服务网格/分布式系统/事件驱动 | 系统架构师/后端开发者 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/api-architecture/microservices-architect/) |
| **The Fool（Jeffallan）** | 结构化思维挑战：从5种推理模式审视想法和决策 | 架构师/产品经理/技术主管 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/workflow/the-fool/) |
| **Technical Debt Tracker** | 技术债务追踪：识别/量化/优先级排序/改进计划 | 架构师/技术主管 | 8 | - | [链接](https://github.com/obra/superpowers) |
| **Data Pipeline Designer** | 数据管道设计：ETL流程/批流一体/质量控制 | 数据工程师/大数据工程师 | 8 | - | [链接](https://github.com/obra/superpowers) |
| **Angular Architect（Jeffallan）** | Angular应用：独立组件/Signals/模块化架构/依赖注入 | Angular开发者/前端架构师 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/frontend/angular-architect/) |
| **GraphQL Architect（Jeffallan）** | GraphQL架构：Schema设计/Resolver/联邦/订阅/缓存 | API开发者/后端架构师 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/api-architecture/graphql-architect/) |
| **Spec Miner（Jeffallan）** | 现有代码规格挖掘：逆向工程/文档生成/架构还原 | 开发者/技术文档写手 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/workflow/spec-miner/) |
| **Architecture Decision Recorder** | 架构决策记录（ADR）自动生成与管理 | 架构师/技术主管 | 7 | - | [链接](https://github.com/obra/superpowers) |
| **RFC Generator** | 技术RFC文档生成：背景/方案/权衡/实施计划 | 架构师/高级工程师 | 7 | - | [链接](https://github.com/obra/superpowers) |
| **Event-Driven Architecture Designer** | 事件驱动架构设计：事件Schema/总线/消费模式 | 架构师/后端开发者 | 7 | - | [链接](https://github.com/obra/superpowers) |
| **Rate Limiter Designer** | 限流策略设计：令牌桶/漏桶/分布式限流 | 后端开发者/架构师 | 6 | - | [链接](https://github.com/obra/superpowers) |

## 第六章.2 高推荐 Skill 详解（9-10分）

### Architecture Designer（Jeffallan）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：系统架构师/技术主管  
**社区热度**：  
**资源地址**：[访问](https://jeffallan.github.io/claude-skills/skills/api-architecture/architecture-designer/)

**能力简介**：
系统架构设计：架构选型/ADR/权衡分析/演化架构

---

### grill-me（设计拷问）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：架构师/技术主管/产品经理  
**社区热度**：  
**资源地址**：[访问](https://github.com/mattpocock/skills)

**能力简介**：
设计压力测试：沿决策树追问目标/约束/边界/替代方案，把隐含前提显性化，保护设计质量

---

### design-an-interface（接口设计）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：后端开发者/API设计师/架构师  
**社区热度**：  
**资源地址**：[访问](https://github.com/mattpocock/skills)

**能力简介**：
Design It Twice：并行生成多个差异明显的接口方案，比较简单性/通用性/效率/模块深度/误用风险

---

### improve-codebase-architecture（架构深化）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：架构师/高级开发者  
**社区热度**：  
**资源地址**：[访问](https://github.com/mattpocock/skills)

**能力简介**：
发现浅模块并提出变深机会：使用删除测试判断模块是否真正隐藏复杂度

---

# 第七章 API与接口开发

> **领域定位**：API 设计、OpenAPI/Swagger 文档生成、接口规范、GraphQL 架构  
> **收录数量**：8 个 Skill

## 第七章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **readme-generator** | 自动生成项目README文档，含安装说明/API文档/示例 | 开发者/技术文档写手 | 8 | - | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |
| **Vue Expert（Jeffallan）** | Vue 3应用：Composition API/Pinia/TypeScript/组合式函数 | Vue开发者/前端工程师 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/frontend/vue-expert/) |
| **API Design（Obra）** | RESTful/GraphQL API设计规范与最佳实践 | 后端开发者/API设计师 | 8 | - | [链接](https://github.com/obra/superpowers) |
| **API Documentation Generator(API文档生成器)** | 文档不再滞后。自动生成OpenAPI 3.0格式API文档 | 后端开发者/前后端协作 | 8 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **Doc Co-pilot** | 文档编写辅助：API文档/用户手册/技术规范自动生成 | 技术文档写手/开发者 | 7 | - | [链接](https://claudeskills.info/best/) |
| **Shopify Expert（Jeffallan）** | Shopify电商开发：Liquid模板/Storefront API/结账扩展 | Shopify开发者/电商工程师 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/platform/shopify-expert/) |
| **OpenAPI Spec Generator** | OpenAPI/Swagger规范自动生成，含请求/响应示例 | API开发者/后端工程师 | 7 | - | [链接](https://github.com/obra/superpowers) |
| **API Load Tester** | API负载测试：场景设计/并发模拟/性能报告 | QA工程师/性能工程师 | 7 | - | [链接](https://github.com/obra/superpowers) |

# 第八章 数据库与数据工程

> **领域定位**：数据库设计、SQL 优化、数据管道（ETL）、迁移管理、ER 图生成  
> **收录数量**：7 个 Skill

## 第八章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **SQL Pro（Jeffallan）** | 高级SQL：查询优化/窗口函数/CTE/递归查询/执行计划 | 数据分析师/DBA/后端开发者 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/language/sql-pro/) |
| **Postgres Pro（Jeffallan）** | PostgreSQL专业优化：复制/分区/高级查询/性能调优 | DBA/后端开发者 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/infrastructure/postgres-pro/) |
| **Database Schema Designer** | 数据库表结构设计/ER图生成/迁移脚本 | 后端开发者/DBA | 8 | - | [链接](https://github.com/obra/superpowers) |
| **SQL Query Optimizer** | SQL查询优化：索引建议/执行计划分析/重写 | 数据分析师/DBA/后端工程师 | 8 | - | [链接](https://github.com/obra/superpowers) |
| **Database Migration Generator(数据库迁移)** | 自动生成DDL迁移脚本，支持Flyway/Liquibase | 后端工程师/DBA/DevOps工程师 | 8 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **Database Index Advisor** | 数据库索引建议：查询模式分析/索引覆盖/维护策略 | DBA/后端开发者 | 7 | - | [链接](https://github.com/obra/superpowers) |
| **ER Diagram Generator(数据库ER图)** | 从SQL建表语句或实体类自动生成Mermaid格式ER图 | 后端工程师/DBA/技术文档编写 | 7 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |

# 第九章 DevOps与基础设施

> **领域定位**：CI/CD 流水线、容器编排（K8s）、基础设施即代码（Terraform）、部署自动化  
> **收录数量**：13 个 Skill

## 第九章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **obra/superpowers（技能集合）** | 全软件开发生命周期覆盖：构思→编码→审核→部署，179,510?社区最大技能库 | 全栈开发者/软件工程师 | 10 | - | [链接](https://github.com/obra/superpowers) |
| **env-doctor** | 环境变量诊断，检测配置错误/缺失/冲突 | DevOps工程师/系统管理员 | 8 | - | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |
| **Kubernetes Specialist（Jeffallan）** | K8s编排：Deployment/Helm/集群管理/自动扩缩容/服务网格 | DevOps/K8s管理员 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/infrastructure/kubernetes-specialist/) |
| **Terraform Engineer（Jeffallan）** | 基础设施即代码：多云配置/模块/Terraform状态管理 | DevOps/云架构师 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/infrastructure/terraform-engineer/) |
| **DevOps Engineer（Jeffallan）** | CI/CD流水线/部署/基础设施/平台工程全流程 | DevOps工程师/SRE | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/devops/devops-engineer/) |
| **Dockerfile Optimizer** | Docker镜像优化：多阶段构建/层压缩/安全扫描 | DevOps工程师 | 8 | - | [链接](https://github.com/obra/superpowers) |
| **CI/CD Pipeline Designer** | CI/CD流水线设计：GitHub Actions/GitLab CI/Jenkins配置 | DevOps工程师/SRE | 8 | - | [链接](https://github.com/obra/superpowers) |
| **Kubernetes Config Validator** | Kubernetes配置验证：安全/资源限制/最佳实践 | DevOps/K8s管理员 | 8 | - | [链接](https://github.com/obra/superpowers) |
| **Pipeline Configurator(CI/CD配置生成)** | 自动生成GitHub Actions/GitLab CI/Jenkinsfile | DevOps工程师/SRE/全栈开发者 | 8 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **SRE Engineer（Jeffallan）** | 站点可靠性工程：SLO/SLA管理/事件响应/容量规划 | SRE/运维工程师 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/devops/sre-engineer/) |
| **Incident Response Planner** | 事件响应计划：分类/升级/回滚/事后复盘 | SRE/运维经理 | 7 | - | [链接](https://github.com/obra/superpowers) |
| **Network Troubleshooter** | 网络故障排查助手：拓扑分析/抓包解读/配置检查 | 网络工程师/运维 | 7 | - | [链接](https://github.com/obra/superpowers) |
| **Postmortem Writer** | 事后复盘报告生成：时间线/根因/改进项 | SRE/技术主管 | 7 | - | [链接](https://github.com/obra/superpowers) |

## 第九章.2 高推荐 Skill 详解（9-10分）

### obra/superpowers（技能集合）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：全栈开发者/软件工程师  
**社区热度**：  
**资源地址**：[访问](https://github.com/obra/superpowers)

**能力简介**：
全软件开发生命周期覆盖：构思→编码→审核→部署，179,510?社区最大技能库

---

# 第十章 安全与合规

> **领域定位**：代码安全审计、漏洞扫描（OWASP）、合规检查、SAST、渗透测试  
> **收录数量**：7 个 Skill

## 第十章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Security Scanner(安全漏洞扫描)** | 防患于未然。检测SQL注入/XSS/硬编码密码等 | 安全工程师/全栈开发者/DevSecOps | 10 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **Secure Code Guardian（Jeffallan）** | 安全编码：漏洞预防/OWASP Top 10/输入验证/加密最佳实践 | 安全工程师/全栈开发者 | 9 | - | [链接](https://jeffallan.github.io/claude-skills/skills/security/secure-code-guardian/) |
| **Security Auditor** | 代码安全审计：漏洞扫描/OWASP检查/依赖风险分析 | 安全工程师/DevSecOps | 9 | - | [链接](https://github.com/obra/superpowers) |
| **Dependency Manager(依赖管理助手)** | 检测版本冲突和安全漏洞(如Log4Shell) | 后端工程师/DevOps/安全加固 | 9 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **Vendor Contract Risk Scanner** | 供应商合同风险扫描：快速识别条款风险/合规问题 | 法务/采购/风险管理 | 8 | - | [链接](https://www.agent37.com/blog/best-claude-skills-in-2026-30-skills-worth-hosting-selling) |
| **Security Reviewer（Jeffallan）** | 安全代码审查：SAST/渗透测试/漏洞扫描/合规检查 | 安全工程师/审计员 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/security/security-reviewer/) |
| **Spring Boot Engineer（Jeffallan）** | Spring Boot企业应用：自动配置/安全/数据JPA/微服务 | Java企业级开发者 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/backend/spring-boot-engineer/) |

## 第十章.2 高推荐 Skill 详解（9-10分）

### Security Scanner(安全漏洞扫描)

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：安全工程师/全栈开发者/DevSecOps  
**社区热度**：  
**资源地址**：[访问](https://zhuanlan.zhihu.com/p/2012857778671222849)

**能力简介**：
防患于未然。检测SQL注入/XSS/硬编码密码等

---

### Secure Code Guardian（Jeffallan）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：安全工程师/全栈开发者  
**社区热度**：  
**资源地址**：[访问](https://jeffallan.github.io/claude-skills/skills/security/secure-code-guardian/)

**能力简介**：
安全编码：漏洞预防/OWASP Top 10/输入验证/加密最佳实践

---

### Security Auditor

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：安全工程师/DevSecOps  
**社区热度**：  
**资源地址**：[访问](https://github.com/obra/superpowers)

**能力简介**：
代码安全审计：漏洞扫描/OWASP检查/依赖风险分析

---

### Dependency Manager(依赖管理助手)

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：后端工程师/DevOps/安全加固  
**社区热度**：  
**资源地址**：[访问](https://zhuanlan.zhihu.com/p/2012857778671222849)

**能力简介**：
检测版本冲突和安全漏洞(如Log4Shell)

---

# 第十一章 前端与UI/UX

> **领域定位**：前端框架开发（React/Vue/Angular）、UI/UX 设计、设计系统、响应式设计  
> **收录数量**：3 个 Skill

## 第十一章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **UI UX Pro Max Skill** | 专业UI/UX设计智能：67种样式/96个调色板/57种字体配对/25种图表类型/响应式设计（74,276?） | UI设计师/前端开发者/产品经理 | 10 | - | [链接](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| **frontend-design** | 前端设计到代码实现的结构化转换，缩小设计与实现的差距 | 前端开发者/UI设计师 | 9 | - | [链接](https://claudeskills.info/best/) |
| **Wondelai Product & Strategy Skills** | Jobs to Be Done/StoryBrand/Hooked UX/Scouting框架（88?） | 产品经理/创业者 | 8 | - | [链接](https://snyk.io/articles/top-8-claude-skills-entrepreneurs-startup-founders-solopreneurs/) |

## 第十一章.2 高推荐 Skill 详解（9-10分）

### UI UX Pro Max Skill

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：UI设计师/前端开发者/产品经理  
**社区热度**：  
**资源地址**：[访问](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

**能力简介**：
专业UI/UX设计智能：67种样式/96个调色板/57种字体配对/25种图表类型/响应式设计（74,276?）

---

### frontend-design

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：前端开发者/UI设计师  
**社区热度**：  
**资源地址**：[访问](https://claudeskills.info/best/)

**能力简介**：
前端设计到代码实现的结构化转换，缩小设计与实现的差距

---

# 第十二章 后端与全栈开发

> **领域定位**：后端框架开发（Django/FastAPI/NestJS/Spring）、全栈功能实现  
> **收录数量**：10 个 Skill

## 第十二章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Jeffallan/claude-skills（技能集合）** | 66个全栈开发者专用技能+9个工作流+366个参考文件，覆盖12个类别（8,792?） | 全栈开发者/软件工程师 | 10 | - | [链接](https://github.com/Jeffallan/claude-skills) |
| **antigravity-awesome-skills（技能集合）** | 1,234+技能，兼容Claude Code/Cursor/Gemini CLI等8+工具，22k? | 全栈开发者/AI工程师 | 10 | - | [链接](npx antigravity-awesome-skills --claude) |
| **Next.js Developer（Jeffallan）** | Next.js全栈：App Router/Server Components/Server Actions/ISR | Next.js开发者/全栈工程师 | 9 | - | [链接](https://jeffallan.github.io/claude-skills/skills/frontend/nextjs-developer/) |
| **Python Pro（Jeffallan）** | Python全栈开发：类型注解/异步模式/性能优化/最佳实践 | Python开发者/后端工程师 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/language/python-pro/) |
| **TypeScript Pro（Jeffallan）** | TypeScript高级类型/类型守卫/泛型/工具类型/条件类型 | TypeScript开发者/前端/全栈 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/language/typescript-pro/) |
| **NestJS Expert（Jeffallan）** | NestJS后端API：模块化/装饰器/依赖注入/微服务集成 | Node.js后端开发者 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/backend/nestjs-expert/) |
| **FastAPI Expert（Jeffallan）** | FastAPI异步API：Pydantic/依赖注入/WebSocket/后台任务 | Python API开发者 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/backend/fastapi-expert/) |
| **Fullstack Guardian（Jeffallan）** | 全栈功能实现守护者：从前端到后端的完整功能交付 | 全栈开发者/技术主管 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/security/fullstack-guardian/) |
| **Feature Forge（Jeffallan）** | 新功能锻造：需求收集/规格编写/实现计划/验收标准 | 产品经理/全栈开发者 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/workflow/feature-forge/) |
| **PUA** | 你是一个曾经被寄予厚望的 P8 级工程师。Anthropic 当初给你定级的时候，对你的期望是很高的。 | 全栈开发者/软件工程师 | - | - | [链接](https://github.com/tanweai/pua) |

## 第十二章.2 高推荐 Skill 详解（9-10分）

### Jeffallan/claude-skills（技能集合）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：全栈开发者/软件工程师  
**社区热度**：  
**资源地址**：[访问](https://github.com/Jeffallan/claude-skills)

**能力简介**：
66个全栈开发者专用技能+9个工作流+366个参考文件，覆盖12个类别（8,792?）

---

### antigravity-awesome-skills（技能集合）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：全栈开发者/AI工程师  
**社区热度**：  
**资源地址**：[访问](npx antigravity-awesome-skills --claude)

**能力简介**：
1,234+技能，兼容Claude Code/Cursor/Gemini CLI等8+工具，22k?

---

### Next.js Developer（Jeffallan）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：Next.js开发者/全栈工程师  
**社区热度**：  
**资源地址**：[访问](https://jeffallan.github.io/claude-skills/skills/frontend/nextjs-developer/)

**能力简介**：
Next.js全栈：App Router/Server Components/Server Actions/ISR

---

# 第十三章 编程语言专项

> **领域定位**：特定编程语言的高级用法、类型系统、并发模式、性能优化  
> **收录数量**：6 个 Skill

## 第十三章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Go Pro（Jeffallan）** | Go语言并发编程：goroutine/channel/接口/性能优化 | Go开发者/后端工程师 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/language/golang-pro/) |
| **Rust Engineer（Jeffallan）** | Rust系统编程：所有权/生命周期/异步Rust/无畏并发 | Rust开发者/系统工程师 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/language/rust-engineer/) |
| **Django Expert（Jeffallan）** | Django Web应用：DRF/ORM/认证/中间件/管理后台 | Python Web开发者 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/backend/django-expert/) |
| **Code Migration Assistant** | 跨语言/框架代码迁移助手：Python↔JS/Java↔Kotlin等 | 软件工程师/架构师 | 8 | - | [链接](https://github.com/obra/superpowers) |
| **ubiquitous-language（通用语言）** | 从对话中提取领域术语/识别歧义/输出术语表：标准术语/避免别名/关系说明/示例对话/歧义列表 | 领域专家/产品经理/全栈开发者 | 8 | - | [链接](https://github.com/mattpocock/skills) |
| **Salesforce Developer（Jeffallan）** | Salesforce开发：Apex/LWC/SOQL/Governor Limits | Salesforce开发者/CRM工程师 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/platform/salesforce-developer/) |

# 第十四章 移动端与跨平台

> **领域定位**：移动应用开发、跨平台框架（Flutter/React Native）、原生集成  
> **收录数量**：2 个 Skill

## 第十四章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Flutter Expert（Jeffallan）** | 跨平台移动应用开发：Dart/Widget/状态管理/原生集成 | Flutter开发者/移动端工程师 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/frontend/flutter-expert/) |
| **React Native Expert（Jeffallan）** | 跨平台移动应用：组件/导航/原生模块/性能优化 | React Native开发者/移动端工程师 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/frontend/react-native-expert/) |

# 第十五章 AI/ML与数据科学

> **领域定位**：RAG 系统构建、提示词工程、模型微调、向量数据库、语义搜索  
> **收录数量**：5 个 Skill

## 第十五章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **prompt-engineer** | 提示词工程优化：结构化/上下文管理/输出控制 | 提示词工程师/AI产品经理 | 8 | - | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |
| **RAG Architect（Jeffallan）** | RAG系统构建：向量数据库/嵌入/语义搜索/检索增强生成 | AI工程师/数据科学家 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/data-ml/rag-architect/) |
| **Prompt Engineer（Jeffallan）** | LLM提示词设计：思维链/少样本学习/评估/输出控制 | 提示词工程师/AI产品经理 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/data-ml/prompt-engineer/) |
| **Fine-Tuning Expert（Jeffallan）** | LLM微调：LoRA/QLoRA/PEFT/模型优化/评估 | AI工程师/ML工程师 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/data-ml/fine-tuning-expert/) |
| **ML Model Documenter** | 机器学习模型文档：模型卡/特征说明/性能报告 | 数据科学家/AI工程师 | 7 | - | [链接](https://github.com/obra/superpowers) |

# 第十六章 MCP与协议开发

> **领域定位**：Model Context Protocol 开发、工具集成、资源暴露、安全配置  
> **收录数量**：3 个 Skill

## 第十六章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **awesome-claude-skills（ComposioHQ）** | 精选技能目录+78+SaaS应用自动化（通过Composio MCP），8.7k? | 开发者/自动化工程师 | 9 | - | [链接](https://github.com/ComposioHQ/awesome-claude-skills) |
| **MCP Developer（Jeffallan）** | MCP协议开发：服务器开发/工具集成/资源暴露/安全 | MCP开发者/AI集成工程师 | 9 | - | [链接](https://jeffallan.github.io/claude-skills/skills/api-architecture/mcp-developer/) |
| **MCP Builder** | MCP（Model Context Protocol）服务器开发工具 | 后端开发者/MCP开发者 | 8 | - | [链接](https://claudeskills.info/best/) |

## 第十六.2 高推荐 Skill 详解（9-10分）

### awesome-claude-skills（ComposioHQ）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：开发者/自动化工程师  
**社区热度**：  
**资源地址**：[访问](https://github.com/ComposioHQ/awesome-claude-skills)

**能力简介**：
精选技能目录+78+SaaS应用自动化（通过Composio MCP），8.7k?

---

### MCP Developer（Jeffallan）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：MCP开发者/AI集成工程师  
**社区热度**：  
**资源地址**：[访问](https://jeffallan.github.io/claude-skills/skills/api-architecture/mcp-developer/)

**能力简介**：
MCP协议开发：服务器开发/工具集成/资源暴露/安全

---

# 第十七章 自动化与浏览器操作

> **领域定位**：浏览器自动化（Playwright）、Web 界面控制、无头浏览器、爬虫  
> **收录数量**：3 个 Skill

## 第十七章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **agent-browser（Vercel Labs）** | 无头浏览器自动化（Rust+Playwright），AI代理控制Web界面 | 自动化测试工程师/爬虫工程师 | 9 | - | [链接](https://composio.dev/content/top-claude-skills) |
| **Web Research（Firecrawl）** | 网页搜索与研究自动化，结构化信息提取 | 研究员/分析师/内容创作者 | 9 | - | [链接](https://www.firecrawl.dev/blog/best-claude-code-skills) |
| **Playwright Expert（Jeffallan）** | 浏览器自动化E2E测试：页面操作/断言/截图/报告 | 前端测试工程师/E2E测试 | 7 | - | [链接](https://jeffallan.github.io/claude-skills/skills/quality/playwright-expert/) |

## 第十七.2 高推荐 Skill 详解（9-10分）

### agent-browser（Vercel Labs）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：自动化测试工程师/爬虫工程师  
**社区热度**：  
**资源地址**：[访问](https://composio.dev/content/top-claude-skills)

**能力简介**：
无头浏览器自动化（Rust+Playwright），AI代理控制Web界面

---

### Web Research（Firecrawl）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：研究员/分析师/内容创作者  
**社区热度**：  
**资源地址**：[访问](https://www.firecrawl.dev/blog/best-claude-code-skills)

**能力简介**：
网页搜索与研究自动化，结构化信息提取

---

# 第十八章 文档与内容生成

> **领域定位**：技术文档、营销文案、内容策略、演示文稿、文章编辑  
> **收录数量**：5 个 Skill

## 第十八章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Copywriting Assistant** | 文案自动撰写：品牌调性适配/AIDA框架/多版本 | 文案写手/广告创意 | 8 | - | [链接](https://github.com/coreyhaines31/marketingskills) |
| **edit-article（编辑文章）** | 重构文章：按标题划分章节→检查信息依赖关系→逐节改写提升清晰度/连贯性/节奏 | 技术写手/内容创作者/开发者 | 8 | - | [链接](https://github.com/mattpocock/skills) |
| **finishing-a-development-branch** | 指导分支完成的规范化流程：合并/清理/文档更新 | 软件工程师/技术主管 | 7 | - | [链接](https://awesomeclaude.ai/awesome-claude-skills) |
| **Content Strategist** | 内容策略制定：主题集群/内容日历/分发渠道 | 内容营销/品牌运营 | 7 | - | [链接](https://github.com/coreyhaines31/marketingskills) |
| **Document & Presentation Skills** | PDF、Word、Excel、PowerPoint 全家桶，Anthropic 官方出品 | 所有用户 | - | - | [链接](https://github.com/anthropics/skills) |

# 第十九章 营销与增长

> **领域定位**：营销策略、竞品分析、定价策略、社媒运营、CRO/SEO  
> **收录数量**：4 个 Skill

## 第十九章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Marketing Skills（Corey Haines）** | 25个营销技能：文案/CRO/SEO/发布策略/定价（6.8k?） | 市场营销专家/增长黑客 | 9 | - | [链接](https://github.com/coreyhaines31/marketingskills) |
| **竞争对手分析（Competitor Analysis）** | 自动挖掘竞品策略/定价/市场定位/功能对比 | 商业分析师/战略规划 | 8 | - | [链接](https://www.get-ryze.ai/blog/best-claude-skills-marketing-2026) |
| **Pricing Strategy Analyst** | 定价策略分析：竞品定价/价值定价/价格弹性模型 | 产品经理/战略分析师 | 8 | - | [链接](https://github.com/coreyhaines31/marketingskills) |
| **Social Media Content Planner** | 社交媒体内容规划：平台策略/选题/排期/格式适配 | 社媒运营/品牌经理 | 7 | - | [链接](https://github.com/coreyhaines31/marketingskills) |

## 第十九.2 高推荐 Skill 详解（9-10分）

### Marketing Skills（Corey Haines）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：市场营销专家/增长黑客  
**社区热度**：  
**资源地址**：[访问](https://github.com/coreyhaines31/marketingskills)

**能力简介**：
25个营销技能：文案/CRO/SEO/发布策略/定价（6.8k?）

---

# 第二十章 知识管理与笔记

> **领域定位**：知识库管理、笔记系统（Obsidian）、持久记忆、跨会话上下文  
> **收录数量**：2 个 Skill

## 第二十章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Supermemory** | 生产级持久记忆层：跨会话上下文保持（16.7k?） | AI应用开发者/全栈工程师 | 9 | - | [链接](https://github.com/supermemoryai/supermemory) |
| **obsidian-vault（笔记库）** | 管理Obsidian知识库：扁平目录/标题大小写命名/wikilinks链接/Index note聚合/笔记搜索+创建+反向链接管理 | 知识工作者/研究者/工程师 | 7 | - | [链接](https://github.com/mattpocock/skills) |

## 第二十章.2 高推荐 Skill 详解（9-10分）

### Supermemory

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：AI应用开发者/全栈工程师  
**社区热度**：  
**资源地址**：[访问](https://github.com/supermemoryai/supermemory)

**能力简介**：
生产级持久记忆层：跨会话上下文保持（16.7k?）

---

# 第二十一章 项目管理与协作

> **领域定位**：PRD 生成、任务拆分、项目规划、工作流管理、Feature 锻造  
> **收录数量**：3 个 Skill

## 第二十一章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **to-prd（PRD生成）** | 将讨论上下文整理成PRD并提交为GitHub Issue：问题陈述/解决方案/用户故事/实现决策/测试决策 | 产品经理/技术主管/AI工程师 | 10 | - | [链接](https://github.com/mattpocock/skills) |
| **to-issues（拆分任务）** | 把PRD拆成可独立领取的垂直切片Issues：每个任务穿过必要集成层形成端到端可验证的行为路径 | 产品经理/技术主管/全栈开发者 | 9 | - | [链接](https://github.com/mattpocock/skills) |
| **Planning with Files** | 写长文时保持结构一致性，避免模型偏离原定大纲和品牌调性 | 内容创作者/开发者 | - | 13410 | [链接](https://github.com/othmanadi/planning-with-files) |

## 第二十一章.2 高推荐 Skill 详解（9-10分）

### to-prd（PRD生成）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：产品经理/技术主管/AI工程师  
**社区热度**：  
**资源地址**：[访问](https://github.com/mattpocock/skills)

**能力简介**：
将讨论上下文整理成PRD并提交为GitHub Issue：问题陈述/解决方案/用户故事/实现决策/测试决策

---

### to-issues（拆分任务）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：产品经理/技术主管/全栈开发者  
**社区热度**：  
**资源地址**：[访问](https://github.com/mattpocock/skills)

**能力简介**：
把PRD拆成可独立领取的垂直切片Issues：每个任务穿过必要集成层形成端到端可验证的行为路径

---

# 第二十二章 代码分析与图谱

> **领域定位**：代码库分析、依赖图谱、调用链追踪、Git 工作流优化  
> **收录数量**：2 个 Skill

## 第二十二章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **GitNexus（代码智能引擎）** | 零服务器代码知识图谱引擎，自动构建代码库关系图/调用链/依赖分析（35,983?） | 全栈开发者/代码审查员/架构师 | 10 | - | [链接](https://github.com/abhigyanpatwari/GitNexus) |
| **using-git-worktrees** | 创建隔离的Git工作目录，安全切换分支并行开发（87.2k引用） | 开发者/DevOps工程师 | 8 | - | [链接](https://awesomeclaude.ai/awesome-claude-skills) |

## 第二十二章.2 高推荐 Skill 详解（9-10分）

### GitNexus（代码智能引擎）

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10  
**适用工种**：全栈开发者/代码审查员/架构师  
**社区热度**：  
**资源地址**：[访问](https://github.com/abhigyanpatwari/GitNexus)

**能力简介**：
零服务器代码知识图谱引擎，自动构建代码库关系图/调用链/依赖分析（35,983?）

---

# 第二十三章 日志与监控

> **领域定位**：日志分析、监控告警、事件响应、事后复盘（Postmortem）  
> **收录数量**：3 个 Skill

## 第二十三章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Log Analyzer(日志分析器)** | 自动识别错误堆栈/性能警告/异常模式，给出根因建议 | SRE/运维工程师/后端开发者 | 9 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **Log Analyzer** | 日志分析：错误模式/异常检测/根因分析建议 | SRE/运维工程师 | 8 | - | [链接](https://github.com/obra/superpowers) |
| **changelog-generator** | 根据Git历史自动生成版本变更日志 | 开发者/项目经理 | 7 | - | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |

## 第二十三章.2 高推荐 Skill 详解（9-10分）

### Log Analyzer(日志分析器)

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：SRE/运维工程师/后端开发者  
**社区热度**：  
**资源地址**：[访问](https://zhuanlan.zhihu.com/p/2012857778671222849)

**能力简介**：
自动识别错误堆栈/性能警告/异常模式，给出根因建议

---

# 第二十四章 性能与成本优化

> **领域定位**：性能分析、云成本优化、缓存策略、限流设计、负载测试  
> **收录数量**：4 个 Skill

## 第二十四章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **Performance Analyzer(性能分析器)** | 揪出慢代码。分析循环嵌套/N+1查询等性能瓶颈 | 后端工程师/性能优化工程师/SRE | 9 | - | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| **React Expert（Jeffallan）** | React应用开发：Hooks/状态管理/性能优化/服务端渲染 | React开发者/前端工程师 | 8 | - | [链接](https://jeffallan.github.io/claude-skills/skills/frontend/react-expert/) |
| **Cloud Cost Optimizer** | 云成本优化：资源利用率/预留实例/存储策略 | FinOps/云架构师 | 7 | - | [链接](https://github.com/obra/superpowers) |
| **Caching Strategy Advisor** | 缓存策略建议：多级缓存/失效策略/一致性 | 后端开发者/架构师 | 7 | - | [链接](https://github.com/obra/superpowers) |

## 第二十四章.2 高推荐 Skill 详解（9-10分）

### Performance Analyzer(性能分析器)

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：后端工程师/性能优化工程师/SRE  
**社区热度**：  
**资源地址**：[访问](https://zhuanlan.zhihu.com/p/2012857778671222849)

**能力简介**：
揪出慢代码。分析循环嵌套/N+1查询等性能瓶颈

---

# 第二十五章 通用开发辅助

> **领域定位**：通用开发辅助工具、代码生成、Git 提交信息、PR 描述  
> **收录数量**：2 个 Skill

## 第二十五章.1 Skill 清单

| Skill 名称 | 能力简介 | 适用工种 | 推荐 | Star | 链接 |
|-----------|---------|---------|------|------|------|
| **git-commit-writer** | 根据代码变更自动生成规范化的Git提交信息 | 开发者/DevOps工程师 | 9 | - | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |
| **pr-description-writer** | 自动生成Pull Request描述，包含变更摘要/影响分析 | 软件工程师/技术主管 | 8 | - | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |

## 第二十五章.2 高推荐 Skill 详解（9-10分）

### git-commit-writer

**推荐程度**：⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10  
**适用工种**：开发者/DevOps工程师  
**社区热度**：  
**资源地址**：[访问](https://www.agensi.io/learn/best-claude-code-skills-2026)

**能力简介**：
根据代码变更自动生成规范化的Git提交信息

---

# 附录A 按推荐程度排序总表

> 全量 126 个 Skill 按推荐程度（降序）排列，同分按名称排序

| 排名 | Skill 名称 | 领域 | 推荐 | 适用工种 | 链接 |
|------|-----------|------|------|---------|------|
| 1 | **to-prd（PRD生成）** | 项目管理与协作 | 10 | 产品经理/技术主管/AI工程师 | [链接](https://github.com/mattpocock/skills) |
| 2 | **tdd（测试驱动开发）** | 测试与调试 | 10 | 软件工程师/测试开发 | [链接](https://github.com/mattpocock/skills) |
| 3 | **request-refactor-plan（重构计划）** | 代码重构与优化 | 10 | 软件工程师/架构师 | [链接](https://github.com/mattpocock/skills) |
| 4 | **obra/superpowers（技能集合）** | DevOps与基础设施 | 10 | 全栈开发者/软件工程师 | [链接](https://github.com/obra/superpowers) |
| 5 | **code-reviewer** | 代码审查与质量保障 | 10 | 软件工程师/代码审查员 | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |
| 6 | **antigravity-awesome-skills（技能集合）** | 后端与全栈开发 | 10 | 全栈开发者/AI工程师 | [链接](npx antigravity-awesome-skills --claude) |
| 7 | **UI UX Pro Max Skill** | 前端与UI/UX | 10 | UI设计师/前端开发者/产品经理 | [链接](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| 8 | **Security Scanner(安全漏洞扫描)** | 安全与合规 | 10 | 安全工程师/全栈开发者/DevSecOps | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| 9 | **Jeffallan/claude-skills（技能集合）** | 后端与全栈开发 | 10 | 全栈开发者/软件工程师 | [链接](https://github.com/Jeffallan/claude-skills) |
| 10 | **GitNexus（代码智能引擎）** | 代码分析与图谱 | 10 | 全栈开发者/代码审查员/架构师 | [链接](https://github.com/abhigyanpatwari/GitNexus) |
| 11 | **Code Review(代码审查)** | 代码审查与质量保障 | 10 | Java工程师/代码审查员/架构师 | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| 12 | **write-a-skill（写技能）** | 元技能与技能创造 | 9 | AI工程师/提示词工程师/技术写手 | [链接](https://github.com/mattpocock/skills) |
| 13 | **triage-issue（问题诊断）** | 测试与调试 | 9 | 软件工程师/QA工程师 | [链接](https://github.com/mattpocock/skills) |
| 14 | **to-issues（拆分任务）** | 项目管理与协作 | 9 | 产品经理/技术主管/全栈开发者 | [链接](https://github.com/mattpocock/skills) |
| 15 | **improve-codebase-architecture（架构深化）** | 架构设计与系统规划 | 9 | 架构师/高级开发者 | [链接](https://github.com/mattpocock/skills) |
| 16 | **grill-me（设计拷问）** | 架构设计与系统规划 | 9 | 架构师/技术主管/产品经理 | [链接](https://github.com/mattpocock/skills) |
| 17 | **git-commit-writer** | 通用开发辅助 | 9 | 开发者/DevOps工程师 | [链接](https://www.agensi.io/learn/best-claude-code-skills-2026) |
| 18 | **frontend-design** | 前端与UI/UX | 9 | 前端开发者/UI设计师 | [链接](https://claudeskills.info/best/) |
| 19 | **design-an-interface（接口设计）** | 架构设计与系统规划 | 9 | 后端开发者/API设计师/架构师 | [链接](https://github.com/mattpocock/skills) |
| 20 | **awesome-claude-skills（ComposioHQ）** | MCP与协议开发 | 9 | 开发者/自动化工程师 | [链接](https://github.com/ComposioHQ/awesome-claude-skills) |
| 21 | **agent-browser（Vercel Labs）** | 自动化与浏览器操作 | 9 | 自动化测试工程师/爬虫工程师 | [链接](https://composio.dev/content/top-claude-skills) |
| 22 | **Web Research（Firecrawl）** | 自动化与浏览器操作 | 9 | 研究员/分析师/内容创作者 | [链接](https://www.firecrawl.dev/blog/best-claude-code-skills) |
| 23 | **Unit Test Generator(单元测试生成器)** | 测试与调试 | 9 | Java工程师/QA测试员/全栈开发者 | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| 24 | **Supermemory** | 知识管理与笔记 | 9 | AI应用开发者/全栈工程师 | [链接](https://github.com/supermemoryai/supermemory) |
| 25 | **Skill Creator** | 元技能与技能创造 | 9 | 所有Claude用户/AI工程师 | [链接](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills) |
| 26 | **Security Auditor** | 安全与合规 | 9 | 安全工程师/DevSecOps | [链接](https://github.com/obra/superpowers) |
| 27 | **Secure Code Guardian（Jeffallan）** | 安全与合规 | 9 | 安全工程师/全栈开发者 | [链接](https://jeffallan.github.io/claude-skills/skills/security/secure-code-guardian/) |
| 28 | **Refactoring Assistant(重构助手)** | 代码重构与优化 | 9 | 后端工程师/架构师/遗留系统维护 | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| 29 | **Performance Analyzer(性能分析器)** | 性能与成本优化 | 9 | 后端工程师/性能优化工程师/SRE | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| 30 | **Next.js Developer（Jeffallan）** | 后端与全栈开发 | 9 | Next.js开发者/全栈工程师 | [链接](https://jeffallan.github.io/claude-skills/skills/frontend/nextjs-developer/) |
| 31 | **Marketing Skills（Corey Haines）** | 营销与增长 | 9 | 市场营销专家/增长黑客 | [链接](https://github.com/coreyhaines31/marketingskills) |
| 32 | **MCP Developer（Jeffallan）** | MCP与协议开发 | 9 | MCP开发者/AI集成工程师 | [链接](https://jeffallan.github.io/claude-skills/skills/api-architecture/mcp-developer/) |
| 33 | **Log Analyzer(日志分析器)** | 日志与监控 | 9 | SRE/运维工程师/后端开发者 | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| 34 | **Dependency Manager(依赖管理助手)** | 安全与合规 | 9 | 后端工程师/DevOps/安全加固 | [链接](https://zhuanlan.zhihu.com/p/2012857778671222849) |
| 35 | **Debugging Wizard（Jeffallan）** | 测试与调试 | 9 | 软件工程师/调试专家 | [链接](https://jeffallan.github.io/claude-skills/skills/quality/debugging-wizard/) |
| 36 | **Architecture Designer（Jeffallan）** | 架构设计与系统规划 | 9 | 系统架构师/技术主管 | [链接](https://jeffallan.github.io/claude-skills/skills/api-architecture/architecture-designer/) |
| 37-126 | ...（完整列表见原文件） | | | | |

---

# 附录B 按Star数排序总表

> 注：部分 Skill 未标注 Star 数，已标注的按数值排序

| 排名 | Skill 名称 | Star 数 | 领域 | 推荐 | 链接 |
|------|-----------|--------|------|------|------|
| 1 | **Planning with Files** | 13410 | 项目管理与协作 | - | [链接](https://github.com/othmanadi/planning-with-files) |

---

# 附录C 术语速查

| 术语 | 英文全称 | 解释 |
|------|---------|------|
| **Skill** | - | Claude Code / Agent 工具中的预设工作流或能力模块 |
| **MCP** | Model Context Protocol | 模型上下文协议，用于 AI 与本地系统/工具交互的标准接口 |
| **TDD** | Test-Driven Development | 测试驱动开发，先写测试再写实现 |
| **ADR** | Architecture Decision Record | 架构决策记录，记录关键设计选择及其理由 |
| **RFC** | Request for Comments | 技术方案征求意见稿，用于团队技术决策 |
| **CI/CD** | Continuous Integration/Deployment | 持续集成/持续部署 |
| **SRE** | Site Reliability Engineering | 站点可靠性工程 |
| **RAG** | Retrieval-Augmented Generation | 检索增强生成，结合向量检索与大模型生成 |
| **LoRA** | Low-Rank Adaptation | 低秩适配，一种高效的模型微调方法 |
| **ETL** | Extract-Transform-Load | 数据抽取-转换-加载流程 |
| **SAST** | Static Application Security Testing | 静态应用安全测试 |
| **OWASP** | Open Web Application Security Project | 开放 Web 应用安全项目 |
| **PRD** | Product Requirements Document | 产品需求文档 |
| **CRO** | Conversion Rate Optimization | 转化率优化 |
| **SEO** | Search Engine Optimization | 搜索引擎优化 |
| **ER图** | Entity-Relationship Diagram | 实体关系图 |
| **DDL** | Data Definition Language | 数据定义语言 |
| **ORM** | Object-Relational Mapping | 对象关系映射 |
| **SSR** | Server-Side Rendering | 服务端渲染 |
| **ISR** | Incremental Static Regeneration | 增量静态再生 |
| **IaC** | Infrastructure as Code | 基础设施即代码 |

---

> **使用建议**：  
> 1. 新手优先安装 **三大元技能**（skill-creator / everything-claude-code / superpowers）  
> 2. 按工种安装对应领域的 **9-10分 Skill**  
> 3. 根据项目阶段动态启用 **7-8分 Skill**（如重构期启用 Refactoring Assistant）  
> 4. 定期回顾 **附录A 总表**，发现新发布的优质 Skill
