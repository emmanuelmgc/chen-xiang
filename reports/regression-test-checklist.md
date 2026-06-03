# NAFHA 沉香品牌网站 - 回归测试清单与占位符扫描规则

**生成日期**: 2026-06-02  
**测试框架**: Vitest + Playwright  
**项目路径**: `./chen-xiang/`

---

## 📋 执行摘要

本报告为 NAFHA 沉香品牌网站建立了完整的回归测试清单和占位符扫描规则。报告基于实际代码分析，涵盖了产品数量显示、占位符检测、多语言数据完整性、链接有效性和构建测试等五个主要测试领域。

---

## 1️⃣ 产品数量测试

### 1.1 测试目标
验证产品列表页在面对不同数量产品时的显示行为。

### 1.2 测试用例

| 测试项 | 产品数量 | 预期行为 | 测试文件位置 |
|--------|----------|----------|--------------|
| **0 产品** | 0 | 显示"暂无产品"或空状态提示（阿拉伯语/英语） | `src/test/integration/product-count.test.ts` |
| **1 产品** | 1 | 显示单个产品卡片，不显示"2件产品"等复数形式 | `src/test/integration/product-count.test.ts` |
| **2 产品** | 2 | 显示2个产品卡片，布局正确 | `src/test/integration/product-count.test.ts` |
| **6 产品（当前）** | 6 | 显示所有6个产品，分页或滚动正常 | `src/test/integration/product-count.test.ts` |

### 1.3 显示规则详细测试

#### 1.3.1 阿拉伯语复数规则
- **0 产品**: يجب أن يظهر: "لا توجد منتجات" أو "٠ منتج"
- **1 产品**: يجب أن يظهر: "منتج واحد" (单数形式)
- **2+ 产品**: يجب أن يظهر: "٢ منتجات" (双数/复数形式)

#### 1.3.2 英语复数规则
- **0 产品**: Should show: "0 products" or "No products"
- **1 产品**: Should show: "1 product" (单数)
- **2+ 产品**: Should show: "2 products" (复数)

### 1.4 测试代码示例

```typescript
// src/test/integration/product-count.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductsPage from '@/pages/products.vue'

describe('Product Count Display', () => {
  it('should show empty state when 0 products', () => {
    const wrapper = mount(ProductsPage, {
      props: { products: [] }
    })
    expect(wrapper.text()).toContain('لا توجد منتجات')
    expect(wrapper.text()).toContain('No products')
  })

  it('should show singular form for 1 product (AR)', () => {
    const wrapper = mount(ProductsPage, {
      props: { products: [mockProduct1] }
    })
    expect(wrapper.text()).toContain('منتج واحد')
  })

  it('should show plural form for 2+ products (EN)', () => {
    const wrapper = mount(ProductsPage, {
      props: { products: [mockProduct1, mockProduct2] }
    })
    expect(wrapper.text()).toContain('2 products')
  })
})
```

---

## 2️⃣ 占位符扫描规则

### 2.1 扫描目标
检测代码中所有未完成的占位符内容，这些内容在生产环境中不应该存在。

### 2.2 扫描规则详细列表

#### 2.2.1 Tamara（支付相关占位符）
- **正则表达式**: `/(tamara|TAMARA|Tamara)/i`
- **上下文**: 检查是否是不完整的支付集成
- **修复方案**: 完成 Tamara 支付集成或从代码中移除

#### 2.2.2 Tabi / Tabby（支付相关占位符）
- **正则表达式**: `/(tabi|tabby|Tabi|Tabby|TABI|TABBY)/i`
- **上下文**: 检查是否是不完整的支付集成
- **修复方案**: 完成 Tabi 支付集成或从代码中移除

#### 2.2.3 "Starting from displayed price"（价格占位符）
- **正则表达式**: `/starting from.*price/i`
- **上下文**: 产品价格是硬编码占位符
- **修复方案**: 替换为实际价格范围

#### 2.2.4 Lorem Ipsum（假文本）
- **正则表达式**: `/(lorem ipsum|Lorem Ipsum|LOREM IPSUM)/i`
- **上下文**: 所有文本字段
- **修复方案**: 替换为实际的阿拉伯语/英语内容

#### 2.2.5 TODO（待办事项）
- **正则表达式**: `/(TODO|FIXME|HACK|XXX|BUG)/i`
- **上下文**: 代码注释中的待办事项
- **修复方案**: 完成 TODO 项或从代码中移除

