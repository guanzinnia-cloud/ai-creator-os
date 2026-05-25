# Hierarchical 拓扑——多 Agent 的 Manager 模式

## 核心概念

Hierarchical（层级/树状）拓扑中，一个 **Manager Agent** 负责任务分解、分配和结果整合，多个 **Specialist Agent** 各司其职。Manager 不直接执行具体工作，而是编排和调度。

## 结构

```
         Manager Agent
         /    |    \
        /     |     \
  Specialist  Specialist  Specialist
   (Agent A)  (Agent B)  (Agent C)
```

## 适用场景

| 场景 | 说明 | 例子 |
|------|------|------|
| 复杂任务分解 | 一个任务需要拆成多个子任务 | 商业决策报告：市场分析 + 财务预测 + 风险评估 |
| 质量管控 | 需要对子任务输出做审核和合并 | 内容生产：选题审核 → 脚本审核 → 成片审核 |
| 跨领域协作 | 不同 Specialist 需要统一调度 | 产品发布：研发 + 市场 + 销售并行 |

## 优势

- **分工明确**：Manager 负责"做什么"，Specialist 负责"怎么做"
- **质量可控**：Manager 可以审核 Specialist 的输出
- **可扩展**：新增 Specialist 不影响整体结构
- **责任清晰**：出错时可追溯到具体是 Manager 的分配问题还是 Specialist 的执行问题

## 劣势

- **单点瓶颈**：Manager 成为性能瓶颈和单点故障
- **Manager 的上下文压力**：Manager 需要理解所有子任务的全貌
- **通信开销**：每次 Specialist 执行完毕都需要 Manager 做一次汇总

## 与 Hybrid 拓扑的关系

AI Creator OS 当前使用 Hybrid 拓扑，但 Hierarchical 可以作为其子模式：

```
AI Creator OS（Hybrid）
├── [可选] Manager Agent（未来可增加）
│     ├── Trend Scout（子 Agent）
│     ├── Video Architect（子 Agent）
│     ├── Platform Engineer（子 Agent）
│     └── ...
├── [当前] 直接通信的 Peer Agent
└── [当前] self_improving 作为内置反馈回路
```

何时升级到 Hierarchical：

- 当 6 个 Agent 之间的协调复杂度超出预期
- 当需要统一的上下文管理和优先级调度
- 当不同 Agent 的输出出现频繁冲突或冗余

## T.A.M.T. 视角

```
Task:  Manager Agent 分配子任务、审核结果、合并输出
Answer: 结构化的任务分配 + 质量报告
Model:  Claude（高推理能力，适合做 Manager）
Tools:  各 Specialist Agent 的接口 + 审计工具
```
