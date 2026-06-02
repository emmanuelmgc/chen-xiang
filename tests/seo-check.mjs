#!/usr/bin/env node
/**
 * SEO Tag Checker - Parses HTML files and checks for required SEO tags
 * This script runs without Playwright (for environments where browsers can't be installed)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// Get all HTML files recursively
function getHtmlFiles(dir) {
  const files = [];
  
  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

// Parse HTML and check SEO tags
function checkSeoTags(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const relativePath = path.relative(distDir, htmlPath);
  const results = {
    file: relativePath,
    passed: [],
    failed: []
  };
  
  // Check <meta name="description">
  const descriptionMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  if (descriptionMatch) {
    if (descriptionMatch[1].trim().length > 0) {
      results.passed.push('meta[name="description"] (not empty)');
    } else {
      results.failed.push('meta[name="description"] exists but content is empty');
    }
  } else {
    results.failed.push('meta[name="description"] missing');
  }
  
  // Check <meta property="og:title">
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
  
  // Check <meta property="og:image">
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
  
  // Check <link rel="canonical">
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  if (canonicalMatch) {
    results.passed.push('link[rel="canonical"] exists');
  } else {
    results.failed.push('link[rel="canonical"] missing');
  }
  
  // Check <html lang="">
  const htmlLangMatch = html.match(/<html\s+[^>]*lang=["']([^"']*)["']/i);
  if (htmlLangMatch) {
    const lang = htmlLangMatch[1];
    if (lang === 'ar' || lang === 'en' || lang === 'ar-SA' || lang === 'en-US') {
      results.passed.push(`html[lang="${lang}"] is valid`);
    } else {
      results.failed.push(`html[lang="${lang}"] may not be correct (expected ar, en, ar-SA, or en-US)`);
    }
  } else {
    results.failed.push('html[lang] attribute missing');
  }
  
  return results;
}

// Main execution
function main() {
  console.log('🔍 Starting SEO Audit...\n');
  console.log(`📁 Scanning: ${distDir}\n`);
  
  const htmlFiles = getHtmlFiles(distDir);
  console.log(`Found ${htmlFiles.length} HTML files\n`);
  
  const allResults = [];
  let totalPassed = 0;
  let totalFailed = 0;
  const failedPages = [];
  
  for (const file of htmlFiles) {
    const result = checkSeoTags(file);
    allResults.push(result);
    
    totalPassed += result.passed.length;
    totalFailed += result.failed.length;
    
    if (result.failed.length > 0) {
      failedPages.push({
        file: result.file,
        failures: result.failed
      });
    }
  }
  
  // Generate report
  const report = [];
  report.push('# SEO Audit Report\n');
  report.push(`Generated: ${new Date().toISOString()}\n`);
  report.push('## Summary\n');
  report.push(`- **Total pages checked**: ${htmlFiles.length}`);
  report.push(`- **Total checks passed**: ${totalPassed}`);
  report.push(`- **Total checks failed**: ${totalFailed}`);
  report.push(`- **Pages with failures**: ${failedPages.length}/${htmlFiles.length}\n`);
  
  if (failedPages.length > 0) {
    report.push('## Failed Pages\n');
    for (const page of failedPages) {
      report.push(`### ${page.file}\n`);
      for (const failure of page.failures) {
        report.push(`- ❌ ${failure}`);
      }
      report.push('');
    }
  } else {
    report.push('## Result\n');
    report.push('✅ All pages passed SEO checks!\n');
  }
  
  report.push('## Recommendations\n');
  report.push('1. Ensure all pages have unique and descriptive meta descriptions (120-160 characters)');
  report.push('2. Verify that og:title matches the <title> tag content');
  report.push('3. Use high-quality images (1200x630px) for og:image');
  report.push('4. Ensure canonical URLs are absolute (include https://)');
  report.push('5. Validate html[lang] attribute matches the page content language');
  report.push('6. Consider adding twitter:card, twitter:title, twitter:image for better social sharing');
  report.push('7. Add structured data (JSON-LD) for rich snippets\n');
  
  report.push('## Detailed Results\n');
  for (const result of allResults) {
    report.push(`### ${result.file}\n`);
    if (result.passed.length > 0) {
      report.push('**Passed:**');
      for (const pass of result.passed) {
        report.push(`- ✅ ${pass}`);
      }
      report.push('');
    }
    if (result.failed.length > 0) {
      report.push('**Failed:**');
      for (const fail of result.failed) {
        report.push(`- ❌ ${fail}`);
      }
      report.push('');
    }
  }
  
  const reportContent = report.join('\n');
  const reportPath = path.resolve(__dirname, '../reports/seo-audit.md');
  fs.writeFileSync(reportPath, reportContent, 'utf8');
  
  console.log(`\n📊 Report saved to: ${reportPath}`);
  console.log(`\n${totalFailed === 0 ? '✅' : '⚠️'} SEO Audit Complete: ${totalPassed} passed, ${totalFailed} failed`);
  
  // Exit with error if any failures
  process.exit(totalFailed > 0 ? 1 : 0);
}

main();
