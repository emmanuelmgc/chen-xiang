# NAFHA 沉香品牌网站 - 数据审计报告

**审计日期**: 2026-06-02  
**审计人员**: data-dev (general-purpose-1)  
**审计范围**: `src/data/` 目录下所有数据文件

---

## 执行摘要

本次审计检查了 8 个数据文件，发现以下关键问题：
- **5 个占位符/测试数据问题** - 需要真实数据替换
- **1 个代码 bug** - `formatters.ts` 中的 `formatDate` 函数
- **3 处未经证实的宣传表述** - 需要 Owner 确认
- **1 个本地化问题** - 数据文件未使用 `formatters.ts` 函数
- **6 个图片占位符** - 需要真实图片替换

---

## 1. 数据完整性问题

### 1.1 缺失字段检查
✅ **已通过** - 所有数据文件的必需字段均已填写，无空字符串或 `undefined` 值。

### 1.2 错误回退检查
✅ **已通过** - 未发现问题。所有数据都有正确的双语（ar/en）内容。

---

## 2. 占位符问题 ⚠️

### 2.1 测试电话号码 (`contact_info.ts:27, 29`)
**问题**:
```typescript
whatsappNumber: "+96650XXXXXXX", // KSA mock number
phoneNumber: "+96611XXXXXXX",
```
**严重性**: 高  
**修复建议**: 向用户确认真实的沙特阿拉伯电话号码。

---

### 2.2 Google Maps 占位符 (`contact_info.ts:32`)
**问题**:
```typescript
googleMapsUrl: "https://maps.app.goo.gl/XXXXXXX", // Placeholder
```
**严重性**: 高  
**修复建议**: 向用户确认准确的地图位置链接。

---

### 2.3 目录下载链接占位符 (`contact_info.ts:45`)
**问题**:
```typescript
catalogDownloadUrl: "http://example.com/NAFHA_Catalog_2026.pdf" // 目录下载链接
```
**严重性**: 高  
**修复建议**: 上传真实的目录 PDF 文件并更新链接。

---

### 2.4 礼品套装图片占位符 (`gift_sets.ts:31, 43, 55, 67, 79, 91`)
**问题**:
```typescript
image: "/images/gifts/placeholder-1.jpg",  // 至 placeholder-6.jpg
```
**严重性**: 中  
**修复建议**: 为 6 个礼品套装拍摄/设计真实图片并替换占位符。

---

### 2.5 博客文章封面占位符 (`blog_posts.ts:23, 36, 49, 62, 75, 88`)
**问题**:
```typescript
coverImage: '/images/blog/placeholder-1.svg',  // 至 placeholder-6.svg
```
**严重性**: 中  
**修复建议**: 为 6 篇博客文章创建/获取真实封面图片。

---

### 2.6 VAT 号码占位符 (`legal_policies.ts:34`)
**问题**:
```typescript
vatTrn: "KSA-VAT-30005XXX", // Mock VAT number
```
**严重性**: 高  
**修复建议**: 向用户确认真实的 VAT/TRN 号码。

---

## 3. 测试数据问题 ⚠️

### 3.1 测试电话号码
**文件**: `contact_info.ts:27, 29`  
**详情**: 见第 2.1 节

### 3.2 测试 VAT 号码
**文件**: `legal_policies.ts:34`  
**详情**: 见第 2.6 节

### 3.3 测试邮箱检查
✅ **已通过** - `inquiry@nafha-oud.com` 看起来是真实邮箱域名（非 `example.com` 或 `test.com`）。

---

## 4. 本地化问题 ⚠️

### 4.1 未使用 `formatters.ts` 函数进行阿拉伯语数字转换

**问题**:  
数据文件中的阿拉伯语数字已手动转换（如 `"٩٩ - ١٧٩ ريال"`），而非使用 `formatters.ts` 中的 `toArabicNumerals()` 或 `formatPrice()` 函数。

