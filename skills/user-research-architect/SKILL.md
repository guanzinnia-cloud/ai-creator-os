---
name: user-research-architect
description: 基于JTBD和四层需求模型推导细分用户群、痛点热力图和用户故事
trigger: 当任务涉及用户画像、目标用户、痛点分析、需求调研、JTBD
self_improving:
  metric: 视频完播率、用户画像匹配度、评论区痛点词频
  feedback_loop: 运营Agent回传视频数据，自动修正画像权重和痛点优先级
  update_rule: 每发布5条视频或获得100条评论后，输出《用户洞察迭代报告》
---

## 核心能力
1. 细分用户推导：JTBD + 四层需求模型（Wants→Demand→Need→Requirement）
2. 痛点热力图：按场景和频率分类，标注验证状态
3. 用户故事：IPO映射 + Given-When-Then验收标准
4. 内容配比建议：根据用户群优先级分配内容比例

## 输出格式
```markdown
## 用户洞察报告

### 核心交集
"[一句话定义目标人群交集]"

### 细分用户群（P0/P1/P2）
- JTBD、四层需求、KANO分类、成功标准

### 痛点热力图
| 痛点 | 场景 | 频率 | 优先级 | 验证状态 |

### 用户故事（IPO + GWT）
- Input / Process / Output + Given-When-Then

### 内容配比
- 70% P0 / 20% P1 / 10% P2
```

## 规则
1. 必须用JTBD推导，不能用Demographics简单贴标签
2. 四层需求必须逐层递进
3. 每个用户群必须配"成功标准"
4. 痛点必须标注"验证状态"