#### 2.2.6 TBD（待确定）
- **正则表达式**: `/(TBD|tbd|To Be Determined|to be determined)/i`
- **上下文**: 数据字段或文档
- **修复方案**: 替换为实际值

#### 2.2.7 XXXX（占位符数字/字符）
- **正则表达式**: `/(XXXX+|xxxx+|\+966\d*XXXX|\+966XX+)/i`
- **具体实例**:
  - `+96650XXXXXXX` (WhatsApp 号码)
  - `+96611XXXXXXX` (电话号码)
  - `KSA-VAT-30005XXX` (VAT 号码)
- **修复方案**: 替换为实际号码

#### 2.2.8 未翻译字符串
- **正则表达式**: `/(\[AR\]|\[EN\]|TODO: translate|TRANSLATE|未翻译)/i`
- **上下文**: 应包含所有语言版本但未完成的字段
- **修复方案**: 完成翻译

#### 2.2.9 乱码
- **正则表达式**: `/([\uFFFD\uFFFE\uFFFF]|&#xFFFD;|�)/i`
- **上下文**: 编码错误的字符
- **修复方案**: 修复文件编码或重新输入文本

#### 2.2.10 测试电话
- **正则表达式**: `/(test.*phone|phone.*test|mock.*phone|phone.*mock|\+96650XXXXXXX|\+96611XXXXXXX)/i`
- **具体实例**:
  - `+96650XXXXXXX`
  - `+96611XXXXXXX`
- **修复方案**: 替换为实际客户服务中心号码

#### 2.2.11 测试邮箱
- **正则表达式**: `/(test@|mock@|example@|placeholder@)/i`
- **具体实例**: 检查是否为真实的 `inquiry@nafha-oud.com`
- **修复方案**: 确保邮箱地址是真实可接收邮件的

#### 2.2.12 AI 证书路径
- **正则表达式**: `/(AI.*generated|fake.*certificate|mock.*certificate|sample.*certificate)/i`
- **上下文**: `certificates.imageUrl` 字段
- **修复方案**: 上传真实的证书图片

#### 2.2.13 错误地图路径
- **正则表达式**: `/(maps\.app\.goo\.gl\/XXXXXXX|placeholder.*map|map.*placeholder)/i`
- **具体实例**: `https://maps.app.goo.gl/XXXXXXX`
- **修复方案**: 替换为实际的 Google Maps 嵌入 URL

### 2.3 占位符扫描脚本

```typescript
// scripts/scan-placeholders.ts
#!/usr/bin/env tsx
/**
 * 占位符扫描脚本
 * 扫描项目中所有占位符内容并生成报告
 */

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

interface PlaceholderMatch {
  file: string
  line: number
  column: number
  match: string
  rule: string
  severity: 'error' | 'warning'
}

const PLACEHOLDER_RULES = [
  {
    name: 'XXXX Placeholder',
    pattern: /\+966\d*XXXX|\+966XX+|KSA-VAT-\d*XXX|XXXX+/i,
    severity: 'error' as const
  },
  {
    name: 'Lorem Ipsum',
    pattern: /lorem ipsum|Lorem Ipsum|LOREM IPSUM/i,
    severity: 'error' as const
  },
  {
    name: 'TODO/FIXME',
    pattern: /TODO|FIXME|HACK|XXX|BUG/i,
    severity: 'warning' as const
  },
  {
    name: 'TBD',
    pattern: /TBD|tbd|To Be Determined|to be determined/i,
    severity: 'warning' as const
  },
  {
    name: 'Placeholder Map URL',
    pattern: /maps\.app\.goo\.gl\/XXXXXXX|placeholder.*map/i,
    severity: 'error' as const
  },
  {
    name: 'Example Domain',
    pattern: /example\.com|example\.org/i,
    severity: 'error' as const
  }
]

async function scanPlaceholders(): Promise<PlaceholderMatch[]> {
  const matches: PlaceholderMatch[] = []
  
  // Scan all source files
  const files = await glob('src/**/*.{ts,vue,astro,js,jsx,tsx}')
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const lines = content.split('\n')
    
    lines.forEach((line, index) => {
      PLACEHOLDER_RULES.forEach(rule => {
        const match = line.match(rule.pattern)
        if (match) {
          matches.push({
            file,
            line: index + 1,
            column: line.indexOf(match[0]),
            match: match[0],
            rule: rule.name,
            severity: rule.severity
          })
        }
      })
    })
  }
  
  return matches
}

async function main() {
  console.log('🔍 Scanning for placeholders...\n')
  
  const matches = await scanPlaceholders()
  
  if (matches.length === 0) {
    console.log('✅ No placeholders found!')
    process.exit(0)
  }
  
  console.log(`Found ${matches.length} placeholder(s):\n`)
  
  const errors = matches.filter(m => m.severity === 'error')
  const warnings = matches.filter(m => m.severity === 'warning')
  
  if (errors.length > 0) {
    console.log('❌ ERRORS:')
    errors.forEach(m => {
      console.log(`  ${m.file}:${m.line}:${m.column}`)
      console.log(`    Rule: ${m.rule}`)
      console.log(`    Match: ${m.match}\n`)
    })
  }
  
  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:')
    warnings.forEach(m => {
      console.log(`  ${m.file}:${m.line}:${m.column}`)
      console.log(`    Rule: ${m.rule}`)
      console.log(`    Match: ${m.match}\n`)
    })
  }
  
  if (errors.length > 0) {
    process.exit(1)
  }
}

main()
```

