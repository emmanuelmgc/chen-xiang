/**
 * 多语言数据测试
 * 测试所有数据文件中的阿拉伯语和英语字段完整且一致
 */

import { describe, it, expect } from 'vitest'
import { MOCK_PRODUCTS_DATA } from '@/data/products'
import { GIFT_SETS } from '@/data/gift_sets'
import { MOCK_FAQS } from '@/data/faqs'
import { BLOG_POSTS } from '@/data/blog_posts'
import { HELP_ARTICLES, HELP_CATEGORIES } from '@/data/help_center'
import { CONTACT_INFO } from '@/data/contact_info'

// Helper function to check for empty strings recursively
function checkEmptyStrings(obj: any, path: string = ''): string[] {
  const errors: string[] = []
  
  if (typeof obj === 'string') {
    if (obj.trim() === '') {
      errors.push(`Empty string at ${path}`)
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      errors.push(...checkEmptyStrings(item, `${path}[${index}]`))
    })
  } else if (typeof obj === 'object' && obj !== null) {
    Object.entries(obj).forEach(([key, value]) => {
      errors.push(...checkEmptyStrings(value, path ? `${path}.${key}` : key))
    })
  }
  
  return errors
}

// Helper function to check for placeholder patterns
function checkPlaceholders(obj: any, path: string = ''): string[] {
  const errors: string[] = []
  const placeholderPatterns = [
    /XXXX+/i,
    /TODO/i,
    /TBD/i,
    /lorem ipsum/i,
    /\[AR\]/i,
    /\[EN\]/i,
    /placeholder/i
  ]
  
  if (typeof obj === 'string') {
    placeholderPatterns.forEach(pattern => {
      if (pattern.test(obj)) {
        errors.push(`Placeholder found at ${path}: ${obj.substring(0, 50)}`)
      }
    })
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      errors.push(...checkPlaceholders(item, `${path}[${index}]`))
    })
  } else if (typeof obj === 'object' && obj !== null) {
    Object.entries(obj).forEach(([key, value]) => {
      errors.push(...checkPlaceholders(value, path ? `${path}.${key}` : key))
    })
  }
  
  return errors
}