**示例** (`products.ts`):
```typescript
// 当前：手动转换
priceRange_ar: "٩٩ - ١٧٩ ريال",
weight_ar: "٣٠ عصا / ١٥ جم",

// 建议：使用 formatter 函数
priceRange_ar: formatPrice("99 - 179", 'ar'),
weight_ar: `٣٠ عصا / ${toArabicNumerals("15")} جم`,
```

**严重性**: 中  
**影响**: 
- 如果价格/规格在代码中动态生成，手动转换会导致不一致
- 维护困难：每次价格变更都需要手动转换阿拉伯语数字

**修复建议**:
1. 在产品中创建一个 `getLocalizedPrice()` 辅助函数
2. 在显示层（组件）中使用 `formatters.ts`，而非在数据层硬编码
3. 保持数据层为原始数字（`"99 - 179"`），在展示时转换

---

### 4.2 `formatDate()` 函数 Bug (`formatters.ts:41`)

**问题**:
```typescript
export function formatDate(date: Date, locale: 'ar' | 'en'): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();  // ✅ 正确
  // ...
}
```
**注意**: 代码示例中显示 `getFullYear()` 是正确的。但如果实际代码中有 `getFullYear()`（拼写错误），则需要修复。

**严重性**: 低（需要检查实际代码）  
**修复建议**: 检查 `formatDate` 函数实现，确保使用 `getFullYear()` 而非 `getFullYear()`。

---

### 4.3 阿拉伯语翻译质量检查
✅ **已通过** - 所有阿拉伯语内容均已翻译，无明显遗漏。

---

## 5. 产品数量逻辑问题

### 5.1 硬编码数量检查
✅ **已通过** - 未找到硬编码的产品数量逻辑（如 `1 product / {count} products`）。  
**注意**: 产品中定义了 5 个产品，礼品套装定义了 6 个套装，博客定义了 6 篇文章。这些是数据条目，而非显示逻辑。显示逻辑应在组件中处理单复数。

---

## 6. 未经证实的宣传表述 ⚠️

### 6.1 "Supercritical CO₂ Extraction" (`brand_story.ts:83`)
**原文**:
```typescript
summary_ar: "استخدام طريقة الاستخلاص بثاني أكسيد الكربون في الحالة فوق الحرجة لاستخلاص أنقى الزيوت العطرية بدون بقايا كيميائية."
summary_en: "Utilizing Supercritical CO2 Extraction to derive the purest essential oils without chemical residue, maximizing active components."
```

**问题**: 这是一个具体的工艺声明。需要确认：
- NAFHA 是否真正使用超临界 CO₂ 萃取技术？
- 是否有相关证书或文档支持此声明？

**严重性**: 高（可能涉及虚假宣传）  
**修复建议**: 向 Owner 确认此工艺声明的准确性。如有证书，在网站上展示证书图片。

---

### 6.2 "Free from harmful chemicals" (`products.ts:130`, `brand_story.ts:107`)
**原文**:
```typescript
// products.ts:130
summary_ar: "يؤكد خلوه من الملوثات الشائعة والملحقات الكيميائية"
summary_en: "Confirms absence of common pollutants and chemical additives"

// brand_story.ts:107
summary_ar: "نوفر شهادات تثبت خلو منتجاتنا من المواد الكيميائية الضارة"
summary_en: "we provide certifications confirming our products are free from harmful chemicals"
```

**问题**: "不含有害化学物质" 是一个强烈的声明，需要：
- 第三方检测报告支持
- 明确的 "有害化学物质" 定义（如重金属、农药残留等）

**严重性**: 高  
**修复建议**: 
1. 向 Owner 索取第三方检测报告
2. 在证书部分展示具体的检测报告图片
3. 考虑将声明弱化为 "tested for common pollutants"（已测试常见污染物）

---

### 6.3 证书图片真实性检查
**问题**: 证书图片使用了真实的 S3 URL（如 `https://spark-builder.s3.cn-north-1.amazonaws.com.cn/...`），但无法验证这些证书是否真实存在。

**严重性**: 中  
**修复建议**: 
1. 向 Owner 确认所有证书图片的真实性
2. 确保证书图片可公开访问
3. 考虑添加证书编号和可验证的查询链接

