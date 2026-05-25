# Agent Harness 评估框架

## 什么是 Harness？

在 AI Agent 系统中，Harness 是承载 Agent 运行的运行时环境——包括 Prompt 工程层、工具调用层、上下文管理、安全边界等基础设施。Claude Code 的 Skill 系统本质上就是一种 Harness。

对 Harness 的评估，不同于对 Agent 输出的评估。Harness 评估关注的是**系统的可靠性、可演化性和可观测性**。

## 评估维度

### 1. 响应质量（Output Quality）

| 指标 | 说明 | 衡量方式 |
|------|------|---------|
| 指令遵循率 | Agent 是否严格按照 SKILL.md 的 trigger/output 执行 | 采样审计，每周 10 条 |
| 幻觉率 | 生成内容中出现事实错误的比率 | 结合知识库交叉验证 |
| 格式合规率 | JSON 输出是否严格符合 schema | 自动化 schema 校验 |
| 风格一致性 | 输出风格是否匹配博主定位和人设 | 人工抽样评分（1-5） |

### 2. 工具使用效率（Tool Execution）

| 指标 | 说明 |
|------|------|
| 工具调用成功率 | 外部 API / WebFetch 等的调用成功率 |
| 平均调用次数 | 完成一个任务的平均工具调用数（越少越高效） |
| 错误恢复率 | 工具调用失败后自动重试/降级成功率 |
| 延迟 | 从用户输入到首次有用输出的时间 |

### 3. 自我迭代效果（Self-Improvement）

| 指标 | 说明 |
|------|------|
| Metric 达成率 | SKILL.md 中 self_improving.metric 的目标达成率 |
| 反馈回流率 | 实际数据回流到 knowledge-os-curator 的比率 |
| 策略更新频率 | Agent 自动调整策略参数的频次 |
| AB 实验转化率 | A/B-Ready 变量中胜出版本的实际采用率 |

### 4. 系统健壮性（Robustness）

| 指标 | 说明 |
|------|------|
| 上下文窗口利用率 | 每次调用的 Token 使用情况（防止超限或浪费） |
| 降级路径触发率 | 主流程失败后降级路径的触发频率 |
| Prompt 注入成功率 | 对抗测试：恶意输入突破约束的比率（越低越好） |
| 多 Agent 协调失败率 | Agent 间通信/任务传递的失败频率 |

## 评估方法

### 离线评估（Pre-Deployment）
- **Golden Dataset**：维护 50 条典型 query + 期望输出，每次修改 SKILL.md 后回归
- **Schema 校验**：JSON 输出自动校验格式
- **对抗测试**：边界输入（超长、空、恶意 Prompt）的防御测试

### 线上监控（In-Production）
- **互动漏斗**：完播率 → 点赞率 → 评论率 → 转发率 → 关注转化率
- **用户反馈闭环**：评论区情绪分析、私信关键词追踪
- **AB 实验看板**：不同 Hook/标题/封面的表现对比

### 周期性评估（Recurring）

| 周期 | 评估内容 | 输出 |
|------|---------|------|
| 每条内容 | 自动抓取互动数据，对比母版预测 | 单条评估报告 |
| 每周 | 回顾本周内容表现，更新反馈样本库 | 周报 + 策略调整建议 |
| 每月 | Deep-dive：Agent 策略参数优化 + 知识库更新 | 月报 + 系统更新日志 |
| 每季度 | 架构级回顾：Harness 设计是否支撑业务目标 | 架构评审 + Roadmap 更新 |

## 在本项目中的应用

AI Creator OS 的 Harness 评估框架：

```
数据源（完播率/互动率/评论） 
  → Platform Engineer 收集
  → Knowledge Curator 存储和结构化
  → 各 Agent 的 self_improving 段读取
  → 策略参数自动调整
  → 下期内容生效
```

每个 Skill 的 `self_improving` 段就是 Harness 评估的最小闭环单元：

```
metric → feedback_loop → update_rule
```

评估的目的是：让每个 Agent 不仅知道自己做得怎么样，还能自动变好。
