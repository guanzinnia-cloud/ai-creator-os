# 多 Agent 拓扑结构

## 1. Sequential（顺序/装配线）
- Agents 依次执行，像流水线
- 例子：文档处理（提取→摘要→行动项→存储）
- 在本项目中的映射：内容生产流水线

## 2. Hierarchical（层级）
- Manager Agent 监督子 Agent
- 例子：商业决策报告（经理分配任务给市场/客服/财务专员）
- 在本项目中的映射：未来可增加 Manager Agent 统筹 6 个子 Agent

## 3. Hybrid（混合）⭐ 当前使用
- 组合结构 + 实时反馈回路
- 例子：自动驾驶（顶层路线规划 + 传感器融合 + 碰撞避让实时通信）
- 在本项目中的映射：
  - Sequential：内容流水线
  - Parallel：三平台同时运营
  - 实时反馈：数据回流修正策略

## 4. Parallel（并行）
- Agents 同时处理不同工作流
- 例子：大规模数据分析分块处理
- 在本项目中的映射：小红书/B站/YouTube 运营 Agent 并行执行

## 5. Asynchronous（异步）
- Agents 独立执行，不同时间触发
- 例子：网络安全威胁检测
- 在本项目中的映射：热点抓取 Agent 定时触发，运营 Agent 按需触发
