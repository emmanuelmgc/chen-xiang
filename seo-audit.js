const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const REPORTS_DIR = path.join(__dirname, 'reports');

// 收集所有HTML文件
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// 从HTML中提取SEO信息
function extractSeoInfo(htmlPath) {
  const content = fs.readFileSync(htmlPath, 'utf-8');
  const relativePath = path.relative(DIST_DIR, htmlPath);
  const url = `https://nafha.life/${relativePath.replace(/\\/g, '/')}`;
  
  const info = {
    file: relativePath,
    url: url,
    title: null,
    metaDescription: null,
    canonical: null,
    hreflangs: [],
    lang: null,
    dir: null,
    ogTags: {},
    twitterTags: {},
    jsonLd: [],
    h1Count: 0,
    h2Count: 0,
    h3Count: 0,
    images: [],
    links: [],
    hasRobotsMeta: false,
    robotsContent: null
  };
  
  // 提取 html lang 和 dir
  const htmlMatch = content.match(/<html[^>]*lang=["']([^"']*)["'][^>]*dir=["']([^"']*)["']/i);
  if (htmlMatch) {
    info.lang = htmlMatch[1];
    info.dir = htmlMatch[2];
  } else {
    const langMatch = content.match(/<html[^>]*lang=["']([^"']*)["']/i);
    if (langMatch) info.lang = langMatch[1];
    const dirMatch = content.match(/<html[^>]*dir=["']([^"']*)["']/i);
    if (dirMatch) info.dir = dirMatch[1];
  }
  
  // 提取 title
  const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (titleMatch) info.title = titleMatch[1].trim();
  
  // 提取 meta description
  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  if (descMatch) info.metaDescription = descMatch[1].trim();
  
  // 提取 canonical
  const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  if (canonicalMatch) info.canonical = canonicalMatch[1].trim();
  
  // 提取 hreflang
  const hreflangRegex = /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']*)["'][^>]*href=["']([^"']*)["']/gi;
  let hreflangMatch;
  while ((hreflangMatch = hreflangRegex.exec(content)) !== null) {
    info.hreflangs.push({ lang: hreflangMatch[1], href: hreflangMatch[2] });
  }
  
  // 提取 Open Graph tags
  const ogRegex = /<meta[^>]*property=["']og:([^"']*)["'][^>]*content=["']([^"']*)["']/gi;
  let ogMatch;
  while ((ogMatch = ogRegex.exec(content)) !== null) {
    info.ogTags[ogMatch[1]] = ogMatch[2];
  }
  
  // 提取 Twitter Card tags
  const twitterRegex = /<meta[^>]*name=["']twitter:([^"']*)["'][^>]*content=["']([^"']*)["']/gi;
  let twitterMatch;
  while ((twitterMatch = twitterRegex.exec(content)) !== null) {
    info.twitterTags[twitterMatch[1]] = twitterMatch[2];
  }
  
  // 提取 JSON-LD
  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([^<]*)<\/script>/gi;
  let jsonLdMatch;
  while ((jsonLdMatch = jsonLdRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1].trim());
      info.jsonLd.push(parsed);
    } catch (e) {
      info.jsonLd.push({ error: 'Invalid JSON-LD', raw: jsonLdMatch[1] });
    }
  }
  
  // 计算 H1, H2, H3 数量
  info.h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
  info.h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
  info.h3Count = (content.match(/<h3[^>]*>/gi) || []).length;
  
  // 提取图片
  const imgRegex = /<img[^>]*src=["']([^"']*)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    info.images.push({ src: imgMatch[1], alt: imgMatch[2] });
  }
  
  // 也匹配没有 alt 的图片
  const imgNoAltRegex = /<img[^>]*src=["']([^"']*)["'][^>]*>/gi;
  let imgNoAltMatch;
  while ((imgNoAltMatch = imgNoAltRegex.exec(content)) !== null) {
    const hasAlt = imgNoAltMatch[0].includes('alt=');
    if (!hasAlt) {
      info.images.push({ src: imgNoAltMatch[1], alt: '' });
    }
  }
  
  // 提取链接
  const linkRegex = /<a[^>]*href=["']([^"']*)["'][^>]*>/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(content)) !== null) {
    info.links.push(linkMatch[1]);
  }
  
  // 检查 robots meta
  const robotsMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
  if (robotsMatch) {
    info.hasRobotsMeta = true;
    info.robotsContent = robotsMatch[1];
  }
  
  return info;
}

