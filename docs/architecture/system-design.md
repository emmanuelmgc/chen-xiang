# 架构设计文档 — NAFHA 2.0 遗留问题修复

**版本**：v1.0  
**日期**：2026-06-02  
**架构师**：高见远  
**项目类型**：遗留问题修复（非新项目）

---

## 一、现有架构概述

### 1.1 技术栈（不变）
- **框架**：Astro 5（`output: 'static'`, `format: 'file'`）
- **前端**：Vue 3 + Tailwind CSS 3
- **语言**：AR（RTL）/ EN（LTR）双语
- **数据源**：TypeScript 文件（`src/data/`）

### 1.2 核心架构决策（已验证正确）
- ✅ `getStaticPaths()` 动态路由（产品详情页）
- ✅ `redirectMissingRoutes()` 自定义插件（静态站点缺失路由处理）
- ✅ `useLanguage.ts` Composable（响应式多语言切换）
- ✅ `contact_info.ts` 集中化数据源（本次不替换，保持 mock）

### 1.3 本次改动范围（最小化处理）
- **新增页面**：`journal.astro`、`gift-landing.astro`
- **数据修复**：`help_center.ts` 补充 5 篇占位文章
- **不涉及**：架构层改动、配置文件改动、组件库改动

---

## 二、共享资源清单（受保护文件）

> **规则**：以下文件在本次迭代中**禁止修改**，除非经过架构师书面批准。

| 文件 | 原因 | 负责人 |
|------|------|--------|
| `src/layouts/BaseLayout.astro` | 全局布局，修改风险高 | 不修改 |
| `src/lib/useLanguage.ts` | 多语言核心逻辑，已验证正确 | 不修改 |
| `astro.config.mjs` | 构建配置，本次无变化 | 不修改 |
| `src/data/contact_info.ts` | 本次保持 mock，不替换 | 不修改 |
| `src/data/products.ts` | 产品数据源，本次无变化 | 不修改 |

**本次迭代只修改**：
- `src/data/help_center.ts`（补充数据，不改变结构）
- `src/pages/*.astro`（新增页面）
- `src/components/**/*.vue`（如新页面需要新组件）

---

## 三、任务拆分（并行开发策略）

### 3.1 任务分配（3 个 Deliverables → 3 个并行 Agent）

```
Agent A（页面开发）:
  - 任务：实现 journal.astro（AR/EN 双语）
  - 文件：src/pages/journal.astro
  - 依赖：无
  - 预估工具调用：≤20 次

Agent B（页面开发）:
  - 任务：实现 gift-landing.astro（AR/EN 双语）
  - 文件：src/pages/gift-landing.astro
  - 依赖：无
  - 预估工具调用：≤20 次

Agent C（数据修复）:
  - 任务：修复 help_center.ts（补充 5 篇占位文章）
  - 文件：src/data/help_center.ts
  - 依赖：无
  - 预估工具调用：≤15 次
```

### 3.2 并行策略（文件级隔离）
- ✅ **无文件冲突风险**：3 个 Agent 修改的文件完全独立
- ✅ **无需文件锁机制**：本次任务拆分天然隔离
- ✅ **可完全并行**：3 个 Agent 同时启动，互不阻塞

### 3.3 依赖关系（本次极简）
```
Task #1 (PRD Lite) ✅ 已完成
  ↓
Task #2 (架构设计) ✅ 进行中（本文档）
  ↓
Task #3 (前端开发) → 启动 3 个并行 Agent
  ├─ Agent A: journal.astro
  ├─ Agent B: gift-landing.astro
  └─ Agent C: help_center.ts 数据修复
  ↓
Task #4 (SEO + 本地化审校) → 检查新增页面的 hreflang 和 RTL 布局
  ↓
Task #5 (测试 & 部署) → 构建验证 + 冒烟测试
```

---

## 四、数据流（新增页面）

### 4.1 journal.astro 数据需求
- **数据类型**：博客文章列表（本次用 mock 数据）
- **数据来源**：`src/data/blog_posts.ts`（需新建，本次用占位数据）
- **多语言**：每篇文章需有 `title_ar`、`title_en`、`excerpt_ar`、`excerpt_en`
- **图片**：使用 `public/images/blog/` 下的占位图片

