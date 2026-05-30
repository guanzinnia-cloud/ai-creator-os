---
tags: [中科闻歌, AI方法论, Agent教程, 技能体系, 组织变革, 工具选型]
related: [01-agent-architecture/tamt-framework.md, 01-agent-architecture/multi-agent-topologies.md]
date: 2026-05-30
---

# AI Agent驱动高效智能工作之路
## ——中科闻歌内部培训资料深度解析

> **文档性质**：企业内部AI Agent培训材料  
> **出品方**：中科闻歌  
> **时间**：2026年5月  
> **核心命题**：Agentic时代的投入产出比极速提升与组织效能变革

---

# 第一章 认知奠基：生成式AI与智能体AI的本质辨析

## 1.1 核心概念界定

### 1.1.1 生成式AI（Generative AI）
**定义**：基于本次上下文产出文本、图像、代码、摘要等内容的人工智能系统。

**能力边界**：
- 依赖单次提示词或会话上下文
- 擅长内容生成与知识问答
- 自主能力等级：低～中等
- 规划能力有限，通常仅基于单次提示

### 1.1.2 智能体AI（Agentic AI）
**定义**：围绕目标进行规划、调用工具、执行步骤，并完成多环节任务的人工智能系统。

**能力边界**：
- 具备更强的多步骤全局规划能力
- 原生设计可调用API、数据库、应用及各类外部工具
- 可调用长期记忆、任务历史及完整工作流上下文
- 自主能力等级：中等～高

## 1.2 能力对比矩阵

| 维度 | 生成式AI | 智能体AI |
|------|---------|---------|
| **核心用途** | 根据提示词生成内容或应答 | 通过多步骤工作流完成目标 |
| **主要输出** | 文本、图片、代码、音频、摘要、推荐内容 | 执行动作、做出决策、完成任务、输出工作流结果 |
| **自主能力等级** | 低～中等 | 中等～高 |
| **规划能力** | 有限，通常仅基于单次提示 | 具备更强的多步骤全局规划能力 |
| **工具调用** | 接入工具后才可使用 | 原生设计可调用API、数据库、应用及各类外部工具 |
| **记忆/上下文处理** | 通常仅依赖当前提示词或会话上下文 | 可调用长期记忆、任务历史及完整工作流上下文 |
| **工作交互形态** | 单轮对话或简短多轮交互 | 多步骤、以任务为导向的流程式执行 |
| **适配任务复杂度** | 擅长内容生成、知识问答类任务 | 擅长需要实际执行的复杂流程类任务 |
| **人类参与方式** | 用户输入提示词、审核输出结果 | 用户设定目标、过程监控、关键节点审批 |

## 1.3 融合发展趋势

> **核心判断**：人工智能的未来，大概率会融合生成式AI与智能体AI两大能力。

### 1.3.1 四大核心发展趋势

**趋势一：企业运营全面普及AI智能体**
- 应用场景：客户服务、销售运营、IT技术支持、财务流程、供应链协同
- 本质：将AI模型与企业业务系统打通互联

**趋势二：AI治理与监管机制进一步强化**
- 建立更清晰的规则、评估指标、审计追溯链路
- 设置关键人工审批节点
- 应对AI系统自主性提升带来的风险

**趋势三：愈发重视上下文理解与长效记忆能力**
- 依赖可靠数据
- 长上下文处理能力
- 对企业业务知识的安全调取能力

**趋势四：人机协同成为主流**
- 高风险任务中，人类设定目标
- 人类审核敏感输出结果
- 人类做出最终决策

---

# 第二章 组织变革：AI时代的能力重构与岗位痛点

## 2.1 核心命题

> **过去，懂代码的人定义效率；今天，懂智能体的人定义效率。**

> **管理干部、职能人员、非技术岗如果不能比技术人员更会用AI，组织效能的天花板就卡在了自己手里。**

## 2.2 岗位痛点深度剖析

