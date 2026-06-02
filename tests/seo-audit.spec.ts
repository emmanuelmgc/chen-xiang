import { test, expect } from '@playwright/test';

// Pages to test (based on built output)
const pages = [
  { path: '/', name: 'Home' },
  { path: '/gift-landing', name: 'Gift Landing' },
  { path: '/journal', name: 'Journal' },
  { path: '/products', name: 'Products' },
];

test.describe('SEO Audit', () => {
  for (const page of pages) {
    test(`should have required SEO meta tags on ${page.name} page`, async ({ page: p }) => {
      await p.goto(page.path);
      
      // Check og:title
      const ogTitle = await p.locator('meta[property="og:title"]').getAttribute('content');
      expect(ogTitle).toBeTruthy();
      expect(ogTitle?.length).toBeGreaterThan(0);
      
      // Check og:image
      const ogImage = await p.locator('meta[property="og:image"]').getAttribute('content');
      expect(ogImage).toBeTruthy();
      expect(ogImage?.length).toBeGreaterThan(0);
      
      // Check canonical link
      const canonical = await p.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBeTruthy();
      expect(canonical?.length).toBeGreaterThan(0);
      
      // Check meta description
      const description = await p.locator('meta[name="description"]').getAttribute('content');
      expect(description).toBeTruthy();
      expect(description?.length).toBeGreaterThan(0);
      
      // Check hreflang tags (should have at least 2: ar and en)
      const hreflangTags = await p.locator('link[rel="alternate"][hreflang]').count();
      expect(hreflangTags).toBeGreaterThanOrEqual(2);
      
      // Verify specific hreflang values
      const hreflangValues = await p.locator('link[rel="alternate"][hreflang]').getAttribute('hreflang');
      expect(hreflangValues).toContain('ar');
      expect(hreflangValues).toContain('en');
    });
  }
});