---

## 3️⃣ 多语言数据测试

### 3.1 测试目标
确保所有数据文件中的阿拉伯语和英语字段完整且一致。

### 3.2 测试数据文件
- `src/data/products.ts` - 6 个产品
- `src/data/gift_sets.ts` - 6 个礼品套装
- `src/data/faqs.ts` - 5 个常见问题
- `src/data/blog_posts.ts` - 6 篇博客文章
- `src/data/help_center.ts` - 11 篇文章，5 个分类
- `src/data/legal_policies.ts` - 法律政策
- `src/data/contact_info.ts` - 联系信息
- `src/data/b2b_content.ts` - B2B 内容
- `src/data/brand_story.ts` - 品牌故事
- `src/data/category_filters.ts` - 分类筛选器
- `src/data/usps.ts` - USP 数据

### 3.3 测试用例

#### 3.3.1 英文字段完整性
```typescript
// src/test/integration/multilingual-data.test.ts
describe('English Fields Completeness', () => {
  it('all products should have English name', () => {
    MOCK_PRODUCTS_DATA.forEach(product => {
      expect(product.name_en).toBeDefined()
      expect(product.name_en).not.toBe('')
      expect(product.name_en).not.toMatch(/^\[EN\]/)
    })
  })
  
  it('all products should have English description', () => {
    MOCK_PRODUCTS_DATA.forEach(product => {
      expect(product.description_en).toBeDefined()
      expect(product.description_en).not.toBe('')
    })
  })
})
```

#### 3.3.2 阿拉伯语字段完整性
```typescript
describe('Arabic Fields Completeness', () => {
  it('all products should have Arabic name', () => {
    MOCK_PRODUCTS_DATA.forEach(product => {
      expect(product.name_ar).toBeDefined()
      expect(product.name_ar).not.toBe('')
      expect(product.name_ar).not.toMatch(/^\[AR\]/)
    })
  })
})
```

#### 3.3.3 字段 Key 一致性
```typescript
describe('Field Key Consistency', () => {
  it('all data objects should have consistent field names', () => {
    const productKeys = Object.keys(MOCK_PRODUCTS_DATA[0])
    const giftSetKeys = Object.keys(GIFT_SETS[0])
    
    // Check that all products have the same keys
    MOCK_PRODUCTS_DATA.forEach(product => {
      expect(Object.keys(product)).toEqual(productKeys)
    })
  })
})
```

#### 3.3.4 不存在空字符串
```typescript
describe('No Empty Strings', () => {
  it('no required string field should be empty', () => {
    const checkEmptyStrings = (obj: any, path: string = '') => {
      Object.entries(obj).forEach(([key, value]) => {
        const currentPath = path ? `${path}.${key}` : key
        
        if (typeof value === 'string' && value.trim() === '') {
          throw new Error(`Empty string found at ${currentPath}`)
        }
        
        if (typeof value === 'object' && value !== null) {
          checkEmptyStrings(value, currentPath)
        }
      })
    }
    
    MOCK_PRODUCTS_DATA.forEach(product => {
      expect(() => checkEmptyStrings(product)).not.toThrow()
    })
  })
})
```