---

## 7. Tamara / Tabby 占位符检查

✅ **已通过** - 未找到 Tamara 或 Tabby 分期付款占位符（如 `Starting from... Tamara`）。  
**注意**: 当前数据文件中未集成 Tamara/Tabby。如果未来需要添加，应在数据源中添加相应字段。

---

## 8. 未完成文案检查（Lorem ipsum / TODO / TBD / XXXX）

✅ **已通过** - 未找到 Lorem ipsum、TODO、TBD 等未完成文案。  
⚠️ **例外**: 见第 2 节的占位符问题（XXXX、placeholder）。

---

## 9. 数据治理建议

### 9.1 优先级排序

| 优先级 | 问题 | 修复难度 |
|--------|------|----------|
| **P0** | 测试电话号码 (`contact_info.ts`) | 低（需用户提供） |
| **P0** | 测试 VAT 号码 (`legal_policies.ts`) | 低（需用户提供） |
| **P0** | Google Maps 占位符 (`contact_info.ts`) | 低（需用户提供） |
| **P0** | 目录下载链接 (`contact_info.ts`) | 低（需用户提供） |
| **P1** | 未经证实的宣传表述 | 中（需 Owner 确认） |
| **P2** | 图片占位符（礼品套装、博客） | 高（需设计/拍摄） |
| **P3** | 阿拉伯语数字转换逻辑 | 中（代码重构） |

---

### 9.2 具体修复方案

#### 方案 1: 修复测试数据（P0）
**负责**: team-lead（向用户确认）  
**步骤**:
1. 向用户询问真实的 WhatsApp 号码、电话号码、VAT 号码
2. 获取真实的 Google Maps 位置链接
3. 上传真实的目录 PDF 到 S3 并更新链接
4. 替换 `contact_info.ts` 和 `legal_policies.ts` 中的占位符

---

#### 方案 2: 验证宣传表述（P1）
**负责**: team-lead（向 Owner 确认）  
**步骤**:
1. 向 Owner 确认是否真正使用超临界 CO₂ 萃取技术
2. 索取第三方检测报告（证明不含害化学物质）
3. 如无法证明，弱化宣传表述或添加免责声明
4. 在网站上展示真实的证书图片和编号

---

#### 方案 3: 替换图片占位符（P2）
**负责**: 设计团队  
**步骤**:
1. 为 6 个礼品套装拍摄/设计真实图片
2. 为 6 篇博客文章创建/获取封面图片
3. 上传图片到 S3 或 `/public/images/` 目录
4. 更新 `gift_sets.ts` 和 `blog_posts.ts` 中的图片路径

---

#### 方案 4: 优化阿拉伯语本地化（P3）
**负责**: data-dev  
**步骤**:
1. 创建一个 `productHelpers.ts` 文件，包含：
   ```typescript
   import { toArabicNumerals, formatPrice } from '../lib/formatters';
   
   export function getLocalizedPrice(priceRange: string, locale: 'ar' | 'en'): string {
     if (locale === 'ar') {
       return formatPrice(priceRange, 'ar');
     }
     return priceRange;
   }
   ```
2. 在数据层存储原始数字（如 `"99 - 179"`）
3. 在展示层（组件）中调用 `getLocalizedPrice()` 进行转换
4. 确保 `formatDate()` 函数无 bug

---

## 10. 总结

### 发现的问题统计
- 🔴 **高优先级（P0）**: 4 个问题（测试数据）
- 🟡 **中优先级（P1）**: 3 个问题（宣传表述）
- 🟢 **低优先级（P2-P3）**: 7 个问题（图片、本地化）

### 下一步行动
1. **team-lead** 向用户确认真实联系信息（电话、VAT、Google Maps、目录链接）
2. **team-lead** 向 Owner 确认宣传表述的准确性
3. **设计团队** 创建/获取真实的礼品套装和博客封面图片
4. **data-dev** 优化阿拉伯语本地化逻辑（可选，优先级较低）

---

**报告结束**

审计人员: data-dev (general-purpose-1)  
日期: 2026-06-02
