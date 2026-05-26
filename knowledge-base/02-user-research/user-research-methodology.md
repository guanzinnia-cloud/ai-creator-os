---
tags: [用户研究, JTBD, KANO, AHP, RICE, 需求工程, 方法论]
date: 2026-05-26
---

# 用户研究与建模通用方法论（全来源标注版）

> 本文档出现的每一条方法论均标注原始文献/标准出处。凡缺乏经典来源支撑的框架，已删除或重构为有来源的等价物。

---

## 第一章 用户战略分层 —— 找到最值得服务的用户

### 1.1 市场细分三维框架（MECE + Kotler 可衡量性标准）

Philip Kotler 提出有效市场细分必须满足：**可衡量性（Measurable）、可进入性（Accessible）、可盈利性（Substantial）** [来源：Kotler, Philip. *Marketing Management*. 15th ed., 2016]。

MECE 原则（Mutually Exclusive, Collectively Exhaustive）由 Barbara Minto 系统化提出 [来源：Minto, Barbara. *The Pyramid Principle*. 1987/2009]。

| 维度 | Kotler 标准 | 核心问题 | 分层标准 |
|------|------------|----------|---------|
| **场景侧** | 可衡量性 | 在哪里用？ | 机构类型 / 业务环节 / 工作流阶段 |
| **需求侧** | 可进入性 | 谁在用？ | 经验年限 / 能力层级 / 角色职责 |
| **供给侧** | 可盈利性 | 谁付钱？ | 采购决策权 / 预算归属 |

### 1.2 用户价值评分：层次分析法（AHP）

Thomas Saaty 提出的 AHP，通过成对比较矩阵计算权重，并进行一致性检验 [来源：Saaty, Thomas L. *The Analytic Hierarchy Process*. 1980]。

**Satty 1–9 标度**：

| 标度 | 含义 |
|------|------|
| 1 | 同等重要 |
| 3 | 稍重要 |
| 5 | 明显重要 |
| 7 | 强烈重要 |
| 9 | 极端重要 |

**一致性检验**：CR = CI / RI，若 **CR < 0.1**，通过检验。

### 1.3 优先级分档（三种数据驱动方法）

1. **Jenks Natural Breaks**：使组内方差最小、组间方差最大 [来源：Jenks, 1967]
2. **K-Means 聚类**：最小化簇内平方和（WCSS） [来源：MacQueen, 1967]
3. **业务 ROI 阈值法**：LTV/CAC > 3 为 SaaS 健康基准 [来源：Tunguz, 2013; Bessemer Venture Partners]

### 1.4 采购决策中心（Buying Center）

Webster 与 Wind 提出组织购买行为中的五种角色 [来源：Webster & Wind, *Journal of Marketing*, 1972]：

| 角色 | 关注点 | 产品设计应对 |
|------|--------|-------------|
| **使用者** | 日常效率 | 强调"辅助而非替代" |
| **购买者** | ROI、合规 | 以插件/API 嵌入，降低替换成本 |
| **决策者** | 团队管理 | 同时展示管理价值与一线价值 |

---

## 第二章 需求深度洞察 —— 穿透表层到因果链

### 2.1 JTBD（Jobs-To-Be-Done）

Clayton Christensen 提出：用户购买产品不是为了拥有功能，而是为了**在特定情境下完成工作（Job）并取得进步** [来源：Christensen et al., *Competing Against Luck*, 2016]。

**标准句式**：
> "当我在 **[触发情境]** 时，我想 **[达成目标]**，以便 **[获得进步]**。"

**四种力量模型**（Moesta & Spiek, 2014）：

| 力量 | 定义 | 调研问题 |
|------|------|----------|
| **推力（Push）** | 现有方案不足 | 现有工具哪里最让你痛苦？ |
| **拉力（Pull）** | 新方案吸引力 | 什么功能会让你立刻想试用？ |
| **习惯（Inertia）** | 对现状依赖 | 切换新工具你最担心什么？ |
| **焦虑（Anxiety）** | 对新方案不确定 | 如果系统推荐错了，你怎么办？ |

### 2.2 需求层次：IEEE 29148 / BABOK 标准

[来源：ISO/IEC/IEEE 29148:2018; IIBA. *BABOK Guide v3*. 2015]

| 层次 | 定义 | 产品映射 |
|------|------|----------|
| **业务需求** | 组织高层目标 | 产品愿景、战略 KPI |
| **利益相关方需求** | 特定用户群体需要 | 用户画像、JTBD |
| **解决方案需求** | 系统必须满足的条件 | 功能需求 + 非功能需求 |
| **过渡需求** | 从现状到新系统的迁移 | 数据迁移、培训、上线计划 |

### 2.3 KANO 需求分层模型

狩野纪昭（Noriaki Kano）于 1984 年提出 [来源：Kano et al., *Journal of the Japanese Society for Quality Control*, 1984]。

**问卷设计**：对每个功能设计正反两个问题（正向："如果提供该功能，您感觉如何？" / 反向："如果不提供，您感觉如何？"）