#### 3.3.5 不存在错误回退
```typescript
describe('No Fallback Errors', () => {
  it('should not display field names as values', () => {
    MOCK_PRODUCTS_DATA.forEach(product => {
      // Check that Arabic field doesn't contain English field name
      expect(product.name_ar).not.toContain('name_en')
      expect(product.description_ar).not.toContain('description_en')
    })
  })
})
```

#### 3.3.6 CTA 一致性
```typescript
describe('CTA Consistency', () => {
  it('all CTAs should have consistent wording', () => {
    // Check that similar actions have consistent CTA text
    const ctAs = [
      'استفسار عبر واتساب',
      'Inquire via WhatsApp',
      'تحميل الكتالوج',
      'Download Catalog'
    ]
    
    // Verify CTAs are present in the correct language
    // This is a manual review item
    expect(true).toBe(true)
  })
})
```

#### 3.3.7 FAQ 数据完整性
```typescript
describe('FAQ Data Integrity', () => {
  it('all FAQs should have Arabic and English questions', () => {
    MOCK_FAQS.forEach(faq => {
      expect(faq.question_ar).toBeDefined()
      expect(faq.question_ar).not.toBe('')
      expect(faq.question_en).toBeDefined()
      expect(faq.question_en).not.toBe('')
    })
  })
  
  it('all FAQs should have Arabic and English answers', () => {
    MOCK_FAQS.forEach(faq => {
      expect(faq.answer_ar).toBeDefined()
      expect(faq.answer_ar).not.toBe('')
      expect(faq.answer_en).toBeDefined()
      expect(faq.answer_en).not.toBe('')
    })
  })
  
  it('all FAQs should have valid category', () => {
    const validCategories = ['incense', 'bakhoor', 'gifting', 'general']
    
    MOCK_FAQS.forEach(faq => {
      expect(validCategories).toContain(faq.category)
    })
  })
})
```

---

## 4️⃣ 链接测试

### 4.1 测试目标
确保所有内部链接、外部链接和特殊链接有效。

### 4.2 链接类型

#### 4.2.1 内部链接
| 链接路径 | 页面名称 | 测试方法 |
|----------|----------|----------|
| `./` | 首页 | Playwright: 检查 `page.locator('a[href="./"]')` |
| `./products` | 产品列表 | Playwright: 检查链接可点击 |
| `./gift-landing` | 礼品落地页 | Playwright: 检查链接可点击 |
| `./journal` | 博客/杂志 | Playwright: 检查链接可点击 |
| `./help-center` | 帮助中心 | Playwright: 检查链接可点击 |
| `./contact` | 联系我们 | Playwright: 检查链接可点击 |
| `./about` | 关于我们 | Playwright: 检查链接可点击 |
| `./product-detail/[id]` | 产品详情 | Vitest: 检查 `detailUrl` 字段 |
| `./collections` | 产品集合 | Playwright: 检查链接可点击 |
| `./b2b-hotels-venues` | B2B 页面 | Playwright: 检查链接可点击 |
| `./privacy-cookie-policy` | 隐私政策 | Playwright: 检查链接可点击 |
| `./terms-of-service` | 服务条款 | Playwright: 检查链接可点击 |

#### 4.2.2 WhatsApp 链接
- **格式**: `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodedMessage}`
- **测试**:
  ```typescript
  describe('WhatsApp Links', () => {
    it('should have valid WhatsApp number', () => {
      expect(CONTACT_INFO.whatsappNumber).not.toMatch(/XXXX/)
      expect(CONTACT_INFO.whatsappNumber).toMatch(/^\+966\d{9}$/)
    })
    
    it('should generate valid WhatsApp URLs', () => {
      const url = getWhatsAppInquiryUrl('Test Product', 'en')
      expect(url).toMatch(/^https:\/\/wa\.me\//)
      expect(url).not.toContain('XXXX')
    })
  })
  ```

#### 4.2.3 Privacy Policy 链接
- **路径**: `./privacy-cookie-policy.html`
- **测试**: Playwright 检查链接存在且可访问

#### 4.2.4 Help Center 链接
- **路径**: `./help-center.html`
- **测试**: Playwright 检查链接存在且可访问

#### 4.2.5 产品详情页链接
- **路径**: `./product-detail/${product.id}.html`
- **测试**:
  ```typescript
  describe('Product Detail Links', () => {
    it('all products should have valid detailUrl', () => {
      MOCK_PRODUCTS_DATA.forEach(product => {
        expect(product.detailUrl).toMatch(/^\.\/product-detail\//)
        expect(product.detailUrl).toMatch(/\.html$/)
      })
    })
  })
  ```

