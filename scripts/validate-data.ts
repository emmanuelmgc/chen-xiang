#!/usr/bin/env tsx
/**
 * Data Integrity Validation Script
 * Validates all data files for required fields and data integrity
 */

import { MOCK_PRODUCTS_DATA } from '../src/data/products'
import { GIFT_SETS } from '../src/data/gift_sets'
import { BLOG_POSTS } from '../src/data/blog_posts'
import { HELP_ARTICLES, HELP_CATEGORIES } from '../src/data/help_center'

let hasErrors = false

function logError(message: string): void {
  console.error(`❌ ERROR: ${message}`)
  hasErrors = true
}

function logWarning(message: string): void {
  console.warn(`⚠️  WARNING: ${message}`)
}

function logSuccess(message: string): void {
  console.log(`✅ ${message}`)
}

// Validate Products
console.log('\n📦 Validating Products...')
MOCK_PRODUCTS_DATA.forEach((product, index) => {
  const prefix = `Product[${index}] (${product.id || 'UNKNOWN'})`
  
  if (!product.id) logError(`${prefix}: Missing required field 'id'`)
  if (!product.name_ar) logError(`${prefix}: Missing required field 'name_ar'`)
  if (!product.name_en) logError(`${prefix}: Missing required field 'name_en'`)
  if (!product.imageUrl) logError(`${prefix}: Missing required field 'imageUrl'`)
  if (!product.priceRange_ar) logError(`${prefix}: Missing required field 'priceRange_ar'`)
  if (!product.priceRange_en) logError(`${prefix}: Missing required field 'priceRange_en'`)
  if (!product.specs) logError(`${prefix}: Missing required field 'specs'`)
})

// Check for duplicate product IDs
const productIds = MOCK_PRODUCTS_DATA.map(p => p.id)
const duplicateProductIds = productIds.filter((id, index) => productIds.indexOf(id) !== index)
if (duplicateProductIds.length > 0) {
  logError(`Duplicate product IDs found: ${duplicateProductIds.join(', ')}`)
}

if (!hasErrors) {
  logSuccess(`All ${MOCK_PRODUCTS_DATA.length} products validated successfully`)
}

// Validate Gift Sets
console.log('\n🎁 Validating Gift Sets...')
hasErrors = false

GIFT_SETS.forEach((giftSet, index) => {
  const prefix = `GiftSet[${index}] (${giftSet.id || 'UNKNOWN'})`
  
  if (!giftSet.id) logError(`${prefix}: Missing required field 'id'`)
  if (!giftSet.name_ar) logError(`${prefix}: Missing required field 'name_ar'`)
  if (!giftSet.name_en) logError(`${prefix}: Missing required field 'name_en'`)
  if (!giftSet.priceRange_ar) logError(`${prefix}: Missing required field 'priceRange_ar'`)
  if (!giftSet.priceRange_en) logError(`${prefix}: Missing required field 'priceRange_en'`)
  if (!giftSet.image) logError(`${prefix}: Missing required field 'image'`)
})

// Check for duplicate gift set IDs
const giftSetIds = GIFT_SETS.map(g => g.id)
const duplicateGiftSetIds = giftSetIds.filter((id, index) => giftSetIds.indexOf(id) !== index)
if (duplicateGiftSetIds.length > 0) {
  logError(`Duplicate gift set IDs found: ${duplicateGiftSetIds.join(', ')}`)
}

if (!hasErrors) {
  logSuccess(`All ${GIFT_SETS.length} gift sets validated successfully`)
}

// Validate Blog Posts
console.log('\n📝 Validating Blog Posts...')
hasErrors = false