describe('Multilingual Data Integrity Tests', () => {
  describe('English Fields Completeness', () => {
    it('all products should have English name', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        expect(product.name_en, `Product[${index}]: Missing name_en`).toBeDefined()
        expect(product.name_en, `Product[${index}]: name_en is empty`).not.toBe('')
        expect(product.name_en, `Product[${index}]: name_en is only whitespace`).not.toMatch(/^\s*$/)
      })
    })

    it('all products should have English description', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        expect(product.description_en, `Product[${index}]: Missing description_en`).toBeDefined()
        expect(product.description_en, `Product[${index}]: description_en is empty`).not.toBe('')
      })
    })

    it('all products should have English price range', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        expect(product.priceRange_en, `Product[${index}]: Missing priceRange_en`).toBeDefined()
        expect(product.priceRange_en, `Product[${index}]: priceRange_en is empty`).not.toBe('')
      })
    })

    it('all gift sets should have English name', () => {
      GIFT_SETS.forEach((giftSet, index) => {
        expect(giftSet.name_en, `GiftSet[${index}]: Missing name_en`).toBeDefined()
        expect(giftSet.name_en, `GiftSet[${index}]: name_en is empty`).not.toBe('')
      })
    })

    it('all FAQs should have English question and answer', () => {
      MOCK_FAQS.forEach((faq, index) => {
        expect(faq.question_en, `FAQ[${index}]: Missing question_en`).toBeDefined()
        expect(faq.question_en, `FAQ[${index}]: question_en is empty`).not.toBe('')
        
        expect(faq.answer_en, `FAQ[${index}]: Missing answer_en`).toBeDefined()
        expect(faq.answer_en, `FAQ[${index}]: answer_en is empty`).not.toBe('')
      })
    })

    it('all blog posts should have English title and excerpt', () => {
      BLOG_POSTS.forEach((post, index) => {
        expect(post.title_en, `BlogPost[${index}]: Missing title_en`).toBeDefined()
        expect(post.title_en, `BlogPost[${index}]: title_en is empty`).not.toBe('')
        
        expect(post.excerpt_en, `BlogPost[${index}]: Missing excerpt_en`).toBeDefined()
        expect(post.excerpt_en, `BlogPost[${index}]: excerpt_en is empty`).not.toBe('')
      })
    })

    it('all help articles should have English title and content', () => {
      HELP_ARTICLES.forEach((article, index) => {
        expect(article.title_en, `HelpArticle[${index}]: Missing title_en`).toBeDefined()
        expect(article.title_en, `HelpArticle[${index}]: title_en is empty`).not.toBe('')
        
        expect(article.content_en, `HelpArticle[${index}]: Missing content_en`).toBeDefined()
        expect(article.content_en, `HelpArticle[${index}]: content_en is empty`).not.toBe('')
      })
    })
  })

  describe('Arabic Fields Completeness', () => {
    it('all products should have Arabic name', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        expect(product.name_ar, `Product[${index}]: Missing name_ar`).toBeDefined()
        expect(product.name_ar, `Product[${index}]: name_ar is empty`).not.toBe('')
        expect(product.name_ar, `Product[${index}]: name_ar is only whitespace`).not.toMatch(/^\s*$/)
      })
    })

    it('all products should have Arabic description', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        expect(product.description_ar, `Product[${index}]: Missing description_ar`).toBeDefined()
        expect(product.description_ar, `Product[${index}]: description_ar is empty`).not.toBe('')
      })
    })

    it('all products should have Arabic price range', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        expect(product.priceRange_ar, `Product[${index}]: Missing priceRange_ar`).toBeDefined()
        expect(product.priceRange_ar, `Product[${index}]: priceRange_ar is empty`).not.toBe('')
      })
    })

    it('all gift sets should have Arabic name', () => {
      GIFT_SETS.forEach((giftSet, index) => {
        expect(giftSet.name_ar, `GiftSet[${index}]: Missing name_ar`).toBeDefined()
        expect(giftSet.name_ar, `GiftSet[${index}]: name_ar is empty`).not.toBe('')
      })
    })

    it('all FAQs should have Arabic question and answer', () => {
      MOCK_FAQS.forEach((faq, index) => {
        expect(faq.question_ar, `FAQ[${index}]: Missing question_ar`).toBeDefined()
        expect(faq.question_ar, `FAQ[${index}]: question_ar is empty`).not.toBe('')
        
        expect(faq.answer_ar, `FAQ[${index}]: Missing answer_ar`).toBeDefined()
        expect(faq.answer_ar, `FAQ[${index}]: answer_ar is empty`).not.toBe('')
      })
    })

    it('all blog posts should have Arabic title and excerpt', () => {
      BLOG_POSTS.forEach((post, index) => {
        expect(post.title_ar, `BlogPost[${index}]: Missing title_ar`).toBeDefined()
        expect(post.title_ar, `BlogPost[${index}]: title_ar is empty`).not.toBe('')
        
        expect(post.excerpt_ar, `BlogPost[${index}]: Missing excerpt_ar`).toBeDefined()
        expect(post.excerpt_ar, `BlogPost[${index}]: excerpt_ar is empty`).not.toBe('')
      })
    })

    it('all help articles should have Arabic title and content', () => {
      HELP_ARTICLES.forEach((article, index) => {
        expect(article.title_ar, `HelpArticle[${index}]: Missing title_ar`).toBeDefined()
        expect(article.title_ar, `HelpArticle[${index}]: title_ar is empty`).not.toBe('')
        
        expect(article.content_ar, `HelpArticle[${index}]: Missing content_ar`).toBeDefined()
        expect(article.content_ar, `HelpArticle[${index}]: content_ar is empty`).not.toBe('')
      })
    })
  })

  describe('Field Key Consistency', () => {
    it('all products should have consistent field names', () => {
      const firstProductKeys = Object.keys(MOCK_PRODUCTS_DATA[0])
      
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        const keys = Object.keys(product)
        expect(keys, `Product[${index}]: Field keys mismatch`).toEqual(firstProductKeys)
      })
    })

    it('all gift sets should have consistent field names', () => {
      const firstGiftSetKeys = Object.keys(GIFT_SETS[0])
      
      GIFT_SETS.forEach((giftSet, index) => {
        const keys = Object.keys(giftSet)
        expect(keys, `GiftSet[${index}]: Field keys mismatch`).toEqual(firstGiftSetKeys)
      })
    })

    it('all FAQs should have consistent field names', () => {
      const firstFaqKeys = Object.keys(MOCK_FAQS[0])
      
      MOCK_FAQS.forEach((faq, index) => {
        const keys = Object.keys(faq)
        expect(keys, `FAQ[${index}]: Field keys mismatch`).toEqual(firstFaqKeys)
      })
    })
  })

  describe('No Empty Strings', () => {
    it('products should not have empty string fields', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        const errors = checkEmptyStrings(product, `Product[${index}]`)
        expect(errors, `Product[${index}]: Found empty strings`).toEqual([])
      })
    })

    it('gift sets should not have empty string fields', () => {
      GIFT_SETS.forEach((giftSet, index) => {
        const errors = checkEmptyStrings(giftSet, `GiftSet[${index}]`)
        expect(errors, `GiftSet[${index}]: Found empty strings`).toEqual([])
      })
    })

    it('FAQs should not have empty string fields', () => {
      MOCK_FAQS.forEach((faq, index) => {
        const errors = checkEmptyStrings(faq, `FAQ[${index}]`)
        expect(errors, `FAQ[${index}]: Found empty strings`).toEqual([])
      })
    })

    it('blog posts should not have empty string fields', () => {
      BLOG_POSTS.forEach((post, index) => {
        const errors = checkEmptyStrings(post, `BlogPost[${index}]`)
        expect(errors, `BlogPost[${index}]: Found empty strings`).toEqual([])
      })
    })

    it('help articles should not have empty string fields', () => {
      HELP_ARTICLES.forEach((article, index) => {
        const errors = checkEmptyStrings(article, `HelpArticle[${index}]`)
        expect(errors, `HelpArticle[${index}]: Found empty strings`).toEqual([])
      })
    })
  })

  describe('No Fallback Errors', () => {
    it('Arabic fields should not contain English field names', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        expect(product.name_ar, `Product[${index}]: name_ar contains English`).not.toContain('name_en')
        expect(product.description_ar, `Product[${index}]: description_ar contains English`).not.toContain('description_en')
      })
    })

    it('English fields should not contain Arabic field names', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        expect(product.name_en, `Product[${index}]: name_en contains Arabic`).not.toContain('name_ar')
        expect(product.description_en, `Product[${index}]: description_en contains Arabic`).not.toContain('description_ar')
      })
    })

    it('should not have mixed language in same field', () => {
      // This is a heuristic check - in real scenario, you might want more sophisticated detection
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        // Arabic text should contain Arabic characters
        if (product.name_ar) {
          expect(product.name_ar, `Product[${index}]: name_ar doesn't look like Arabic`).toMatch(/[\u0600-\u06FF]/)
        }
        
        // English text should contain Latin characters
        if (product.name_en) {
          expect(product.name_en, `Product[${index}]: name_en doesn't look like English`).toMatch(/[a-zA-Z]/)
        }
      })
    })
  })

  describe('FAQ Data Integrity', () => {
    it('all FAQs should have valid category', () => {
      const validCategories = ['incense', 'bakhoor', 'gifting', 'general']
      
      MOCK_FAQS.forEach((faq, index) => {
        expect(faq.category, `FAQ[${index}]: Invalid category`).toBeDefined()
        expect(validCategories, `FAQ[${index}]: Category not in valid list`).toContain(faq.category)
      })
    })

    it('all FAQs should have non-empty questions and answers', () => {
      MOCK_FAQS.forEach((faq, index) => {
        expect(faq.question_ar.length, `FAQ[${index}]: question_ar too short`).toBeGreaterThan(10)
        expect(faq.question_en.length, `FAQ[${index}]: question_en too short`).toBeGreaterThan(10)
        expect(faq.answer_ar.length, `FAQ[${index}]: answer_ar too short`).toBeGreaterThan(20)
        expect(faq.answer_en.length, `FAQ[${index}]: answer_en too short`).toBeGreaterThan(20)
      })
    })
  })

  describe('Contact Info Integrity', () => {
    it('WhatsApp number should be valid format', () => {
      expect(CONTACT_INFO.whatsappNumber).toMatch(/^\+966\d{10}$/)
    })

    it('phone number should be valid format', () => {
      expect(CONTACT_INFO.phoneNumber).toMatch(/^\+966\d{10}$/)
    })

    it('email should be valid format', () => {
      expect(CONTACT_INFO.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    })

    it('should not contain placeholder in contact info', () => {
      const contactString = JSON.stringify(CONTACT_INFO)
      expect(contactString).not.toMatch(/XXXX/)
      expect(contactString).not.toMatch(/placeholder/i)
    })
  })

  describe('Placeholder Detection', () => {
    it('products should not contain placeholders', () => {
      MOCK_PRODUCTS_DATA.forEach((product, index) => {
        const errors = checkPlaceholders(product, `Product[${index}]`)
        expect(errors, `Product[${index}]: Found placeholders`).toEqual([])
      })
    })

    it('gift sets should not contain placeholders', () => {
      GIFT_SETS.forEach((giftSet, index) => {
        const errors = checkPlaceholders(giftSet, `GiftSet[${index}]`)
        expect(errors, `GiftSet[${index}]: Found placeholders`).toEqual([])
      })
    })

    it('FAQs should not contain placeholders', () => {
      MOCK_FAQS.forEach((faq, index) => {
        const errors = checkPlaceholders(faq, `FAQ[${index}]`)
        expect(errors, `FAQ[${index}]: Found placeholders`).toEqual([])
      })
    })
  })
})

describe('CTA Consistency', () => {
  it('all CTAs should have consistent wording', () => {
    // This is a manual review item - checking that similar actions have consistent CTA text
    // For now, we'll just check that CTA fields exist where expected
    
    MOCK_PRODUCTS_DATA.forEach((product, index) => {
      // Check that WhatsApp inquiry URLs are properly formatted
      expect(product.whatsappInquiryUrl_ar, `Product[${index}]: Missing WhatsApp URL (AR)`).toBeDefined()
      expect(product.whatsappInquiryUrl_en, `Product[${index}]: Missing WhatsApp URL (EN)`).toBeDefined()
      
      expect(product.whatsappInquiryUrl_ar, `Product[${index}]: Invalid WhatsApp URL (AR)`).toMatch(/^https:\/\/wa\.me\//)
      expect(product.whatsappInquiryUrl_en, `Product[${index}]: Invalid WhatsApp URL (EN)`).toMatch(/^https:\/\/wa\.me\//)
    })
  })
})
