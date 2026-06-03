/**
 * 链接检查测试
 * 使用 Playwright 检查所有内部链接、外部链接和特殊链接
 */

import { test, expect } from '@playwright/test'

// Define pages to test
const pages = [
  { path: '/', name: 'Home' },
  { path: '/products', name: 'Products' },
  { path: '/gift-landing', name: 'Gift Landing' },
  { path: '/journal', name: 'Journal' },
  { path: '/help-center', name: 'Help Center' },
  { path: '/contact', name: 'Contact' },
  { path: '/about', name: 'About' },
  { path: '/collections', name: 'Collections' },
  { path: '/b2b-hotels-venues', name: 'B2B Hotels & Venues' },
  { path: '/privacy-cookie-policy', name: 'Privacy Policy' },
  { path: '/terms-of-service', name: 'Terms of Service' },
  { path: '/product-safety-notice', name: 'Product Safety Notice' },
  { path: '/sourcing-craft', name: 'Sourcing & Craft' },
  { path: '/quality-promise', name: 'Quality Promise' },
  { path: '/compliance-safety', name: 'Compliance & Safety' },
  { path: '/our-story', name: 'Our Story' },
]

// Define product detail pages
const productPages = [
  { path: '/product-detail/stick_sandal_classic', name: 'Sandal Incense Sticks' },
  { path: '/product-detail/bakhoor_oud_patchouli', name: 'Oud & Patchouli Bakhoor' },
  { path: '/product-detail/mabkhara_electric_gold', name: 'Electric Mabkhara' },
  { path: '/product-detail/gift_eid_deluxe', name: 'Eid Gift Set' },
  { path: '/product-detail/stick_arabian_nights', name: 'Arabian Nights Sticks' },
  { path: '/product-detail/mabkhara_ceramic_tray', name: 'Ceramic Ash Tray' },
]

test.describe('Internal Link Check', () => {
  // Test all internal links on each page
  pages.forEach(page => {
    test(`should have valid internal links on ${page.name}`, async ({ page: p }) => {
      await p.goto(page.path)
      
      // Wait for page to load
      await p.waitForLoadState('networkidle')
      
      // Find all internal links (starting with ./ or /)
      const links = await p.locator('a[href^="./"], a[href^="/"]').all()
      
      console.log(`Found ${links.length} internal links on ${page.name}`)
      
      for (const link of links) {
        const href = await link.getAttribute('href')
        
        // Skip anchor links and javascript:void
        if (!href || href.startsWith('#') || href.startsWith('javascript:')) {
          continue
        }
        
        // Check that the link is not empty
        expect(href, `Empty link on ${page.name}`).toBeTruthy()
        
        // Check that the link doesn't contain placeholders
        expect(href, `Placeholder in link on ${page.name}: ${href}`).not.toContain('XXXX')
        expect(href, `Placeholder in link on ${page.name}: ${href}`).not.toContain('placeholder')
        expect(href, `Placeholder in link on ${page.name}: ${href}`).not.toContain('example.com')
      }
    })
  })
})

test.describe('WhatsApp Link Check', () => {
  test('all WhatsApp links should be valid', async ({ page }) => {
    // Check on home page
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    const whatsappLinks = await page.locator('a[href^="https://wa.me/"]').all()
    
    console.log(`Found ${whatsappLinks.length} WhatsApp links`)
    
    for (const link of whatsappLinks) {
      const href = await link.getAttribute('href')
      
      expect(href, 'WhatsApp link is empty').toBeTruthy()
      
      // Check that the number is valid (not containing XXXX)
      expect(href, `Invalid WhatsApp number: ${href}`).not.toContain('XXXX')
      
      // Check that the URL format is correct
      expect(href, `Invalid WhatsApp URL format: ${href}`).toMatch(/^https:\/\/wa\.me\/\+966\d+/)
    }
  })

  test('all product pages should have WhatsApp inquiry links', async ({ page }) => {
    for (const productPage of productPages) {
      await page.goto(productPage.path)
      await page.waitForLoadState('networkidle')
      
      // Check for WhatsApp inquiry button/link
      const whatsappLinks = await page.locator('a[href^="https://wa.me/"]').all()
      
      expect(whatsappLinks.length, `No WhatsApp links found on ${productPage.name}`).toBeGreaterThan(0)
      
      console.log(`Found ${whatsappLinks.length} WhatsApp links on ${productPage.name}`)
    }
  })
})

test.describe('Privacy Policy Link Check', () => {
  test('privacy policy link should be present and valid', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Find privacy policy link
    const privacyLink = await page.locator('a:has-text("Privacy"), a:has-text("Privacy Policy"), a:has-text("سياسة الخصوصية")').first()
    
    if (await privacyLink.count() > 0) {
      const href = await privacyLink.getAttribute('href')
      
      expect(href, 'Privacy policy link is empty').toBeTruthy()
      expect(href, 'Privacy policy link is invalid').toContain('privacy')
      
      // Click the link and check that the page loads
      await privacyLink.click()
      await page.waitForLoadState('networkidle')
      
      const response = await page.waitForResponse(resp => resp.url().includes('privacy'))
      expect(response.status(), 'Privacy policy page returned error').toBe(200)
    }
  })
})

