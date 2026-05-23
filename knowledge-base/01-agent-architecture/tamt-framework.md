# T.A.M.T. 单 Agent 设计框架

## 记忆口诀：Tired Alpacas Mix Tea

### T - Task（任务）
- Agent 的目标定义
- 例子："Plan a 3-day budget trip to Tokyo"

### A - Answer（输出）
- 输出格式定义
- 例子："A detailed itinerary with costs, hotel bookings, and tickets"

### M - Model（模型）
- LLM backbone
- 例子：Claude 3.7 Sonnet

### T - Tools（工具）
- 外部资源
- 例子：Google Maps, Skyscanner, Booking.com

## 在本项目中的应用
每个 Skill 文件本质上就是 T.A.M.T. 的实例化：
- Task = trigger 字段
- Answer = 输出格式段落
- Model = Claude（默认）
- Tools = 外部 API/平台/飞书
