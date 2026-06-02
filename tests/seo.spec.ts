import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all HTML files from dist/
function getHtmlFiles(distDir: string): string[] {
  const files: string[] = [];
  
  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        files.push(fullPath);
      }
    }
  }
  
  walk(distDir);
  return files;
}

// Parse HTML and check SEO tags
function checkSeoTags(htmlPath: string): { passed: string[]; failed: string[] } {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const results = { passed: [] as string[], failed: [] as string[] };
  
  // Check meta description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  if (descMatch) {
    if (descMatch[1].trim().length > 0) {
      results.passed.push('meta[name="description"] (not empty)');
    } else {
      results.failed.push('meta[name="description"] exists but content is empty');
    }
  } else {
    results.failed.push('meta[name="description"] missing');
  }
  
  // Check og:title
  const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i);
  if (ogTitleMatch) {
    if (ogTitleMatch[1].trim().length > 0) {
      results.passed.push('meta[property="og:title"] (not empty)');
    } else {
      results.failed.push('meta[property="og:title"] exists but content is empty');
    }
  } else {
    results.failed.push('meta[property="og:title"] missing');
  }
  
  // Check og:image
  const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i);
  if (ogImageMatch) {
    if (ogImageMatch[1].trim().length > 0) {
      results.passed.push('meta[property="og:image"] (not empty)');
    } else {
      results.failed.push('meta[property="og:image"] exists but content is empty');
    }
  } else {
    results.failed.push('meta[property="og:image"] missing');
  }
  
  // Check canonical link
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  if (canonicalMatch) {
    results.passed.push('link[rel="canonical"] exists');
  } else {
    results.failed.push('link[rel="canonical"] missing');
  }
  
  // Check html lang
  const htmlLangMatch = html.match(/<html\s+[^>]*lang=["']([^"']*)["']/i);
  if (htmlLangMatch) {
    const lang = htmlLangMatch[1];
    if (['ar', 'en', 'ar-SA', 'en-US'].includes(lang)) {
      results.passed.push(`html[lang="${lang}"] is valid`);
    } else {
      results.failed.push(`html[lang]="${lang}" may not be correct`);
    }
  } else {
    results.failed.push('html[lang] attribute missing');
  }
  
  return results;
}

const distDir = path.resolve(__dirname, '../../dist');
const htmlFiles = getHtmlFiles(distDir);

test.describe('SEO Tag Audit', () => {
  test('All HTML files should have required SEO tags', async () => {
    const failures: { file: string; issues: string[] }[] = [];
    
    for (const htmlFile of htmlFiles) {
      const relativePath = path.relative(distDir, htmlFile);
      const results = checkSeoTags(htmlFile);
      
      if (results.failed.length > 0) {
        failures.push({
          file: relativePath,
          issues: results.failed
        });
      }
    }
    
    // Log results
    console.log(`\n📊 SEO Audit Results:`);
    console.log(`   Total files checked: ${htmlFiles.length}`);
    console.log(`   Failures: ${failures.length}\n`);
    
    if (failures.length > 0) {
      console.log('❌ Pages with SEO issues:');
      for (const failure of failures) {
        console.log(`   - ${failure.file}:`);
        for (const issue of failure.issues) {
          console.log(`     • ${issue}`);
        }
      }
    }
    
    // Assert no failures (comment out if some failures are acceptable)
    expect(failures.length, `Found ${failures.length} pages with SEO issues`).toBe(0);
  });
  
  // Alternative: test with a local server (requires Playwright)
  test.skip('SEO tags via browser (requires local server)', async ({ page }) => {
    // This test requires a running local server
    // Start with: npx serve dist -p 3000
    
    for (const htmlFile of htmlFiles) {
      const relativePath = path.relative(distDir, htmlFile);
      const url = `http://localhost:3000/${relativePath}`;
      
      await page.goto(url, { waitUntil: 'load' });
      
      // Check meta description
      const description = await page.getAttribute('meta[name="description"]', 'content');
      expect(description, `meta description missing on ${relativePath}`).toBeTruthy();
      
      // Check og:title
      const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content');
      expect(ogTitle, `og:title missing on ${relativePath}`).toBeTruthy();
      
      // Check og:image
      const ogImage = await page.getAttribute('meta[property="og:image"]', 'content');
      expect(ogImage, `og:image missing on ${relativePath}`).toBeTruthy();
      
      // Check canonical
      const canonical = await page.getAttribute('link[rel="canonical"]', 'href');
      expect(canonical, `canonical link missing on ${relativePath}`).toBeTruthy();
      
      // Check html lang
      const lang = await page.getAttribute('html', 'lang');
      expect(lang, `html[lang] missing on ${relativePath}`).toBeTruthy();
      expect(['ar', 'en', 'ar-SA', 'en-US'].includes(lang!)).toBeTruthy();
    }
  });
});
