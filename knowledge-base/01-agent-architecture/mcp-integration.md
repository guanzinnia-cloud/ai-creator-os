# MCP 集成（Model Context Protocol）

## 什么是 MCP

MCP（Model Context Protocol）是 Anthropic 推出的开放协议，用于标准化 AI 模型与外部工具、数据源之间的通信。可以理解为 AI 应用的 USB-C 接口——让 LLM 通过统一协议访问各类工具和数据。

## 核心概念

```
Host（宿主应用）—— Claude Code / Claude Desktop
  └── MCP Client（协议客户端）
        ├── MCP Server A（工具/数据源）
        ├── MCP Server B（工具/数据源）
        └── ...
```

- **Host**：运行 AI 模型和 MCP Client 的宿主（如 Claude Code）
- **MCP Client**：嵌入在 Host 中，负责与 MCP Server 建立一对一连接
- **MCP Server**：每个 Server 暴露一组工具（Tools）、资源（Resources）和提示词（Prompts），通过 JSON-RPC 2.0 通信

## 在本项目中的映射

AI Creator OS 的 MCP 集成架构：

```
Claude Code（Host）
├── Skill: trend-intelligence-scout
│     └── MCP 工具: WebFetch（热点抓取）
├── Skill: knowledge-os-curator
│     └── MCP 工具: 飞书 API / GitHub（知识库读写）
├── Skill: platform-growth-engineer
│     └── MCP 工具: 各平台 API（发布/数据监测）
└── Bash Tool（Sandboxed 执行环境）
      └── git（版本控制）、gh（GitHub CLI）、curl（API 调用）
```

## MCP 带来的核心能力

### 1. 工具即插即用
- 每个 MCP Server 独立部署，单独维护
- 新增数据源只需添加一个 MCP Server 配置
- 不影响现有 Skill 的运行逻辑

### 2. 标准化权限控制
- Host 层统一管理工具权限
- 用户可精细控制每个工具是否允许自动执行

### 3. Skill + MCP 的组合模式

```
用户需求 → Skill（T.A.M.T. 实例化）
               ↓
        MCP Client 动态选择 Tool
               ↓
        MCP Server 执行 + 返回结果
               ↓
        Skill 组织输出 → 用户
```

## 可能集成的 MCP Server

| 工具类型 | 候选 MCP Server | 用途 |
|---------|----------------|------|
| 热点抓取 | WebFetch（内置） | 微博/知乎/百度热搜 |
| 数据库 | 飞书 MCP Server | 知识库读写、内容管理 |
| 版本控制 | GitHub MCP Server | PR 管理、代码审查 |
| 设计 | 设计工具 MCP（Figma） | 封面/缩略图自动生成 |
| 搜索 | Web Search MCP | 补充信息检索 |
| 数据可视化 | 图表生成 MCP | 互动数据看板 |

## 注意事项

- MCP 目前仍属于早期协议，工具生态在快速演进
- 每个 MCP Server 独立运行，资源消耗与 Server 数量成正比
- 敏感工具（如发布 API）的权限粒度需要额外关注