test.describe('Help Center Link Check', () => {
  test('help center link should be present and valid', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Find help center link
    const helpLink = await page.locator('a:has-text("Help"), a:has-text("Help Center"), a:has-text("مركز المساعدة")').first()
    
    if (await helpLink.count() > 0) {
      const href = await helpLink.getAttribute('href')
      
      expect(href, 'Help center link is empty').toBeTruthy()
      expect(href, 'Help center link is invalid').toContain('help')
    }
  })
})

test.describe('Product Detail Page Link Check', () => {
  test('all product detail links should be valid', async ({ page }) => {
    // Go to products page
    await page.goto('/products')
    await page.waitForLoadState('networkidle')
    
    // Find all product detail links
    const productLinks = await page.locator('a[href*="product-detail"]').all()
    
    console.log(`Found ${productLinks.length} product detail links`)
    
    for (const link of productLinks) {
      const href = await link.getAttribute('href')
      
      expect(href, 'Product detail link is empty').toBeTruthy()
      expect(href, 'Invalid product detail link format').toMatch(/\/product-detail\//)
    }
  })
})

test.describe('Collections Link Check', () => {
  test('collections link should be present and valid', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Find collections link
    const collectionsLink = await page.locator('a:has-text("Collections"), a:has-text("المجموعات")').first()
    
    if (await collectionsLink.count() > 0) {
      const href = await collectionsLink.getAttribute('href')
      
      expect(href, 'Collections link is empty').toBeTruthy()
      expect(href, 'Collections link is invalid').toContain('collections')
    }
  })
})

test.describe('Contact Link Check', () => {
  test('contact link should be present and valid', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Find contact link
    const contactLink = await page.locator('a:has-text("Contact"), a:has-text("Contact Us"), a:has-text("اتصل بنا")').first()
    
    if (await contactLink.count() > 0) {
      const href = await contactLink.getAttribute('href')
      
      expect(href, 'Contact link is empty').toBeTruthy()
      expect(href, 'Contact link is invalid').toContain('contact')
    }
  })
})

test.describe('B2B Page Link Check', () => {
  test('B2B page link should be present and valid', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Find B2B link
    const b2bLink = await page.locator('a:has-text("B2B"), a:has-text("Business"), a:has-text("الأعمال")').first()
    
    if (await b2bLink.count() > 0) {
      const href = await b2bLink.getAttribute('href')
      
      expect(href, 'B2B link is empty').toBeTruthy()
      expect(href, 'B2B link is invalid').toContain('b2b')
    }
  })
})

test.describe('Broken Link Check', () => {
  test('should not have any 404 links', async ({ page }) => {
    const checkedUrls = new Set<string>()
    
    for (const pageInfo of pages) {
      await page.goto(pageInfo.path)
      await page.waitForLoadState('networkidle')
      
      const links = await page.locator('a[href^="./"], a[href^="/"]').all()
      
      for (const link of links) {
        const href = await link.getAttribute('href')
        
        if (!href || href.startsWith('#') || checkedUrls.has(href)) {
          continue
        }
        
        checkedUrls.add(href)
        
        // Navigate to the link
        const response = await page.goto(href)
        
        if (response) {
          expect(response.status(), `Broken link on ${pageInfo.name}: ${href}`).not.toBe(404)
          expect(response.status(), `Broken link on ${pageInfo.name}: ${href}`).not.toBe(500)
        }
        
        // Go back
        await page.goBack()
      }
    }
  })
})

test.describe('External Link Check', () => {
  test('all external links should be valid (not placeholder)', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Find all external links (starting with http or https)
    const externalLinks = await page.locator('a[href^="http"]').all()
    
    console.log(`Found ${externalLinks.length} external links`)
    
    for (const link of externalLinks) {
      const href = await link.getAttribute('href')
      
      expect(href, 'External link is empty').toBeTruthy()
      
      // Check that the link doesn't contain placeholders
      expect(href, `Placeholder in external link: ${href}`).not.toContain('XXXX')
      expect(href, `Placeholder in external link: ${href}`).not.toContain('example.com')
      expect(href, `Placeholder in external link: ${href}`).not.toContain('placeholder')
    }
  })
})

test.describe('Image Link Check', () => {
  test('all image sources should be valid (not placeholder)', async ({ page }) => {
    for (const pageInfo of pages) {
      await page.goto(pageInfo.path)
      await page.waitForLoadState('networkidle')
      
      // Find all images
      const images = await page.locator('img').all()
      
      for (const img of images) {
        const src = await img.getAttribute('src')
        const srcset = await img.getAttribute('srcset')
        
        // Check src
        if (src) {
          expect(src, `Invalid image src on ${pageInfo.name}: ${src}`).not.toContain('XXXX')
          expect(src, `Placeholder image on ${pageInfo.name}: ${src}`).not.toContain('placeholder')
        }
        
        // Check srcset
        if (srcset) {
          expect(srcset, `Invalid image srcset on ${pageInfo.name}`).not.toContain('XXXX')
          expect(srcset, `Placeholder image srcset on ${pageInfo.name}`).not.toContain('placeholder')
        }
      }
    }
  })
})