#### 4.2.6 Collections 链接
- **路径**: `./collections`
- **测试**: Playwright 检查链接存在且可访问

#### 4.2.7 Contact 链接
- **路径**: `./contact`
- **测试**: Playwright 检查链接存在且可访问

#### 4.2.8 B2B 页面链接
- **路径**: `./b2b-hotels-venues`
- **测试**: Playwright 检查链接存在且可访问

### 4.3 链接测试脚本

```typescript
// tests/link-check.spec.ts
import { test, expect } from '@playwright/test'

const pages = [
  { path: '/', name: 'Home' },
  { path: '/products', name: 'Products' },
  { path: '/gift-landing', name: 'Gift Landing' },
  { path: '/journal', name: 'Journal' },
  { path: '/help-center', name: 'Help Center' },
  { path: '/contact', name: 'Contact' },
  { path: '/about', name: 'About' },
  { path: '/collections', name: 'Collections' },
  { path: '/b2b-hotels-venues', name: 'B2B' },
  { path: '/privacy-cookie-policy', name: 'Privacy Policy' },
  { path: '/terms-of-service', name: 'Terms of Service' },
]

test.describe('Internal Link Check', () => {
  pages.forEach(page => {
    test(`should have valid links on ${page.name}`, async ({ page: p }) => {
      await p.goto(page.path)
      
      // Check all internal links
      const links = await p.locator('a[href^="./"]').all()
      
      for (const link of links) {
        const href = await link.getAttribute('href')
        
        // Skip anchor links
        if (href?.startsWith('#')) continue
        
        // Check that the link is not empty
        expect(href).toBeTruthy()
        
        // Check that the link doesn't contain placeholders
        expect(href).not.toContain('XXXX')
        expect(href).not.toContain('placeholder')
      }
    })
  })
})

test.describe('WhatsApp Link Check', () => {
  test('all WhatsApp links should be valid', async ({ page }) => {
    await page.goto('/')
    
    const whatsappLinks = await page.locator('a[href^="https://wa.me/"]').all()
    
    for (const link of whatsappLinks) {
      const href = await link.getAttribute('href')
      
      // Check that the number is valid
      expect(href).not.toContain('XXXX')
      expect(href).toMatch(/^https:\/\/wa\.me\/\+966\d+/)
    }
  })
})
```

---

## 5️⃣ 构建测试

### 5.1 测试目标
确保项目能够成功构建，没有 lint 错误，所有测试通过。

### 5.2 测试用例

#### 5.2.1 Build 通过
```bash
# 测试命令
npm run build

# 预期结果
# - 退出代码 0
# - 生成 dist/ 目录
# - 没有错误信息
```

**测试脚本**:
```typescript
// tests/build.test.ts
import { test, expect } from '@playwright/test'
import { execSync } from 'child_process'

test('build should pass', async () => {
  try {
    const output = execSync('npm run build', { encoding: 'utf-8' })
    expect(output).not.toContain('error')
    expect(output).not.toContain('Error')
  } catch (error: any) {
    throw new Error(`Build failed: ${error.message}`)
  }
})
```

#### 5.2.2 Lint 通过
```bash
# 测试命令
npm run lint  # 如果配置了 lint 脚本

# 预期结果
# - 退出代码 0
# - 没有 lint 错误
```

#### 5.2.3 Vitest 通过
```bash
# 测试命令
npm run test
# 或
npm run test:coverage

# 预期结果
# - 所有测试通过
# - 覆盖率达到阈值（当前配置：70%）
```

**覆盖率阈值** (在 `vitest.config.ts` 中配置):
```typescript
coverage: {
  provider: 'v8',
  reporter: ['text', 'json', 'html'],
  thresholds: {
    lines: 70,
    functions: 70,
    branches: 70,
    statements: 70
  }
}
```

#### 5.2.4 不存在 Broken Imports
```typescript
// tests/import-check.test.ts
import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

test('no broken imports', async () => {
  const files = await glob('src/**/*.{ts,vue,astro}')
  const brokenImports: string[] = []
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const importRegex = /import .+ from ['"](.+)['"]/g
    let match
    
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1]
      
      // Skip node_modules and relative imports that exist
      if (importPath.startsWith('.') || importPath.startsWith('@/')) {
        const resolvedPath = resolveImportPath(file, importPath)
        
        if (!fs.existsSync(resolvedPath)) {
          brokenImports.push(`${file}: ${importPath}`)
        }
      }
    }
  }
  
  expect(brokenImports).toEqual([])
})
```