### 2.2.1 管理层（决策岗）

| 错误场景 | 核心问题 | 后果 | 正确姿势 |
|---------|---------|------|---------|
| 用AI写报告，直接发董事会 | 全是通用套话，未注入公司内部数据和真实判断，空洞无价值 | 董事会一眼看出战略方向缺失，严重失分 | AI负责结构和表达，战略判断必须由人主导 |
| 让AI分析竞品，直接基于结果做决策 | AI的竞品信息有时效性限制，且无内部销售数据支撑 | 基于过时信息定方向，半年后发现竞品已转型，决策失效 | AI分析做框架，用内部一线真实数据校准决策 |

### 2.2.2 产品经理（PM，需求与业务岗）

| 错误场景 | 核心问题 | 后果 | 正确姿势 |
|---------|---------|------|---------|
| 用户访谈录音丢给AI总结，直接写进PRD | AI只能归纳表面诉求，无法区分"用户说的"和"用户真实要的" | PRD全是伪需求，开发完成后用户不买单 | AI提炼原始信息，PM做真实需求和业务价值判断 |
| 用AI一次性生成完整PRD，没有用Skill，直接甩给开发 | AI不了解公司技术栈、历史债务、团队边界，会写出大量无法实现的功能 | PRD与实际开发能力脱节，来回拉齐效率极低 | AI生成框架，PM填充业务约束、技术边界和判断 |
| 让AI给需求排优先级 | AI不知道公司战略重心、资源限制、老板真实意图，优先级看似合理但脱离实际 | 执行时与战略方向完全偏离，资源浪费 | 优先级的政治/业务判断由PM主导，AI仅辅助整理 |

### 2.2.3 UI/UX设计师（用户体验岗）

| 错误场景 | 核心问题 | 后果 | 正确姿势 |
|---------|---------|------|---------|
| AI生成UI方案，未使用正确Skill，未测试直接交付 | AI只关注视觉好看，完全忽略用户操作路径和业务逻辑 | 开发落地后，用户测试发现核心流程路径错误，返工重做 | AI出视觉稿，设计师做交互逻辑审查+用户测试验证 |
| 让AI做用户体验分析，直接引用数据 | AI没有产品真实埋点数据，所有"数据"都是编造的 | 汇报时被追问数据来源，误导业务决策 | 数据必须来自真实埋点，AI仅做解读和可视化 |
| 每次设计都重新描述风格，让AI生成 | 未沉淀设计规范，每次从零开始，风格不统一 | 产品界面割裂，品牌调性混乱 | 把设计系统、品牌规范喂给AI，形成专属Prompt，保证风格统一 |

### 2.2.4 开发工程师（技术实现岗）

| 错误场景 | 核心问题 | 后果 | 正确姿势 |
|---------|---------|------|---------|
| 没有用Skill，做任务确认，AI写的代码没看懂，直接提交上线 | 隐藏边界Bug、冗余依赖，且自己完全无法维护 | 线上出问题后无法排查，影响业务稳定性 | AI写的代码必须人读懂、验证，不理解的绝不上线 |
| 核心代码、数据库结构直接粘给AI提问 | 泄露内部业务逻辑、用户敏感数据，存在合规与安全风险 | 数据泄露，引发安全事故或合规处罚 | 脱敏后再提问，或使用公司内部部署的AI服务 |
| 用AI做Code Review，认为"没问题就合并" | AI无法识别团队规范、性能瓶颈和历史债务，只能检查表面语法 | 上线后出现性能问题、架构混乱，后期重构成本极高 | AI辅助常规检查，架构、性能问题仍需人工Review |
| 遇到Bug把报错粘给AI，方案直接用 | AI给出的是"能跑"的方案，多为治标不治本，掩盖根因 | 问题暂时解决，后期爆发更大的隐患 | AI辅助定位方向，根因分析必须由人完成，从根源解决问题 |

---

# 第三章 最佳实践：六要素工作法

