const fs = require('fs');
const path = require('path');

// Pages to test
const pages = [
  { path: '/index.html', name: 'Home' },
  { path: '/gift-landing/index.html', name: 'Gift Landing' },
  { path: '/journal/index.html', name: 'Journal' },
  { path: '/products/index.html', name: 'Products' },
];

const distDir = path.join(__dirname, '..', 'dist');
let passed = 0;
let failed = 0;

console.log('🔍 Starting SEO Audit...\n');

pages.forEach(page => {
  const filePath = path.join(distDir, page.path);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Skipping ${page.name}: ${page.path} not found`);
    return;
  }
  
  const html = fs.readFileSync(filePath, 'utf-8');
  let pagePassed = 0;
  let pageFailed = 0;
  
  console.log(`📄 Testing ${page.name} (${page.path})`);
  
  // Check og:title
  const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i);
  if (ogTitleMatch && ogTitleMatch[1].length > 0) {
    console.log(`  ✅ og:title: ${ogTitleMatch[1]}`);
    pagePassed++;
  } else {
    console.log(`  ❌ Missing og:title`);
    pageFailed++;
  }
  
  // Check og:image
  const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  if (ogImageMatch && ogImageMatch[1].length > 0) {
    console.log(`  ✅ og:image: ${ogImageMatch[1]}`);
    pagePassed++;
  } else {
    console.log(`  ❌ Missing og:image`);
    pageFailed++;
  }
  
  // Check canonical
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (canonicalMatch && canonicalMatch[1].length > 0) {
    console.log(`  ✅ canonical: ${canonicalMatch[1]}`);
    pagePassed++;
  } else {
    console.log(`  ❌ Missing canonical link`);
    pageFailed++;
  }
  
  // Check description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (descMatch && descMatch[1].length > 0) {
    console.log(`  ✅ description: ${descMatch[1].substring(0, 50)}...`);
    pagePassed++;
  } else {
    console.log(`  ❌ Missing description`);
    pageFailed++;
  }
  
  // Check hreflang tags
  const hreflangMatches = html.matchAll(/<link\s+rel=["']alternate["']\s+hreflang=["']([^"']+)["']\s+href=["']([^"']+)["']/gi);
  const hreflangTags = Array.from(hreflangMatches);
  
  if (hreflangTags.length >= 2) {
    console.log(`  ✅ hreflang tags: ${hreflangTags.length} found`);
    pagePassed++;
  } else {
    console.log(`  ❌ Insufficient hreflang tags (found ${hreflangTags.length}, need >= 2)`);
    pageFailed++;
  }
  
  console.log(`  📊 ${page.name}: ${pagePassed} passed, ${pageFailed} failed\n`);
  passed += pagePassed;
  failed += pageFailed;
});

console.log(`\n📊 Final Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
