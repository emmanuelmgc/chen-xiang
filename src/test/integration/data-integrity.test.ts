import { describe, it, expect } from 'vitest'
import { MOCK_PRODUCTS_DATA, PRODUCTS_LIST } from '../../data/products'
import { GIFT_SETS } from '../../data/gift_sets'
import { BLOG_POSTS } from '../../data/blog_posts'
import { HELP_CATEGORIES, HELP_ARTICLES } from '../../data/help_center'

describe('Data Integrity Tests', () => {
  describe('Products Data', () => {
    it('should have all required fields for each product', () => {
      MOCK_PRODUCTS_DATA.forEach((product) => {
        expect(product.id).toBeDefined()
        expect(product.id).not.toBe('')
        expect(product.name_ar).toBeDefined()
        expect(product.name_ar).not.toBe('')
        expect(product.name_en).toBeDefined()
        expect(product.name_en).not.toBe('')
        expect(product.category).toBeDefined()
        expect(product.imageUrl).toBeDefined()
        expect(product.imageUrl).not.toBe('')
        expect(product.badges).toBeDefined()
        expect(Array.isArray(product.badges)).toBe(true)
        expect(product.priceRange_ar).toBeDefined()
        expect(product.priceRange_ar).not.toBe('')
        expect(product.priceRange_en).toBeDefined()
        expect(product.priceRange_en).not.toBe('')
        expect(product.detailUrl).toBeDefined()
        expect(product.detailUrl).not.toBe('')
        expect(product.whatsappInquiryUrl_ar).toBeDefined()
        expect(product.whatsappInquiryUrl_ar).not.toBe('')
        expect(product.whatsappInquiryUrl_en).toBeDefined()
        expect(product.whatsappInquiryUrl_en).not.toBe('')
        
        // Check full model fields
        expect(product.specs).toBeDefined()
        expect(product.sourcing).toBeDefined()
        expect(product.certificates).toBeDefined()
        expect(Array.isArray(product.certificates)).toBe(true)
        expect(product.howToUse).toBeDefined()
        expect(Array.isArray(product.howToUse)).toBe(true)
        expect(product.safetyNotice_ar).toBeDefined()
        expect(product.safetyNotice_ar).not.toBe('')
        expect(product.safetyNotice_en).toBeDefined()
        expect(product.safetyNotice_en).not.toBe('')
        expect(product.relatedProductsIds).toBeDefined()
        expect(Array.isArray(product.relatedProductsIds)).toBe(true)
      })
    })

    it('should have unique product IDs', () => {
      const ids = MOCK_PRODUCTS_DATA.map(p => p.id)
      const uniqueIds = new Set(ids)
      expect(ids.length).toBe(uniqueIds.size)
    })

    it('should have valid relatedProductsIds references', () => {
      const validIds = new Set(MOCK_PRODUCTS_DATA.map(p => p.id))
      
      MOCK_PRODUCTS_DATA.forEach((product) => {
        product.relatedProductsIds.forEach((relatedId) => {
          expect(validIds.has(relatedId)).toBe(true)
        })
      })
    })
  })

  describe('Gift Sets Data', () => {
    it('should have all required fields for each gift set', () => {
      GIFT_SETS.forEach((giftSet) => {
        expect(giftSet.id).toBeDefined()
        expect(giftSet.id).not.toBe('')
        expect(giftSet.name_ar).toBeDefined()
        expect(giftSet.name_ar).not.toBe('')
        expect(giftSet.name_en).toBeDefined()
        expect(giftSet.name_en).not.toBe('')
        expect(giftSet.description_ar).toBeDefined()
        expect(giftSet.description_ar).not.toBe('')
        expect(giftSet.description_en).toBeDefined()
        expect(giftSet.description_en).not.toBe('')
        expect(giftSet.priceRange_ar).toBeDefined()
        expect(giftSet.priceRange_ar).not.toBe('')
        expect(giftSet.priceRange_en).toBeDefined()
        expect(giftSet.priceRange_en).not.toBe('')
        expect(giftSet.image).toBeDefined()
        expect(giftSet.image).not.toBe('')
        expect(giftSet.whatsappInquiryUrl_ar).toBeDefined()
        expect(giftSet.whatsappInquiryUrl_ar).not.toBe('')
        expect(giftSet.whatsappInquiryUrl_en).toBeDefined()
        expect(giftSet.whatsappInquiryUrl_en).not.toBe('')
      })
    })

    it('should have unique gift set IDs', () => {
      const ids = GIFT_SETS.map(g => g.id)
      const uniqueIds = new Set(ids)
      expect(ids.length).toBe(uniqueIds.size)
    })
  })

  describe('Blog Posts Data', () => {
    it('should have all required fields for each blog post', () => {
      BLOG_POSTS.forEach((post) => {
        expect(post.id).toBeDefined()
        expect(post.id).not.toBe('')
        expect(post.title_ar).toBeDefined()
        expect(post.title_ar).not.toBe('')
        expect(post.title_en).toBeDefined()
        expect(post.title_en).not.toBe('')
        expect(post.excerpt_ar).toBeDefined()
        expect(post.excerpt_ar).not.toBe('')
        expect(post.excerpt_en).toBeDefined()
        expect(post.excerpt_en).not.toBe('')
        expect(post.date).toBeDefined()
        expect(post.date).not.toBe('')
        expect(post.coverImage).toBeDefined()
        expect(post.coverImage).not.toBe('')
        expect(post.author_ar).toBeDefined()
        expect(post.author_ar).not.toBe('')
        expect(post.author_en).toBeDefined()
        expect(post.author_en).not.toBe('')
        expect(post.readTime_ar).toBeDefined()
        expect(post.readTime_ar).not.toBe('')
        expect(post.readTime_en).toBeDefined()
        expect(post.readTime_en).not.toBe('')
      })
    })

    it('should have unique blog post IDs', () => {
      const ids = BLOG_POSTS.map(p => p.id)
      const uniqueIds = new Set(ids)
      expect(ids.length).toBe(uniqueIds.size)
    })

    it('should have valid date format (YYYY-MM-DD)', () => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      BLOG_POSTS.forEach((post) => {
        expect(post.date).toMatch(dateRegex)
      })
    })
  })

  describe('Help Center Data', () => {
    it('should have all required fields for each help category', () => {
      HELP_CATEGORIES.forEach((category) => {
        expect(category.id).toBeDefined()
        expect(category.id).not.toBe('')
        expect(category.title_ar).toBeDefined()
        expect(category.title_ar).not.toBe('')
        expect(category.title_en).toBeDefined()
        expect(category.title_en).not.toBe('')
        expect(category.iconName).toBeDefined()
        expect(category.iconName).not.toBe('')
        expect(category.articleIds).toBeDefined()
        expect(Array.isArray(category.articleIds)).toBe(true)
      })
    })

    it('should have all required fields for each help article', () => {
      HELP_ARTICLES.forEach((article) => {
        expect(article.id).toBeDefined()
        expect(article.id).not.toBe('')
        expect(article.title_ar).toBeDefined()
        expect(article.title_ar).not.toBe('')
        expect(article.title_en).toBeDefined()
        expect(article.title_en).not.toBe('')
        expect(article.summary_ar).toBeDefined()
        expect(article.summary_ar).not.toBe('')
        expect(article.summary_en).toBeDefined()
        expect(article.summary_en).not.toBe('')
        expect(article.content_ar).toBeDefined()
        expect(article.content_ar).not.toBe('')
        expect(article.content_en).toBeDefined()
        expect(article.content_en).not.toBe('')
        expect(article.categoryIds).toBeDefined()
        expect(Array.isArray(article.categoryIds)).toBe(true)
        expect(article.url).toBeDefined()
        expect(article.url).not.toBe('')
      })
    })

    it('should have unique help article IDs', () => {
      const ids = HELP_ARTICLES.map(a => a.id)
      const uniqueIds = new Set(ids)
      expect(ids.length).toBe(uniqueIds.size)
    })

    it('should have valid category references in articles', () => {
      const validCategoryIds = new Set(HELP_CATEGORIES.map(c => c.id))
      
      HELP_ARTICLES.forEach((article) => {
        article.categoryIds.forEach((categoryId) => {
          expect(validCategoryIds.has(categoryId)).toBe(true)
        })
      })
    })

    it('should have valid article references in categories', () => {
      const validArticleIds = new Set(HELP_ARTICLES.map(a => a.id))
      
      HELP_CATEGORIES.forEach((category) => {
        category.articleIds.forEach((articleId) => {
          expect(validArticleIds.has(articleId)).toBe(true)
        })
      })
    })
  })

  describe('Cross-Data Integrity', () => {
    it('should have unique IDs across products and gift sets', () => {
      const productIds = new Set(MOCK_PRODUCTS_DATA.map(p => p.id))
      const giftSetIds = new Set(GIFT_SETS.map(g => g.id))
      
      // Check for duplicates between products and gift sets
      giftSetIds.forEach((id) => {
        expect(productIds.has(id)).toBe(false)
      })
    })

    it('should have unique IDs across all data types', () => {
      const allIds = [
        ...MOCK_PRODUCTS_DATA.map(p => p.id),
        ...GIFT_SETS.map(g => g.id),
        ...BLOG_POSTS.map(p => p.id),
        ...HELP_ARTICLES.map(a => a.id)
      ]
      
      const uniqueIds = new Set(allIds)
      expect(allIds.length).toBe(uniqueIds.size)
    })
  })
})