## 3.1 六要素框架

> **清晰需求 + 对的模型 + 对的Agent工具 + 对的Skill + 对的提示词 + 对的AI交互需求确认**

**核心原则**：行动前想清楚这六个步骤，任务就成功了一大半。

## 3.2 模型选择策略

### 3.2.1 核心原则
- **上下文决定一次对话干多复杂的任务**
- **综合成本、模型获得难度，尽量挑靠前模型**
- **正确模型做正确的事情，事半功倍**

### 3.2.2 模型推荐矩阵（2026年5月）

#### 方案写作类

| 排名 | 模型 | 上下文 |
|------|------|--------|
| 1 | Claude Opus 4.7 Thinking | 1M |
| 2 | GPT-5.5 High | 1M |
| 3 | Gemini 3.1 Pro Preview | 1M |
| 4 | Claude Opus 4.6 Thinking | 1M |
| 5 | GPT-5.4 High | 1M |
| 6 | Kimi K2.6 | 256K |
| 7 | Claude Sonnet 4.6 | 1M |
| 8 | DeepSeek V4 Pro | 1M |
| 9 | GLM-5.1 | 200K |
| 10 | Gemini 3 Pro | 1M |

#### 代码编程类

| 排名 | 模型 | 上下文 |
|------|------|--------|
| 1 | Claude Opus 4.7 Thinking | 1M |
| 2 | GPT-5.3 Codex | 1M |
| 3 | Gemini 3.1 Pro Preview | 1M |
| 4 | Claude Sonnet 4.6 | 1M |
| 5 | Claude Opus 4.6 Thinking | 1M |
| 6 | GPT-5.5 High | 1M |
| 7 | GLM-5.1 | 1M |
| 8 | GPT-5.4 High | 1M |
| 9 | DeepSeek V4 Pro | 1M |
| 10 | Kimi K2.6 | 256K |

#### 产品设计类

| 排名 | 模型 | 上下文 |
|------|------|--------|
| 1 | Claude Opus 4.7 Thinking | 1M |
| 2 | GPT-5.5 High | 1M |
| 3 | Claude Opus 4.6 Thinking | 1M |
| 4 | Gemini 3.1 Pro Preview | 1M |
| 5 | Claude Sonnet 4.6 | 1M |
| 6 | GPT-5.4 High | 1M |
| 7 | GLM-5.1 | 200K |
| 8 | Kimi K2.6 | 256K |
| 9 | Qwen3.6 Plus / Max Preview | 262K |
| 10 | Gemini 3 Pro | 1M |

---

# 第四章 工具图谱：智能体工具特性与选型

## 4.1 工具分类总览

| 分类 | 智能体工具 | 核心特性（一句话概括） | 主要应用领域与系统定位 |
|------|-----------|---------------------|---------------------|
| **全能** | Claude Desktop | 将大模型深度嵌入桌面级操作系统，通过MCP协议和Cowork模式实现零摩擦的本地文件编排与多步自动化应用控制 | 本地跨应用办公自动化、个人知识图谱管理与复杂工作流无头编排 |
| **全能** | Codex (OpenAI) | 同上 | 云端安全代码生成、全天候后台任务监听、跨平台（Slack/Notion）数字助理 |
| **代码** | Claude Code | 具备Unix高度可组合性的终端原生编程引擎，支持跨文件逻辑推理、子智能体并行任务分发及自动化测试迭代 | 命令行重度编程、CI/CD流水线集成、企业级代码库审计与自动化重构 |
| **代码** | DeepSeek TUI | 同上 | 深度本地代码仓库开发、Shell脚本自动化执行、高风险代码安全探索 |
| **代码** | Cursor、Trae、通义灵码 | 基于全知代码库上下文的AI原生集成开发环境，首创支持多文件同步修改的沉浸式编程体验 | 现代软件工程开发、快速商业原型构建、高技术债旧代码重构与现代化 |
| **设计** | AiStudio Build | 谷歌基于底层智能路由算法构建的全栈Vibe Coding平台，实现从自然语言指令到云端后端服务与前端界面一键部署的无缝转换 | 自然语言应用开发、全栈应用快速投产、Firebase与Cloud Run深度集成部署 |
| **设计** | Open Design、Open Codesign | 开源设计生成框架，通过严格的设计系统约束文件消灭AI生成设计的不可控性与"塑料感" | UI/UX交互原型极速生成、前端生产级代码输出、企业设计规范自动化落地 |
| **设计** | Figma AI | 深度嵌入全球工业标准设计管线的智能化协作套件，提供从概念草图秒级生成到复杂设计资产跨项目语义检索的全链路提效 | 专业级UI/UX精细化设计、团队视觉协作管理、海量设计资产清洗与整合 |
| **设计** | Image2 | 突破性实现99%字符级渲染精度并具备完美多面板风格一致性的多模态视觉大模型，标志着AI图像从概念插画向实用视觉工程的跨越 | 商业高保真广告视觉渲染、精准UI交互界面生成、电影与游戏专业分镜设计 |