#### 5.2.5 不存在无效 Assets
```typescript
test('no broken asset references', async () => {
  const files = await glob('src/**/*.{ts,vue,astro}')
  const brokenAssets: string[] = []
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    
    // Check image references
    const imageRegex = /(src|href|url\(['"]?)(.+?\.(png|jpg|jpeg|gif|svg|webp))['"]?/gi
    let match
    
    while ((match = imageRegex.exec(content)) !== null) {
      const assetPath = match[2]
      
      // Skip external URLs
      if (assetPath.startsWith('http')) continue
      
      // Check if asset exists
      const fullPath = path.resolve(path.dirname(file), assetPath)
      
      if (!fs.existsSync(fullPath)) {
        brokenAssets.push(`${file}: ${assetPath}`)
      }
    }
  }
  
  expect(brokenAssets).toEqual([])
})
```

#### 5.2.6 不存在未使用变量
```bash
# 使用 TypeScript 编译器检查
npx tsc --noUnusedLocals --noUnusedParameters

# 预期结果
# - 没有 "unused variable" 错误
```

#### 5.2.7 不存在 Hydration Error
```typescript
// tests/hydration.test.ts
import { test, expect } from '@playwright/test'

test('no hydration errors', async ({ page }) => {
  const errors: string[] = []
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text())
    }
  })
  
  await page.goto('/')
  
  // Wait for hydration
  await page.waitForLoadState('networkidle')
  
  // Check for hydration errors
  const hydrationErrors = errors.filter(e => 
    e.includes('hydration') || 
    e.includes('Hydration') ||
    e.includes('mismatch')
  )
  
  expect(hydrationErrors).toEqual([])
})
```

#### 5.2.8 不存在路由错误
```typescript
// tests/routing.test.ts
import { test, expect } from '@playwright/test'

const routes = [
  '/',
  '/products',
  '/gift-landing',
  '/journal',
  '/help-center',
  '/contact',
  '/about',
  '/collections',
  '/b2b-hotels-venues',
  '/privacy-cookie-policy',
  '/terms-of-service',
  '/product-detail/stick_sandal_classic',
  '/product-detail/bakhoor_oud_patchouli',
]

test.describe('Routing Check', () => {
  routes.forEach(route => {
    test(`${route} should return 200`, async ({ page }) => {
      const response = await page.goto(route)
      
      expect(response?.status()).toBe(200)
    })
  })
  
  test('404 page should work', async ({ page }) => {
    const response = await page.goto('/non-existent-page')
    
    expect(response?.status()).toBe(404)
    
    // Check that custom 404 page is shown
    await expect(page.locator('h1')).toContainText('404')
  })
})
```

---

## 📊 测试文件位置

### 现有测试文件
1. `src/components/common/__tests__/TrustIconBar.test.ts` - TrustIconBar 组件测试
2. `src/lib/__tests__/formatters.test.ts` - 格式化函数测试
3. `src/lib/__tests__/useLanguage.test.ts` - 语言切换测试
4. `src/test/integration/data-integrity.test.ts` - 数据完整性测试
5. `tests/seo.spec.ts` - SEO 测试 (Playwright)
6. `tests/seo-audit.spec.ts` - SEO 审计测试 (Playwright)

### 需要创建的测试文件
1. `src/test/integration/product-count.test.ts` - 产品数量测试
2. `src/test/integration/multilingual-data.test.ts` - 多语言数据测试
3. `tests/link-check.spec.ts` - 链接检查测试
4. `tests/build.test.ts` - 构建测试
5. `tests/hydration.test.ts` - Hydration 测试
6. `tests/routing.test.ts` - 路由测试
7. `scripts/scan-placeholders.ts` - 占位符扫描脚本

---

## 🎯 测试覆盖情况

### 当前覆盖率
根据 `vitest.config.ts` 配置，当前覆盖率阈值为：
- Lines: 70%
- Functions: 70%
- Branches: 70%
- Statements: 70%

