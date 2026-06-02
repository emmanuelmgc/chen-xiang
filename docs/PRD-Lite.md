# PRD Lite — NAFHA 2.0 遗留问题修复

**版本**：v1.0  
**日期**：2026-06-02  
**负责人**：Emmanuel（主理人）+ WorkBuddy 团队

---

## 一、范围说明

### In-Scope（本次迭代必须完成）
1. ~~**补充真实联系信息** — 替换为真实数据~~ → **已跳过，见 Backlog**
2. **实现 `journal.html`** — 博客/日志页面（MVP 版本，参考现有页面风格）
3. **实现 `gift-landing.html`** — 礼品落地页（MVP 版本，参考现有页面风格）
4. **修复 `help_center.ts` 数据不完整** — 补充剩余5篇占位文章，补齐数据结构

### Out-Scope（本次不处理）
- 新功能开发（搜索、Newsletter 已在 2.0 完成）
- 视觉重构或样式调整
- 后端或 CMS 接入
- **补充真实联系信息**（已跳过，见 Backlog）

---

## 二、数据字典

| 字段名 | 位置 | 格式 | 当前占位值 | 备注 |
|--------|------|------|------------|------|
| `whatsappNumber` | `src/data/contact_info.ts` | 字符串，带国际区号 | `'966501234567'` | 需替换为真实沙特/阿联酋号 |
| `phone` | `src/data/contact_info.ts` | 字符串 | `'+966 50 123 4567'` | 同 WhatsApp 或单独号码 |
| `email` | `src/data/contact_info.ts` | 字符串，邮箱格式 | `'info@nafha.life'` | 需确认真实邮箱 |
| `address` | `src/data/contact_info.ts` | 对象，`ar` + `en` | 占位文本 | 需提供阿拉伯语 + 英语地址 |
| `socialMedia.instagram` | `src/data/contact_info.ts` | 字符串，带 @ | `'@nafha.official'` | 需确认真实账号 |
| `socialMedia.tiktok` | `src/data/contact_info.ts` | 字符串，带 @ | `'@nafha'` | 需确认真实账号 |
| `vatNumber` | `src/data/legal_policies.ts` | 字符串 | `'ZZ123456789'` | 沙特/阿联酋 VAT 格式 |
| `companyName` | `src/data/legal_policies.ts` | 对象，`ar` + `en` | 占位 | 需确认真实公司名 |

---

## 三、验收标准（Definition of Done）

### 任务 1：真实联系信息替换
- [ ] `src/data/contact_info.ts` 中所有字段已替换为真实数据
- [ ] 所有引用 `CONTACT_INFO` 的组件（CommonFooter、CTASection 等）显示真实信息
- [ ] WhatsApp 浮动按钮点击后跳转到正确的 WA 链接
- [ ] 构建成功，`npm run build` 零错误

### 任务 2：实现 `journal.html`
- [ ] 创建 `src/pages/journal.astro`（AR/EN 双语）
- [ ] 页面包含博客文章列表（可先用 mock 数据，结构正确即可）
- [ ] 从现有页面（如首页产品教育卡片）检查 `journal.html` 的链接是否可点击
- [ ] 构建成功，路由 `journal.html` 生成

### 任务 3：实现 `gift-landing.html`
- [ ] 创建 `src/pages/gift-landing.astro`（AR/EN 双语）
- [ ] 页面包含礼品套装展示（可先用 mock 数据）
- [ ] 从相关页面检查 `gift-landing.html` 的链接是否可点击
- [ ] 构建成功，路由 `gift-landing.html` 生成

### 任务 4：修复 `help_center.ts`
- [ ] 补充缺失的 5 篇文章（需与现有分类匹配）
- [ ] 每篇文章包含 `id`、`categoryId`、`title_ar`、`title_en`、`content_ar`、`content_en`
- [ ] 构建成功，`help-center.astro` 中所有分类链接可访问

---

## 四、技术栈确认

- **框架**：Astro 5 + Vue 3 + Tailwind CSS（不变）
- **语言**：AR（RTL）/ EN（LTR）（不变）
- **数据源**：`src/data/` 下的 TypeScript 文件（集中化管理，不变）
- **构建**：静态站点（`output: 'static'`）

---

## 五、风险与依赖

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| 真实联系信息未提供 | 无法完成 In-Scope #1 | 本次先完成页面框架，数据可后补 |
| `journal` / `gift` 页面设计不明确 | 开发进度延迟 | 参考现有页面风格，先做 MVP 版本 |
| help_center 缺失文章主题不明确 | 无法补充内容 | 先创建占位文章，标题双语，内容后续填充 |

---

## 六、跳过决策追踪（Backlog）

> 根据复盘结论：任何"跳过"决策必须自动创建 Backlog 条目

| 跳过项 | 原因 | 负责人 | 创建日期 | 优先级 |
|--------|------|--------|----------|----------|
| 补充真实联系信息（WhatsApp/电话/邮箱/地址/VAT） | 本次先用占位跑通流程，数据下次补 | Emmanuel | 2026-06-02 | P2 |
| journal.html 页面内容完善（真实博客文章） | 本次先做 MVP 版本，参考现有页面风格 | Emmanuel | 2026-06-02 | P2 |
| gift-landing.html 页面内容完善（真实礼品数据） | 本次先做 MVP 版本，参考现有页面风格 | Emmanuel | 2026-06-02 | P2 |

---

*本文档由产品经理许清楚输出，主理人齐活林确认后启动开发流程。*