| 功能类型 | 正向 | 反向 | 产品策略 |
|----------|------|------|----------|
| **基本型（Must-be）** | 喜欢/期望 | 不喜欢 | 必须满足，不作为亮点 |
| **期望型（One-dimensional）** | 喜欢/期望 | 无所谓 | 持续优化，竞品比较重点 |
| **兴奋型（Attractive）** | 喜欢/期望 | 无所谓 | 差异化创新，制造惊喜 |
| **无差异型（Indifferent）** | 无所谓 | 无所谓 | 尽量规避 |
| **反向型（Reverse）** | 不喜欢 | 喜欢 | 谨慎上线 |

---

## 第三章 调研验证体系 —— 从假设到证据

### 3.1 定性研究：理论饱和原则

Glaser 与 Strauss 提出：当新增数据不再产生新主题时，即达饱和 [来源：Glaser & Strauss, *The Discovery of Grounded Theory*, 1967]。

实证参考：Guest 等人分析表明，B 端场景中通常 **6–12 次**访谈后核心主题趋于稳定 [来源：Guest et al., *Field Methods*, 2006]。

### 3.2 定量研究：样本量计算（Cochran 公式）

[来源：Cochran, William G. *Sampling Techniques*. 1977]

> **n = (Z² × p × (1-p)) / E²**

| 允许误差 E | 最小样本量 n |
|------------|--------------|
| ±8% | **150** |
| ±5% | **385** |

### 3.3 可用性测试：问题发现率模型

Jakob Nielsen 与 Thomas Landauer：5 名用户可发现约 **85%** 的可用性问题（p≈0.32）[来源：Nielsen & Landauer, *INTERCHI'93*, 1993]。

> **P(至少发现一次) = 1 - (1-p)^n**

---

## 第四章 需求工程化 —— 从痛点到功能矩阵

### 4.1 需求优先级：RICE 模型

由 Intercom 产品团队提出 [来源：McBride, Sean. *Intercom Blog*, 2016]。

> **RICE Score = (Reach × Impact × Confidence) / Effort**

| 变量 | 定义 |
|------|------|
| **Reach** | 每周期影响多少用户 |
| **Impact** | 对每个用户的影响程度（3=巨大，0.25=极低） |
| **Confidence** | 对估计的信心百分比 |
| **Effort** | 投入成本（人月） |

### 4.2 需求池分级：MoSCoW 方法

由 Dai Clegg 在 DSDM 中提出 [来源：Clegg & Barker, *Case Method Fast-Track*, 1994]。

| 级别 | 含义 | 产品映射 |
|------|------|----------|
| **Must have (M)** | 没有则产品不可用 | P0 |
| **Should have (S)** | 重要但可临时替代 | P1 |
| **Could have (C)** | 有则更好，无则无碍 | P2 |
| **Won't have (W)** | 本次明确不做 | 冻结 |

### 4.3 用户故事落地

**Connextra 格式** [来源：Cohn, Mike. *User Stories Applied*, 2004]：
> `作为` [角色]，`我想要` [能力]，`以便` [价值]。

**验收标准：Given-When-Then** [来源：North, Dan. *Dan North Blog*, 2006]：
> **Given** [前置条件]  
> **When** [触发动作]  
> **Then** [预期结果]

---

## 第五章 方法论使用检查清单

### 项目启动前
- [ ] 是否用 **MECE** [Minto, 2009] 穷尽所有用户组合？
- [ ] 是否通过 **AHP** [Saaty, 1980] 确定维度权重（CR < 0.1）？
- [ ] 是否识别了 **Buying Center** [Webster & Wind, 1972]？

### 需求分析阶段
- [ ] 是否完成了至少 **3 个 JTBD 场景** [Christensen, 2016]？
- [ ] 是否用 **KANO** [Kano et al., 1984] 区分了基本型/期望型/兴奋型需求？
- [ ] 是否进行了 **Why-How Laddering** 追溯？

### 调研执行阶段
- [ ] 定性访谈是否遵循**理论饱和原则** [Glaser & Strauss, 1967]？
- [ ] 问卷样本量是否通过 **Cochran 公式** [Cochran, 1977] 计算？
- [ ] 原型测试样本量是否参考 **Nielsen & Landauer (1993)**？

### 产品输出阶段
- [ ] 需求优先级是否使用 **RICE** [Intercom, 2016] 或 **MoSCoW** [Clegg, 1994]？
- [ ] 用户故事是否使用 **Connextra 格式** [Cohn, 2004] 并包含 **Given-When-Then** [North, 2006]？

---

## 附录：来源速查表

| 方法 | 原始来源 | 年份 |
|------|----------|------|
| MECE | Minto, *The Pyramid Principle* | 1987/2009 |
| AHP | Saaty, *The Analytic Hierarchy Process* | 1980 |
| JTBD | Christensen, *Competing Against Luck* | 2016 |
| KANO | Kano et al., *Japanese Society for Quality Control* | 1984 |
| RICE | McBride (Intercom) | 2016 |
| MoSCoW | Clegg & Barker | 1994 |
| Buying Center | Webster & Wind, *Journal of Marketing* | 1972 |
| 理论饱和 | Glaser & Strauss | 1967 |
| Cochran 公式 | Cochran, *Sampling Techniques* | 1977 |
| 可用性测试 5 人 | Nielsen & Landauer | 1993 |
| 用户故事 | Cohn, *User Stories Applied* | 2004 |
| BDD/GWT | North, *Dan North Blog* | 2006 |