BLOG_POSTS.forEach((post, index) => {
  const prefix = `BlogPost[${index}] (${post.id || 'UNKNOWN'})`
  
  if (!post.id) logError(`${prefix}: Missing required field 'id'`)
  if (!post.title_ar) logError(`${prefix}: Missing required field 'title_ar'`)
  if (!post.title_en) logError(`${prefix}: Missing required field 'title_en'`)
  if (!post.excerpt_ar) logError(`${prefix}: Missing required field 'excerpt_ar'`)
  if (!post.excerpt_en) logError(`${prefix}: Missing required field 'excerpt_en'`)
  if (!post.coverImage) logError(`${prefix}: Missing required field 'coverImage'`)
  if (!post.date) logError(`${prefix}: Missing required field 'date'`)
  
  // Validate date format
  if (post.date && !/^\d{4}-\d{2}-\d{2}$/.test(post.date)) {
    logError(`${prefix}: Invalid date format '${post.date}', expected YYYY-MM-DD`)
  }
})

// Check for duplicate blog post IDs
const blogPostIds = BLOG_POSTS.map(p => p.id)
const duplicateBlogPostIds = blogPostIds.filter((id, index) => blogPostIds.indexOf(id) !== index)
if (duplicateBlogPostIds.length > 0) {
  logError(`Duplicate blog post IDs found: ${duplicateBlogPostIds.join(', ')}`)
}

if (!hasErrors) {
  logSuccess(`All ${BLOG_POSTS.length} blog posts validated successfully`)
}

// Validate Help Center Articles
console.log('\n🆘 Validating Help Center Articles...')
hasErrors = false

const validCategoryIds = new Set(HELP_CATEGORIES.map(c => c.id))

HELP_ARTICLES.forEach((article, index) => {
  const prefix = `HelpArticle[${index}] (${article.id || 'UNKNOWN'})`
    
  if (!article.id) logError(`${prefix}: Missing required field 'id'`)
  if (!article.title_ar) logError(`${prefix}: Missing required field 'title_ar'`)
  if (!article.title_en) logError(`${prefix}: Missing required field 'title_en'`)
  if (!article.summary_ar) logError(`${prefix}: Missing required field 'summary_ar'`)
  if (!article.summary_en) logError(`${prefix}: Missing required field 'summary_en'`)
  if (!article.content_ar) logError(`${prefix}: Missing required field 'content_ar'`)
  if (!article.content_en) logError(`${prefix}: Missing required field 'content_en'}`)
  if (!article.url) logError(`${prefix}: Missing required field 'url'}`)
  
  // Validate category references
  if (article.categoryIds) {
    article.categoryIds.forEach((catId) => {
      if (!validCategoryIds.has(catId)) {
        logError(`${prefix}: Invalid category reference '${catId}'`)
      }
    })
  }
})

// Check for duplicate article IDs
const articleIds = HELP_ARTICLES.map(a => a.id)
const duplicateArticleIds = articleIds.filter((id, index) => articleIds.indexOf(id) !== index)
if (duplicateArticleIds.length > 0) {
  logError(`Duplicate article IDs found: ${duplicateArticleIds.join(', ')}`)
}

if (!hasErrors) {
  logSuccess(`All ${HELP_ARTICLES.length} help articles validated successfully`)
}

// Validate Help Center Categories
console.log('\n📂 Validating Help Center Categories...')
hasErrors = false

const validArticleIds = new Set(HELP_ARTICLES.map(a => a.id))

HELP_CATEGORIES.forEach((category, index) => {
  const prefix = `HelpCategory[${index}] (${category.id || 'UNKNOWN'})`
    
  if (!category.id) logError(`${prefix}: Missing required field 'id'`)
  if (!category.title_ar) logError(`${prefix}: Missing required field 'title_ar'}`)
  if (!category.title_en) logError(`${prefix}: Missing required field 'title_en'}`)
  if (!category.iconName) logError(`${prefix}: Missing required field 'iconName'}`)
    
  // Validate article references
  if (category.articleIds) {
    category.articleIds.forEach((articleId) => {
      if (!validArticleIds.has(articleId)) {
        logError(`${prefix}: Invalid article reference '${articleId}'`)
      }
    })
  }
})

if (!hasErrors) {
  logSuccess(`All ${HELP_CATEGORIES.length} help categories validated successfully`)
}

// Final summary
console.log('\n' + '='.repeat(50))
if (hasErrors) {
  console.error('\n❌ Data validation FAILED!')
  process.exit(1)
} else {
  console.log('\n✅ All data validation checks PASSED!')
  process.exit(0)
}