## 4.2 小白安装路径

### 4.2.1 推荐路径（DeepSeek生态）
1. 安装Node.js最新版本
2. 购买DeepSeek API
3. 安装DeepSeek TUI
4. 其他工具安装都交给DeepSeek TUI

**注意事项**：
- 科学上网自备
- 安装任何东西，如果报错，就把错误信息贴给DeepSeek TUI，它去想办法

### 4.2.2 推荐路径（Claude生态）
- 对于没上手过的同事，建议从Claude Code开始
- 官方教学资源：Claude Code核心40个指令中文版

## 4.3 进阶技巧：移花接木——工具+模型的自由组合

**核心原理**：Codex、Codex Cli、Claude Code、Claude Desktop、Cursor是目前最强的Agent工具（不是模型），可以在工具中替换其他模型完成各类任务。

**操作方式**：
1. 处理任务过程中切换模型
2. 选择未使用过的模型，或者自定义模型（可以加URL和Key）

**Claude Code特殊配置**：
- 可接入雅意-海汇服务平台，快速接入LLM API
- 告别封号等一切烦恼

## 4.4 Hooks机制

**定义**：钩子机制，让你不用时时刻刻盯着屏幕确认。

**应用场景**：
- 长时间任务执行中的关键节点通知
- 自动化流程中的状态变更提醒
- 减少人工监控成本

---

# 第五章 技能体系：Skill的层级与元技能

## 5.1 元技能（Meta-Skills）

> **必须必须必须学习的顶级Skill！**

### 5.1.1 三大元技能

| 元技能 | 功能定位 | 核心价值 |
|--------|---------|---------|
| **everything-claude-code** | 全功能Claude Code编排 | 长时间多智能体协同写作，素材管理 |
| **superpowers** | 超级能力增强 | 思维框架、头脑风暴、任务拆解 |
| **skill-creator** | 技能创造器 | 1生2，2生3，3生万物——基于元技能衍生业务技能 |

**核心理念**：元技能是技能体系的根节点，掌握三大元技能即可快速衍生出适应各类场景的业务技能。

## 5.2 写作段位体系

| 段位 | 价值 | AI可达成 |
|------|------|---------|
| **一段·启蒙表达** | 能把句子写通顺，让别人看懂 | ❌ |
| **二段·叙事清晰** | 能把一件事说明白，不漏掉关键信息 | ❌ |
| **三段·观点成型** | 能围绕观点讲道理，让论述站住脚 | ✅ 浅用AI即可达到 |
| **四段·规范应用** | 能按规矩写文章，格式得体不出错 | ✅ 好模型+正确的Prompt |
| **五段·专业交付** | 能用文字解决复杂问题，以理服人 | ✅ 好模型+好Agent+优秀的Prompt |
| **六段·风格初显** | 文字有个人辨识度，追求高水平 | ✅ 好模型+好Agent+高质量Prompt+优秀Skill |
| **七段·创意绽放** | 能创造独特作品，拥有原创的底气 | ⚠️ 人类主导，AI辅助 |
| **八段·思想铸碑** | 作品能回应时代，触及人类根本命题 | ⚠️ 人类主导 |
| **九段·不朽经典** | 文字成为文明的地标，后世难以绕过 | ⚠️ 人类主导 |

