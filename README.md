# AI Creator OS

> **品牌**：AI-1st Builder — THE AUTOMATED AGENTIC ENGINE  
> **产品官网**：[https://vercel.com/guan-zinnia-s-projects/ai-creator-os-m9je/3ArMEbeZD5RCdm2DJ1vpD43oFLfZ](https://vercel.com/guan-zinnia-s-projects/ai-creator-os-m9je/3ArMEbeZD5RCdm2DJ1vpD43oFLfZ)  
> **一句话**：帮你快速创建正确 Agent 的系统化工具 — 从数据评估到交互确认，覆盖 DOMA 全链路。

---

## 产品定位

**THE AUTOMATED AGENTIC ENGINE, BUILT BY AGENTS.**

你花了两周研究怎么搭一个客服Agent。看了LangChain文档、试了Dify的Chatflow、对比了GPT-4o和Qwen的定价、画了架构图、写了Prompt、调了三天输出格式——最后发现模型选错了（太贵）、架构搭重了（单Agent够用却做了多Agent）、Prompt忘了写边界约束，用户输入什么它都信。

**如果有一个Agent能帮你设计Agent呢？**

输入一句话描述你的场景，30分钟内它跑完六个步骤：评估你的数据源够不够用、画出需求本体模型、按用量和预算推荐最优模型组合、给出最简工具栈、按行业标准生成SKILL.md、优化Prompt到可上线水平，最后输出一份完整的交互需求文档，可以直接交给前端开发或自己搭建。

**数据评估、需求建模、模型推荐、工具选型、Skill生成、提示词优化、交互确认 —— 你描述场景，它负责设计。**

---

## Agent Architect — 六步法创建正确的Agent

### 使用场景

> 老板说"给我们客服搭个AI Agent，下周一要看demo"。你不知道从哪开始 —— 用什么模型？搭什么架构？数据在哪？要不要上RAG？三个小时后你还在刷文档。其实可以让 Agent Architect 先帮你设计一遍：输入"客服Agent，数据在飞书文档和MySQL里，月调用量预估10万次"，30分钟后拿到一份完整的Agent方案，包含模型推荐、成本测算、系统架构图和SKILL.md。剩下三天你只需要照着实现。

### 核心流程（DOMA 映射）

| # | Step | DOMA | 输入 | 输出 | Free | Pro | Enterprise | 知识库支撑 |
|---|------|------|------|------|------|-----|-----------|-----------|
| 0 | **数据评估** | **D** Data | 用户的数据来源描述 | 数据评估报告 | 基础数据源清单：列出所有数据来源，标注类型（文档/数据库/API/Excel），标记格式和访问方式 | 数据质量+链路设计：在Free基础上增加五层数据资产归类（原始→基础→标准→业务→专题），标注质量问题字段，设计数据流转链路图 | 完整数据治理管道：增加数据质量评分报告（100+规则维度），数据血缘追踪图谱，周期性治理流程设计，多租户数据隔离方案 | `04-industry-insights/tianhu-xdata-enterprise-data-governance.md` |
| 1 | **需求建模** | **O** Ontology | 用户场景描述 | 需求分析报告 + 本体模型 | JTBD需求分析：显性需求+隐性需求+场景需求+约束需求四层拆解，输出需求优先级矩阵 | DIP本体建模(步骤1-4)：实体概念抽取、关系定义、数据字段→本体映射、业务推理规则设计，输出本体模型yaml | DIP本体建模(步骤1-5)：增加行动闭环设计，包含完整的触发-推理-执行-反馈链路，输出可执行的Agent规则引擎 | `04-industry-insights/dip-ontology-decision-intelligence.md` |
| 2 | **模型推荐** | **M** Model | 需求+数据类型+预算 | 模型推荐报告 + 成本测算表 | Top 3推荐：按任务类型（RAG/ReAct/FC等）推荐3个模型，附单价对比 | 全模型成本对比矩阵：按Agent类型拆解10+模型的完整成本（含输入/输出/Embedding/Reranker/插件），输出对比表和月成本预估 | 定制推荐模型+用量看板：评估是否需要SFT微调，设计用量监控看板，私有模型服务部署方案 | `04-industry-insights/agent-economics-business-operations.md` |
| 3 | **Agent工具** | **A** Agents | 需求+模型+链路 | 技术方案 + 拓扑设计 | 单Agent工具栈推荐：按用户技术能力推荐框架（Dify/Coze/LangChain等），输出工具选型检查清单 | 多Agent拓扑设计：识别子任务依赖，推荐拓扑类型（Sequential/Hierarchical/Parallel/Hybrid/Async），输出DAG依赖图和通信机制 | 私有化部署架构：Docker/K8s部署拓扑图，私有网络设计，私有模型服务方案，高可用架构 | `01-agent-architecture/multi-agent-topologies.md` |
| 4 | **Skill生成** | **A** Agents | 需求+模型+拓扑 | SKILL.md | 基础SKILL.md：遵循7段式Prompt结构（Context→Profile→Knowledge→Action→What NOT→Format→Constraints），含self_improving三段 | 完整SKILL.md+提示词优化：引用Skill Matrix同领域高分Skill作为设计参考，增加动态领域匹配机制，多trigger场景覆盖 | 全套企业文档：SKILL.md + 运营SOP + 异常处理手册 + 版本更新日志模板，多Agent协作的Skill接口协议 | `03-skills-catalog/claude-code-skill-matrix.md` |
| 5 | **提示词优化** | **A** Agents | SKILL.md中的Prompt | 优化后提示词 | 基础优化：三步优化法（清晰度检查+冗余消除+边界增强），输出优化前后对比 | 领域术语+Schema校验：对接业务术语表确保用词一致，JSON Schema定义+自动校验规则，增加few-shot示例 | 合规过滤规则：嵌入企业合规审查边界，敏感词过滤，行业监管规则适配，审计日志输出 | Google Prompt Engineering Guide |
| 6 | **交互确认** | **—** | 全部交付物 | 原型交互需求文档 | 基础交互表：用户输入字段定义、Agent输出展示形式、异常处理方案表格 | 完整原型文档：用户旅程图（触发→输入→处理→输出→反馈→闭环），交互触点注释，可交付UI设计师 | 多角色审批流：权限矩阵设计、审批节点定义、操作审计日志需求，API接口协议文档 | `02-user-research/user-research-methodology.md` |

### 方案总览

| 维度 | Free | Pro | Enterprise |
|------|------|-----|-----------|
| **目标用户** | 个人副业探索者 | 港深科技从业者/小团队 | 企业/大型组织 |
| **定价** | $0 | $9.9-29.9/月 | 定制（年付） |
| **交付形态** | 单Agent方案文档 | 多Agent方案+本体模型 | 私有化部署+治理管道+看板 |
| **交付周期** | 单次对话 | 2-3轮迭代 | 项目制 |
| **知识库依赖** | 通用方法论 | 全量知识库 | 全量+企业内部数据 |
| **核心差异** | 快速验证Agent可行性 | 完整对比+专业设计 | 企业级全链路方案 |

---

### 核心亮点

#### 亮点 1：数据驱动的全链路设计（Data + Ontology）

每个Agent方案不是从空想开始的。Step 0 先盘数据家底 —— 你的数据源在哪、什么格式、质量如何、链路怎么走。Pro以上再建本体模型，把零散的业务字段组织成机器可理解的概念网络。

**区别于"填Prompt就生成"的工具**：Agent Architect 让数据治理前置，而不是等Agent上线发现数据不对再回头补。

| 层级 | 能力 | Free | Pro | Enterprise |
|------|------|------|-----|-----------|
| 数据源盘点 | 清单式扫描数据来源 | ✅ 基础 | ✅ 完整 | ✅ 完整 |
| 数据质量评估 | 完整性/一致性/时效性检查 | — | ✅ 链路设计 | ✅ 治理管道 |
| 本体建模 | 概念→关系→规则→行动闭环 | — | ✅ DIP步骤1-4 | ✅ DIP步骤1-5 |
| 数据治理 | 100+质量规则+血缘追踪 | — | — | ✅ 企业级 |

#### 亮点 2：模型选择 + 成本量化引擎

模型选型不能只比参数 —— 要算账。Agent Architect 内置2026年最新模型定价库（10+模型），按Agent类型自动拆解单次调用成本，输出月预算估算。

**用量看板**（Enterprise）让企业级客户能看到：每个Agent用了多少Token、花了多少钱、推荐更便宜的模型能省多少。

| 能力 | 内容 | Free | Pro | Enterprise |
|------|------|------|-----|-----------|
| 模型推荐 | 按任务类型推荐Top 3 | ✅ | ✅ | ✅ |
| 成本测算 | 单次调用成本 + 月预算 | ✅ | ✅ | ✅ |
| 全模型对比矩阵 | 10+模型完整成本对比 | — | ✅ | ✅ |
| 用量看板 | Token消耗监控/预算预警 | — | — | ✅ |
| 定制推荐模型 | SFT评估/私有模型服务 | — | — | ✅ |

#### 亮点 3：多Agent拓扑方案设计

单Agent够用就别硬堆复杂度。Agent Architect 根据子任务依赖自动匹配最简拓扑 —— 顺序、层级、并行、混合、异步五种模式可选。

Pro以上输出完整的DAG依赖图和Agent间通信协议，Enterprise再附加私有化部署架构（Docker/K8s + 私有网络 + 高可用）。

| 能力 | 内容 | Free | Pro | Enterprise |
|------|------|------|-----|-----------|
| 单Agent方案 | 工具栈+检查清单 | ✅ | ✅ | ✅ |
| 多Agent拓扑 | 5种模式 + DAG依赖图 | — | ✅ | ✅ |
| Agent通信协议 | 共享状态/消息队列/API调用 | — | ✅ | ✅ |
| 私有化部署架构 | K8s + 私有网络 + 高可用 | — | — | ✅ |

#### 亮点 4：六步法方法论闭环

不是零散的建议集合。从数据到本体到模型到Agent到交互，六步串成一条完整的交付流水线。每一步输出独立的可交付内容，用户可以选择全做或挑着用。

**方法论栈**：
```
六要素工作法（需求→模型→工具→Skill→提示词→交互）
  └── 最外层流程，定义"做什么"
      │
      ├── DOMA（Data→Ontology→Models→Agents）
      │   └── 架构框架，定义"怎么组织"
      │       │
      │       ├── 数据分层治理模型（贴源→清洗→标准→主题→应用）
      │       │   └── 用在 Step 0（数据评估/Data层）
      │       │
      │       ├── DIP本体建模（5步法）
      │       │   └── 用在 Step 1（需求建模/Ontology层）
      │       │
      │       ├── Agent Economics（定价+成本测算）
      │       │   └── 用在 Step 2（模型推荐/Model层）
      │       │
      │       └── TAMT（Task→Answer→Model→Tools）
      │           └── 用在 Step 4（Skill生成/Agent层）
      │
      ├── Harness评估（4维度质量兜底）
      │   └── 跨所有步骤的评估体系
      │
      ├── Prompt Engineering（提示词优化方法论）
      │   └── 用在 Step 5（提示词优化）
      │
      └── 用户旅程与交互设计（触点分析+原型需求）
          └── 用在 Step 6（交互确认）
```

---

## 技术栈

| 层级 | 工具 | 用途 |
|------|------|------|
| **Agent 编排** | Claude Code + Dify/LangFlow | Skill 开发 + 产品化前端 |
| **模型层** | Qwen / DeepSeek / GPT-4o | 推理中枢（按场景混合选择） |
| **知识库** | 本地 Markdown（结构化知识文件） | 方法论文档、模型定价数据、本体建模参考 |
| **版本控制** | GitHub | Skill 即代码，作品集即产品 |
| **前端** | React + TypeScript + Tailwind CSS + Vercel | 产品官网（基于01_Product index前端改造） |
| **Agent部署** | Dify / LangFlow / Claude Code | 根据用户技术栈适配 |

---

## 部署

- **GitHub 仓库**：[https://github.com/guanzinnia-cloud/ai-creator-os](https://github.com/guanzinnia-cloud/ai-creator-os)
- **部署平台**：Vercel

---

## 自我分析：用 Agent Architect 设计 Agent Architect（Dogfooding）

> Agent Architect 本身就是一个Agent。以下用自身的6步法对自己做一次完整的产品分析，验证方法论的自我一致性。

### Step 0: 数据评估 — 自身数据源

| 数据源类型 | 具体内容 | 格式 | 质量评估 |
|-----------|---------|------|---------|
| **知识库文件** | 12+ markdown（DOMA/TAMT/DIP/Economics等） | 结构化Markdown | 高质量，有YAML frontmatter和related字段 |
| **模型定价库** | 2026年5月最新定价（10+模型） | 结构化表格 | 高时效性，有数据来源链接 |
| **用户输入** | 用户描述的Agent场景需求 | 自然语言 | 需引导对齐，依赖Profile Read确认 |
| **Skill矩阵** | 126个Skill全景图谱 | 结构化评级 | 高质量，跨领域参考 |
| **商业案例** | 潜在用户的反馈和需求 | 非结构化记录 | 需持续积累 |

**数据链路**：知识库文件(静态) + 用户输入(动态) → Profile Read对齐 → 上下文注入 → Agent输出

### Step 1: 需求建模 — 自身需求分析

**JTBD**：帮助用户"快速、正确地创建Agent"

| 需求层级 | 内容 | 在Agent Architect中的映射 |
|---------|------|------------------------|
| **显性需求** | "帮我设计一个Agent" | 输出完整的Agent创建方案 |
| **隐性需求** | "帮我避免选错模型、设计错误" | 成本测算+本体建模+拓扑设计 |
| **场景需求** | "我不懂技术，但需要Agent" | Free方案，简化输出 |
| **约束需求** | "数据不能出网，必须私有化" | Enterprise方案，私有化架构 |

**[Pro] 本体建模 — Agent Architect 自身的业务本体**：
```yaml
concepts:
  - name: Agent方案
    attributes: [需求描述, 数据源, 推荐模型, 成本预估, 工具栈, SKILL.md]
    relations:
      - type: 由...创建
        target: 用户
      - type: 基于
        target: 知识库
  - name: 知识库
    attributes: [文件路径, 领域标签, 方法论, 数据来源]
  - name: 模型推荐
    attributes: [模型名, 定价, 适用场景, 成本测算]
rules:
  - condition: "用户 技术能力 = '非技术' and 预算 = '低'"
    action: 匹配Free方案
  - condition: "用户 部署约束 = '私有化'"
    action: 匹配Enterprise方案
```

### Step 2: 模型推荐 — 自身用什么模型

| 候选模型 | 输入(¥/百万token) | 适用性 | 选择理由 |
|---------|-------------------|--------|---------|
| Qwen3.5-Plus | ¥0.8 | 日常方案生成 | **性价比最优**，日常RAG+方案生成够用 |
| DeepSeek V4-Flash | ¥1.0 | 快速迭代 | 极速响应，适合交互式对话 |
| GPT-4o | ¥17.5 | 复杂方案兜底 | 复杂推理场景仅用 |

**成本测算**：
- 单次完整Agent方案生成：~8,000-15,000 token（含知识库检索+6步生成）
- 使用 Qwen3.5-Plus：单次 ~¥0.01-0.03
- 混合推理策略（日常用Qwen、复杂场景降级GPT-4o）可降低 70%+ 成本

### Step 3: Agent工具 — 自身工具栈

| 工具 | 用途 | 替代方案 |
|------|------|---------|
| **Claude Code Skill系统** | Agent运行环境（Harness） | 无（核心绑定） |
| **知识库Markdown** | 结构化知识存储 | 向量数据库（Pro升级方向） |
| **Dify Chatflow** | 产品化UI（未来） | 独立Web应用 |

**拓扑演进**：单Agent（当前）→ 未来可拆分为 `Requirements Analyzer` + `Model Recommender` + `Skill Generator` 三个子Agent。

### Step 4: SKILL.md — 自身Skill设计（已完成）

见 [`skills/agent-architect/SKILL.md`](skills/agent-architect/SKILL.md)

### Step 5: 提示词优化 — 自身Prompt优化

已应用的三步优化法：
1. **清晰度**：每个Step明确定义输入/输出/执行步骤
2. **冗余消除**：无开场白、无总结、无"你好"
3. **边界增强**：待确认标注规则、知识库未覆盖兜底规则

### Step 6: 交互确认 — 自身产品形态

| 触点 | 当前实现 | 未来方向（Web UI） |
|------|---------|------------------|
| **用户输入** | 自然语言对话 | 结构化表单+引导式问答 |
| **方案展示** | Markdown输出 | 交互式仪表盘 |
| **人机协作** | 用户确认/提问 | 可视化编辑+拖拽调整 |
| **异常处理** | 待确认标注 | 自动补全建议+人工介入 |

---

## 商业模式创新：SaaS + Agent 双重属性

Agent Architect 兼具两种属性：

| 维度 | SaaS模式 | Agent模式 |
|------|---------|-----------|
| **本质** | 订阅制工具 | 智能协作体 |
| **交付方式** | 用户自助使用Web端 | 对话式交互，按需生成 |
| **Free/Pro** | 独立Web产品 + 订阅计费 | Skill运行在Claude Code上 |
| **Enterprise** | 私有化部署 + 年费 | 企业自有模型+定制Ontology |
| **定价锚点** | 功能层级 | 方案复杂度+数量 |

### 四大创新定价模型

| 模型 | 逻辑 | ARPU参考 | 毛利率 |
|------|------|---------|--------|
| **模型节约分成** | 帮用户选更便宜的模型，省下的钱25%分成 | ¥4,175-8,150/客户 | 50-60% |
| **模板市场抽成** | UGC Agent方案模板交易，平台抽20% | ¥10-500/客户 | 80-90% |
| **效果付费** | Agent上线后效果达标才收费 | ¥4,800-15,300/客户 | 40-50% |
| **生命周期订阅** | 从设计到运维的全周期服务 | ¥298-4,880/月 | 60-70% |

详见 [`04-industry-insights/b2b-agent-business-model-innovation.md`](knowledge-base/04-industry-insights/b2b-agent-business-model-innovation.md)

**核心洞察**：Agent Architect 的商业模式创新在于——它的产品本身就是它要帮用户设计的东西。每个交付案例都在丰富模板库（数据网络效应），用户既是消费者也是贡献者（UGC生态），模型选择的节约可直接量化（价值定价的客观锚点）。

---

*1 Agent Architect.*