### 4.2 gift-landing.astro 数据需求
- **数据类型**：礼品套装列表（本次用 mock 数据）
- **数据来源**：`src/data/gift_sets.ts`（需新建，本次用占位数据）
- **多语言**：每个套装需有 `name_ar`、`name_en`、`description_ar`、`description_en`
- **CTA**：链接到 WhatsApp（使用 `CONTACT_INFO.whatsappNumber`）

### 4.3 help_center.ts 数据修复
- **问题**：5 个分类引用了 12 个文章 ID，但只定义了 7 个
- **修复方案**：补充剩余 5 篇占位文章
- **文章结构**：与现有 7 篇保持一致（`id`、`categoryId`、`title_ar`、`title_en`、`content_ar`、`content_en`）

---

## 五、接口契约（最小化）

### 5.1 新增页面 ↔ 现有组件
- **CommonHeader**：需在导航菜单中添加 `journal.html` 和 `gift-landing.html` 的链接
- **CommonFooter**：需在 Footer 链接中添加 `journal.html` 和 `gift-landing.html`
- **TrustIconBar**：不使用（仅首页）

### 5.2 新增页面 ↔ useLanguage Composable
- 所有新增页面必须使用 `useLanguage()` 实现多语言切换
- 参考现有页面（如 `about-us.astro`）的实现方式

### 5.3 新增页面 ↔ RTL/LTR 布局
- 所有新增页面必须设置 `document.documentElement.dir` 和 `document.documentElement.lang`
- 参考 `BaseLayout.astro` 的实现

---

## 六、架构里程碑检查点（本次简化）

| 里程碑 | 检查内容 | 触发条件 | 负责人 |
|--------|----------|----------|--------|
| M1: 新增页面完成 | 3 个页面均可访问，无构建错误 | Task #3 完成 | 架构师 |
| M2: 数据完整性 | help_center.ts 所有引用都存在 | Task #3 完成 | 架构师 |
| M3: 多语言验证 | AR/EN 切换正常，RTL 布局正确 | Task #4 完成 | 架构师 + QA |
| M4: 构建验证 | `npm run build` 零错误，28 + 3 = 31 个页面 | Task #5 开始前 | 主理人 |

---

## 七、风险与缓解措施

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| journal.astro 设计不明确 | 开发进度延迟 | 参考现有页面风格，先做 MVP 版本 |
| gift-landing.astro 设计不明确 | 开发进度延迟 | 参考现有页面风格，先做 MVP 版本 |
| help_center.ts 补充文章主题不明确 | 数据不完整 | 先创建占位文章（标题双语，内容占位），后续填充 |
| 新增页面忘记添加 hreflang | SEO 问题 | Task #4（SEO + 本地化审校）专门检查 |

---

## 八、交付物清单

### 8.1 架构文档（本文档）
- ✅ `docs/architecture/system-design.md`（本文档）

### 8.2 新增文件清单
- `src/pages/journal.astro`（AR/EN 双语）
- `src/pages/gift-landing.astro`（AR/EN 双语）
- `src/data/blog_posts.ts`（占位数据，本次新建）
- `src/data/gift_sets.ts`（占位数据，本次新建）
- `src/data/help_center.ts`（补充 5 篇文章，本次修改）

### 8.3 修改文件清单
- `src/components/common/CommonHeader.vue`（添加导航链接，可选）
- `src/components/common/CommonFooter.vue`（添加 Footer 链接，可选）

---

## 九、结论与建议

### 9.1 本次架构策略
- **最小化改动**：只添加新页面和补充数据，不改架构层
- **完全并行**：3 个 Deliverables 无文件冲突，可同时启动 3 个 Agent
- **轻量审查**：架构帅在 M1/M2/M3/M4 检查点快速审查，不阻塞流程

### 9.2 下个迭代建议（真实联系信息替换）
- **必须做**：集中化配置管理（本次已验证必要性）
- **必须做**：架构设计文档前置（本次已做，下个迭代要保持）
- **建议做**：自动化测试基础设施（Vitest + Playwright）

---

**架构师签名**：高见远（Gao）  
**日期**：2026-06-02  
**审批**：Emmanuel（主理人）

---

*本文档由架构师高见远输出，主理人齐活林确认后启动 Task #3（前端开发）。*