**关键洞察**：
- AI可辅助达到"五段·专业交付"水平
- 六段及以上必须依赖人类主导+AI辅助
- 从不会到会，到还不错，也就1小时

## 5.3 典型开发场景下的Skills

### 5.3.1 知识沉淀类
**方法论**：世界公认的知识整理方法 → 制作技能

**案例演示**：
```
/pua 我的obsidian已经构建好关于palantir的知识体系，
现在我想整理他们发布AIP产品的话术、叙事风格、经典案例。
帮我制作一个演示这个产品的脚本。时长3分钟。要足够的专业。
```

### 5.3.2 基于知识的写作
**超长文写作流程**：
```
/superpowers 先捋清楚思路

/everything-claude-code:multi-plan:  
长时间多智能体协同写作。素材要具备...
```

### 5.3.3 方案编写工作流

| 阶段 | 推荐工具 | 说明 |
|------|---------|------|
| 资料素材搜集 | AiStudio, ChatGPT, Codex | 偶尔有幻觉，注意鉴别 |
| 方案二次发挥 | AiStudio, ChatGPT | 基于已有素材深度加工 |
| 长方案任务编排 | Codex+技能编排、龙工+技能编排 | 素材已经具备后的流程化写作 |

**推荐Skill**：`agent-team-orchestration`

**Codex优势**：自带搜索+自带长流程Agent+自带技能+本地文件读写，是最适合用于方案编写的工具。

---

# 第六章 实战案例：从概念到落地的完整演示

## 6.1 案例一：片头制作

**工具链**：Claude Code + HyperFrames
**输出**：动画案例展示
**资源链接**：https://hyperframes.heygen.com/

## 6.2 案例二：交互设计

**工具链**：Open Design / Open Codesign + Claude Code CLI
**输出**：PPT效果展示

## 6.3 案例三：AI画流程图与架构图

**工具链**：fireworks-tech-graph
**特点**：一句话描述你的系统，几秒就能出专业图
**强烈推荐**

---

# 第七章 进阶资源：学习路径与生态链接

## 7.1 Claude Code使用技巧资源库

| 主题 | 资源链接 |
|------|---------|
| Anthropic官方黑客松比赛-冠军8小时拿下$15000配置开源详细讲解 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7604807999009459492&showTab=favorite_collection) |
| 设计师切图的小工具 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7635935800018067173&showTab=favorite_collection) |
| Claude Code浏览器自动化方案 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7632637056321210801&showTab=favorite_collection) |
| Claude Code跨会话持久化记忆插件 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7636082509680283283&showTab=favorite_collection) |
| Karpathy编码指南65行文字10万+star一个单一的CLAUDE.md文 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7636447831594683657&showTab=favorite_collection) |
| Claude Code配置DeepSeek V4模型，配置1M上下文 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7635185444833949878&showTab=favorite_collection) |
| Ralph+多智能体编排，让AI长时间工作从原理到实践 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7633454865993256234&showTab=favorite_collection) |
| CC官方教学核心40个指令免费中文版 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7633072515383905586&showTab=favorite_collection) |
| 谷歌开源设计规范 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7631790084459589519&showTab=favorite_collection) / [GitHub](https://github.com/voltagent/awesome-design-md) |
| 学Claude Code这个博主实在是太棒了 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7616659271435388857&showTab=favorite_collection) |

## 7.2 Skill相关资源库