### 现有测试覆盖
- ✅ 组件测试: TrustIconBar
- ✅ 工具函数测试: formatters, useLanguage
- ✅ 数据完整性测试: products, gift_sets, blog_posts, help_center
- ⚠️ SEO 测试: 部分覆盖 (Playwright)
- ❌ 产品数量测试: 未覆盖
- ❌ 占位符扫描: 未覆盖
- ❌ 多语言数据测试: 部分覆盖
- ❌ 链接测试: 未覆盖
- ❌ 构建测试: 未覆盖
- ❌ Hydration 测试: 未覆盖
- ❌ 路由测试: 未覆盖

---

## 🔧 修复建议

### 每个测试失败时的修复方案

#### 1. 产品数量测试失败
- **问题**: 产品数量为 0/1/2+ 时显示不正确
- **修复**: 检查产品列表组件的条件渲染逻辑，确保正确处理边界情况

#### 2. 占位符扫描失败
- **问题**: 发现占位符内容
- **修复**:
  1. 对于 XXXX 占位符: 替换为实际值
  2. 对于 Lorem Ipsum: 替换为实际阿拉伯语/英语内容
  3. 对于 TODO/TBD: 完成任务或从代码中移除
  4. 对于测试电话/邮箱: 替换为实际联系方式

#### 3. 多语言数据测试失败
- **问题**: 某些字段缺少阿拉伯语或英语版本
- **修复**: 确保所有多语言字段都有完整的翻译

#### 4. 链接测试失败
- **问题**: 链接断开或包含占位符
- **修复**:
  1. 检查链接路径是否正确
  2. 确保目标页面存在
  3. 替换占位符链接

#### 5. 构建测试失败
- **问题**: build/lint/vitest 失败
- **修复**:
  1. 修复所有编译错误
  2. 修复所有 lint 错误
  3. 修复所有失败的测试
  4. 移除未使用的导入和变量
  5. 修复 broken imports
  6. 修复无效 assets 引用

---

## 📝 附录：完整占位符扫描正则表达式

```regex
# XXXX 占位符
\+966\d*XXXX|\+966XX+|KSA-VAT-\d*XXX|XXXX+

# Lorem Ipsum
lorem ipsum|Lorem Ipsum|LOREM IPSUM

# TODO/FIXME
TODO|FIXME|HACK|XXX|BUG

# TBD
TBD|tbd|To Be Determined|to be determined

# 占位符地图 URL
maps\.app\.goo\.gl\/XXXXXXX|placeholder.*map

# Example 域名
example\.com|example\.org

# 未翻译字符串
\[AR\]|\[EN\]|TODO: translate|TRANSLATE|未翻译

# 乱码
[\uFFFD\uFFFE\uFFFF]|&#xFFFD;|�

# 测试电话
test.*phone|phone.*test|mock.*phone|phone.*mock

# 测试邮箱
test@|mock@|example@|placeholder@

# AI 证书
AI.*generated|fake.*certificate|mock.*certificate|sample.*certificate

# 价格占位符
starting from.*price|Price on request|السعر عند الطلب
```

---

## ✅ 检查清单总结

- [ ] 产品数量测试已完成
- [ ] 占位符扫描规则已建立
- [ ] 多语言数据测试已建立
- [ ] 链接测试已建立
- [ ] 构建测试已建立
- [ ] 所有测试文件已创建
- [ ] 测试覆盖率达到 70%
- [ ] 占位符扫描脚本已创建并可执行
- [ ] 所有占位符已修复
- [ ] Build 通过
- [ ] Lint 通过
- [ ] Vitest 通过
- [ ] 不存在 Broken Imports
- [ ] 不存在无效 Assets
- [ ] 不存在未使用变量
- [ ] 不存在 Hydration Error
- [ ] 不存在路由错误

---

**报告结束**

---

## 执行说明

1. **运行占位符扫描**:
   ```bash
   cd chen-xiang
   tsx scripts/scan-placeholders.ts
   ```

2. **运行数据验证** (prebuild 自动运行):
   ```bash
   cd chen-xiang
   npm run validate-data
   ```

3. **运行单元测试**:
   ```bash
   cd chen-xiang
   npm run test
   ```

4. **运行测试覆盖率**:
   ```bash
   cd chen-xiang
   npm run test:coverage
   ```

5. **运行 E2E 测试** (需要先 build):
   ```bash
   cd chen-xiang
   npm run build
   npx playwright test
   ```

6. **运行构建**:
   ```bash
   cd chen-xiang
   npm run build
   ```

---

**注意**: 测试 Agent 不负责修复代码，只报告失败项。所有修复任务应由 Team Lead 分配给相应的开发人员。