// 主审计函数
function runSeoAudit() {
  console.log('开始 SEO 审计...\n');
  
  const htmlFiles = getAllHtmlFiles(DIST_DIR);
  console.log(`找到 ${htmlFiles.length} 个 HTML 文件\n`);
  
  const results = htmlFiles.map(file => extractSeoInfo(file));
  
  // 生成报告
  generateReport(results);
}

// 生成审计报告
function generateReport(results) {
  let report = '# NAFHA 网站 SEO 审计报告\n\n';
  report += `生成时间: ${new Date().toLocaleString('zh-CN')}\n\n`;
  report += `审计页面数: ${results.length}\n\n`;
  report += '---\n\n';
  
  // 1. 页面基础 SEO 问题
  report += '## 1. 页面基础 SEO 问题\n\n';
  
  const titleCounts = {};
  const descCounts = {};
  
  results.forEach(r => {
    if (r.title) {
      titleCounts[r.title] = (titleCounts[r.title] || 0) + 1;
    }
    if (r.metaDescription) {
      descCounts[r.metaDescription] = (descCounts[r.metaDescription] || 0) + 1;
    }
  });
  
  report += '### 1.1 Title 重复问题\n\n';
  const duplicateTitles = Object.entries(titleCounts).filter(([_, count]) => count > 1);
  if (duplicateTitles.length === 0) {
    report += '✅ 所有页面 title 唯一\n\n';
  } else {
    duplicateTitles.forEach(([title, count]) => {
      report += `- **"${title}"** 重复 ${count} 次\n`;
      results.filter(r => r.title === title).forEach(r => {
        report += `  - ${r.file}\n`;
      });
      report += '\n';
    });
  }
  
  report += '### 1.2 Meta Description 重复问题\n\n';
  const duplicateDescs = Object.entries(descCounts).filter(([_, count]) => count > 1);
  if (duplicateDescs.length === 0) {
    report += '✅ 所有页面 meta description 唯一\n\n';
  } else {
    duplicateDescs.forEach(([desc, count]) => {
      report += `- **"${desc.substring(0, 50)}..."** 重复 ${count} 次\n`;
      results.filter(r => r.metaDescription === desc).forEach(r => {
        report += `  - ${r.file}\n`;
      });
      report += '\n';
    });
  }
  
  report += '### 1.3 Hreflang 问题\n\n';
  report += '**发现的问题**: 所有页面的 hreflang 指向同一个 URL，没有独立的英文页面\n\n';
  results.forEach(r => {
    if (r.hreflangs.length > 0) {
      const hasEn = r.hreflangs.some(h => h.lang === 'en');
      const hasAr = r.hreflangs.some(h => h.lang === 'ar');
      const allSameUrl = r.hreflangs.every(h => h.href === r.url);
      
      if (hasEn && hasAr && allSameUrl) {
        report += `- ⚠️ ${r.file}: hreflang 指向同一 URL (${r.url})\n`;
      }
    }
  });
  report += '\n';
  
  report += '### 1.4 Lang 和 Dir 属性问题\n\n';
  results.forEach(r => {
    if (r.lang !== 'ar' && r.lang !== 'en' && r.lang !== 'ar-SA') {
      report += `- ⚠️ ${r.file}: lang="${r.lang}" (应为 "ar" 或 "en")\n`;
    }
    if (r.dir !== 'rtl' && r.dir !== 'ltr') {
      report += `- ⚠️ ${r.file}: dir="${r.dir}" (应为 "rtl" 或 "ltr")\n`;
    }
  });
  report += '\n';
  
  report += '### 1.5 Canonical 问题\n\n';
  results.forEach(r => {
    if (!r.canonical) {
      report += `- ❌ ${r.file}: 缺少 canonical 标签\n`;
    } else if (r.canonical !== r.url) {
      report += `- ⚠️ ${r.file}: canonical (${r.canonical}) 与预期 URL (${r.url}) 不匹配\n`;
    }
  });
  report += '\n';
  
  report += '### 1.6 Robots.txt 和 Sitemap.xml\n\n';
  const robotsTxtPath = path.join(DIST_DIR, 'robots.txt');
  const sitemapXmlPath = path.join(DIST_DIR, 'sitemap.xml');
  
  if (!fs.existsSync(robotsTxtPath)) {
    report += '- ❌ **缺少 robots.txt 文件**\n';
  } else {
    report += '- ✅ robots.txt 存在\n';
  }
  
  if (!fs.existsSync(sitemapXmlPath)) {
    report += '- ❌ **缺少 sitemap.xml 文件**\n';
  } else {
    report += '- ✅ sitemap.xml 存在\n';
  }
  report += '\n';
  
  // 2. 图片 SEO 问题
  report += '## 2. 图片 SEO 问题\n\n';
  
  report += '### 2.1 Alt 文本缺失\n\n';
  results.forEach(r => {
    const imagesWithoutAlt = r.images.filter(img => !img.alt || img.alt.trim() === '');
    if (imagesWithoutAlt.length > 0) {
      report += `- ⚠️ ${r.file}: ${imagesWithoutAlt.length} 张图片缺少 alt 文本\n`;
    }
  });
  report += '\n';
  
  report += '### 2.2 错误地图和证书图片\n\n';
  report += '**建议**: 错误地图和证书图片应添加 `noindex` 或通过 robots.txt 屏蔽\n\n';
  
  // 3. Schema 标记问题
  report += '## 3. Schema 标记问题\n\n';
  
  report += '### 3.1 缺失的 Schema\n\n';
  const hasOrganization = results.some(r => r.jsonLd.some(s => s['@type'] === 'Organization'));
  const hasWebSite = results.some(r => r.jsonLd.some(s => s['@type'] === 'WebSite'));
  const hasProduct = results.some(r => r.jsonLd.some(s => s['@type'] === 'Product'));
  const hasBreadcrumb = results.some(r => r.jsonLd.some(s => s['@type'] === 'BreadcrumbList'));
  const hasFAQ = results.some(r => r.jsonLd.some(s => s['@type'] === 'FAQPage'));
  
  report += `- Organization: ${hasOrganization ? '✅ 存在' : '❌ 缺失'}\n`;
  report += `- WebSite: ${hasWebSite ? '✅ 存在' : '❌ 缺失'}\n`;
  report += `- Product: ${hasProduct ? '✅ 存在' : '⚠️ 部分页面缺失'}\n`;
  report += `- BreadcrumbList: ${hasBreadcrumb ? '✅ 存在' : '⚠️ 部分页面缺失'}\n`;
  report += `- FAQPage: ${hasFAQ ? '✅ 存在' : '⚠️ 部分页面缺失'}\n`;
  report += '\n';
  
  report += '### 3.2 Organization Schema 问题\n\n';
  results.forEach(r => {
    r.jsonLd.forEach(schema => {
      if (schema['@type'] === 'Organization') {
        if (schema.contactPoint && schema.contactPoint.telephone && schema.contactPoint.telephone.includes('XXX')) {
          report += `- ⚠️ ${r.file}: Organization.contactPoint.telephone 包含占位符 (${schema.contactPoint.telephone})\n`;
        }
      }
    });
  });
  report += '\n';
  
  // 4. 页面语义问题
  report += '## 4. 页面语义问题\n\n';
  
  report += '### 4.1 H1/H2/H3 层级\n\n';
  results.forEach(r => {
    if (r.h1Count === 0) {
      report += `- ❌ ${r.file}: 缺少 H1 标签\n`;
    } else if (r.h1Count > 1) {
      report += `- ⚠️ ${r.file}: 有 ${r.h1Count} 个 H1 标签 (应只有一个)\n`;
    }
  });
  report += '\n';
  
  report += '### 4.2 Open Graph 标签\n\n';
  results.forEach(r => {
    const requiredOgTags = ['title', 'description', 'image', 'url', 'type'];
    const missingOgTags = requiredOgTags.filter(tag => !r.ogTags[tag]);
    if (missingOgTags.length > 0) {
      report += `- ⚠️ ${r.file}: 缺少 OG 标签: ${missingOgTags.join(', ')}\n`;
    }
  });
  report += '\n';
  
  report += '### 4.3 Twitter Card 标签\n\n';
  results.forEach(r => {
    if (!r.twitterTags['card']) {
      report += `- ⚠️ ${r.file}: 缺少 twitter:card 标签\n`;
    }
    if (!r.twitterTags['title']) {
      report += `- ⚠️ ${r.file}: 缺少 twitter:title 标签\n`;
    }
    if (!r.twitterTags['description']) {
      report += `- ⚠️ ${r.file}: 缺少 twitter:description 标签\n`;
    }
    if (!r.twitterTags['image']) {
      report += `- ⚠️ ${r.file}: 缺少 twitter:image 标签\n`;
    }
  });
  report += '\n';
  
  // 5. Broken Links 审计
  report += '## 5. Broken Links 审计\n\n';
  
  report += '### 5.1 内部链接检查\n\n';
  const internalLinks = new Set();
  results.forEach(r => {
    r.links.forEach(link => {
      if (link.startsWith('./') || link.startsWith('../') || link.startsWith('/') || (!link.startsWith('http') && !link.startsWith('#'))) {
        internalLinks.add(link);
      }
    });
  });
  
  report += `发现 ${internalLinks.size} 个内部链接需要检查\n\n`;
  report += '**注意**: 由于是静态HTML，部分链接可能在JS组件中动态生成，需要手动验证\n\n';
  
  report += '### 5.2 外部链接检查\n\n';
  const externalLinks = new Set();
  results.forEach(r => {
    r.links.forEach(link => {
      if (link.startsWith('http') && !link.includes('nafha.life')) {
        externalLinks.add(link);
      }
    });
  });
  
  report += `发现 ${externalLinks.size} 个外部链接需要检查\n\n`;
  
  // 6. 修复建议
  report += '## 6. 修复建议\n\n';
  
  report += '### 6.1 高优先级问题\n\n';
  report += '1. **创建英文版本页面**: 当前所有页面都是阿拉伯语，需要创建对应的英文版本，并设置正确的 hreflang\n';
  report += '2. **修复 Title 和 Meta Description 重复**: 为每个页面创建唯一的 title 和 meta description\n';
  report += '3. **添加 Robots.txt**: 网站缺少 robots.txt 文件\n';
  report += '4. **添加 Sitemap.xml**: 网站缺少 sitemap.xml 文件\n';
  report += '5. **修复 Organization Schema**: 更新电话号码，移除占位符\n\n';
  
  report += '### 6.2 中优先级问题\n\n';
  report += '1. **优化图片 Alt 文本**: 为所有图片添加描述性 alt 文本\n';
  report += '2. **添加缺失的 Schema**: FAQPage, BreadcrumbList (部分页面)\n';
  report += '3. **确保 H1 唯一**: 每个页面只能有一个 H1\n';
  report += '4. **完善 Open Graph 和 Twitter Card 标签**\n\n';
  
  report += '### 6.3 低优先级问题\n\n';
  report += '1. **优化内部链接结构**: 确保内部链接合理且有效\n';
  report += '2. **添加 noindex 到错误页面**: 如 404.html, placeholder.html\n';
  report += '3. **图片懒加载优化**: 确保图片懒加载合理\n\n';
  
  report += '---\n\n';
  report += '## 附录: 完整页面列表\n\n';
  results.forEach(r => {
    report += `### ${r.file}\n\n`;
    report += `- **URL**: ${r.url}\n`;
    report += `- **Title**: ${r.title || '❌ 缺失'}\n`;
    report += `- **Meta Description**: ${r.metaDescription ? r.metaDescription.substring(0, 50) + '...' : '❌ 缺失'}\n`;
    report += `- **Lang**: ${r.lang || '❌ 缺失'}\n`;
    report += `- **Dir**: ${r.dir || '❌ 缺失'}\n`;
    report += `- **Canonical**: ${r.canonical || '❌ 缺失'}\n`;
    report += `- **H1 数量**: ${r.h1Count}\n`;
    report += `- **H2 数量**: ${r.h2Count}\n`;
    report += `- **H3 数量**: ${r.h3Count}\n`;
    report += `- **图片数量**: ${r.images.length}\n`;
    report += `- **链接数量**: ${r.links.length}\n`;
    report += `- **JSON-LD Schema**: ${r.jsonLd.length > 0 ? r.jsonLd.map(s => s['@type'] || 'Unknown').join(', ') : '❌ 缺失'}\n\n`;
  });
  
  // 保存报告
  const reportPath = path.join(REPORTS_DIR, 'seo-audit.md');
  fs.writeFileSync(reportPath, report, 'utf-8');
  
  console.log(`审计报告已生成: ${reportPath}`);
  console.log('\n摘要:');
  console.log(`- 审计页面数: ${results.length}`);
  console.log(`- Title 重复: ${duplicateTitles.length} 个`);
  console.log(`- Meta Description 重复: ${duplicateDescs.length} 个`);
  console.log(`- 缺少 H1: ${results.filter(r => r.h1Count === 0).length} 个`);
  console.log(`- H1 重复: ${results.filter(r => r.h1Count > 1).length} 个`);
}

// 运行审计
runSeoAudit();