| 主题 | 资源链接 |
|------|---------|
| Claude Code + HyperFrames生成动画案例展示 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7636977667576712448&showTab=favorite_collection) |
| Open-Design配合Claude Code CLI做PPT效果展示 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7636323308607426033&showTab=favorite_collection) |
| Vibe Coding中的TDD（测试驱动开发） | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7635532740464528675&showTab=favorite_collection) |
| Superpowers Skill里的头脑风暴讲解 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7634134044023770404&showTab=favorite_collection) |
| Ruflo编排Claude Code的系统 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7637155090951933224&showTab=favorite_collection) |
| Fireworks-tech-graph专业图生成 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7635755138590099313&showTab=favorite_collection) |
| AI画流程图、架构图 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7633345313431899442&showTab=favorite_collection) |
| Browser Harness浏览器操作Skill | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7634561217771621632&showTab=favorite_collection) |
| Pixso一句话生成高品质UI | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7631413677903596826&showTab=favorite_collection) |
| UI设计的Skill | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7607099323809663974&showTab=favorite_collection) |
| 50个安装量高的Skills | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7612596965670407462&showTab=favorite_collection) |

## 7.3 其他高质量资源

| 分类 | 主题 | 资源链接 |
|------|------|---------|
| Codex使用技巧 | Codex五步秘诀 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7632611377294675209&showTab=favorite_collection) |
| Codex使用技巧 | Codex新手教程02：Skill到底怎么用 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7635649706026509992&showTab=favorite_collection) |
| Codex使用技巧 | Codex Chrome - Codex直接操作浏览器 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7637392544409701647&showTab=favorite_collection) |
| 基础扫盲 | 从0-1搭建一个Agent前瞻 | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7638275253008993578&showTab=favorite_collection) |
| 开源深度研究 | Deep Research全球第一！Onyx（原Danswer） | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7627313989025926410&showTab=favorite_collection) |
| Vibe Coding工具讨论 | Codex真把Claude Code反超了？ | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7638232675082964274&showTab=favorite_collection) |
| 案例展示 | Demo Codex + GPT Image2生成答辩PPT | [抖音链接](https://www.douyin.com/user/self?from_tab_name=main&modal_id=7637444076488700858&showTab=favorite_collection) |

## 7.4 飞书Skill共享库

**200+ Skill共享资源**：
https://my.feishu.cn/sheets/XSWvs7xqShhzFktGmRGcVRNpnoc?from=from_copylink

---

# 第八章 安装配置：从入门到进阶

## 8.1 小白篇：安装与配置

### 8.1.1 Codex安装
- 详细教程：https://www.runoob.com/codex/codex-install.html

### 8.1.2 Claude Code安装
- 官方详细教程（中文版）：https://code.claude.com/docs/zh-CN/quickstart

### 8.1.3 VS Code + Codex插件
- 在插件市场添加Codex即可

## 8.2 进阶配置

### 8.2.1 模型切换配置
- 在工具设置中切换未使用过的模型
- 或自定义模型（添加URL和Key）

### 8.2.2 上下文配置
- Claude Code可配置1M上下文
- DeepSeek V4模型配置指南

---

# 第九章 工作方法论：从错误中学习

## 9.1 血压飙升案例剖析

### 9.1.1 案例一：工具错配
**症状**：用A工具做B事，效率极低
**根因**：未根据任务类型选择正确工具

### 9.1.2 案例二：加工缺失
**症状**：明明基于初稿方案30分可以再用好的工具加工到80分，但是不去做，直接给初稿
**根因**：缺乏"二次加工"意识，对AI产出质量要求过低

### 9.1.3 案例三：幻觉轻信
**症状**：直接引用AI生成的数据，未做事实核查
**根因**：对AI幻觉风险认知不足

## 9.2 正确工作流

**核心原则**：
1. 清晰需求：靠你了（人类）
2. 对的模型：已经介绍了
3. 对的Agent工具：也都教过了
4. 对的Skill：全部列出来了
5. 对的提示词：靠你了（人类）
6. 对的AI交互需求确认：靠你了（人类）

---

# 第十章 组织宣言：AI时代的生存法则

## 10.1 核心论断

> **智能体犯错，大多数情况是咱们没说清楚问题。AI不会淘汰人，会用AI的一定会淘汰不会用AI的人。**

## 10.2 组织要求

**新员工面试转型**：
- 全面转型考察AI工具使用能力
- 除考察素养外，更要考察AI工具使用能力
- 今年将继续对全员进行AI工具使用的摸底

## 10.3 两种"大爷"哲学

| 类型 | 特征 | 评价 |
|------|------|------|
| **真不产出的纯大爷** | 拒绝使用AI，效率低下 | ❌ 不可取 |
| **聪明的用好AI产出极高自己又能闲的大爷** | 善用AI提升效率，腾出时间思考更高价值问题 | ✅ 目标状态 |

> **何必虚度？**

---

# 附录A：快速参考卡片

## A.1 六要素检查清单

- [ ] 需求是否清晰？
- [ ] 模型是否选对？
- [ ] Agent工具是否匹配？
- [ ] Skill是否调用正确？
- [ ] 提示词是否优化？
- [ ] 交互需求是否确认？

## A.2 紧急任务模型速查

| 任务类型 | 首选模型 | 备选模型 |
|---------|---------|---------|
| 紧急方案写作 | Claude Opus 4.7 Thinking | GPT-5.5 High |
| 紧急代码编程 | Claude Opus 4.7 Thinking | GPT-5.3 Codex |
| 紧急产品设计 | Claude Opus 4.7 Thinking | Claude Opus 4.6 Thinking |

## A.3 工具选型速查

| 场景 | 推荐工具 | 关键特性 |
|------|---------|---------|
| 本地办公自动化 | Claude Desktop | MCP协议+Cowork模式 |
| 云端代码生成 | Codex | 全天候后台任务监听 |
| 终端编程 | Claude Code | Unix可组合性 |
| IDE编程 | Cursor/Trae | 全知代码库上下文 |
| 全栈快速部署 | AiStudio Build | 一键部署 |
| 设计规范落地 | Open Design | 消除"塑料感" |
| 专业UI设计 | Figma AI | 工业标准管线 |
| 高精度视觉 | Image2 | 99%字符级渲染精度 |

---

# 附录B：术语表

| 术语 | 解释 |
|------|------|
| **Agentic AI** | 智能体AI，具备规划、工具调用、多步骤任务执行能力的AI系统 |
| **Generative AI** | 生成式AI，基于提示生成内容的AI系统 |
| **MCP协议** | Model Context Protocol，模型上下文协议，用于AI与本地系统交互 |
| **Cowork模式** | 协作模式，AI与人类协同工作的方式 |
| **Vibe Coding** | 氛围编程，基于自然语言描述进行全栈开发的方法论 |
| **Skill** | 技能，AI Agent的预设工作流或能力模块 |
| **元技能（Meta-Skill）** | 可以衍生其他技能的基础技能 |
| **TDD** | Test-Driven Development，测试驱动开发 |
| **TUI** | Terminal User Interface，终端用户界面 |
| **Hooks** | 钩子机制，自动化流程中的触发器 |
| **幻觉（Hallucination）** | AI生成看似合理但实际错误的信息 |
| **上下文（Context）** | AI模型一次能处理的token数量上限 |
| **Prompt** | 提示词，向AI输入的指令或问题 |
| **PRD** | Product Requirements Document，产品需求文档 |
| **CI/CD** | Continuous Integration/Continuous Deployment，持续集成/持续部署 |
| **Code Review** | 代码审查，对代码质量进行检查的过程 |

---

> **闻弦歌，知雅意**  
> **善推理，会决策**  
>  
> 关注中科闻歌公众号  
> 获取更多AI资讯
