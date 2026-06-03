#!/usr/bin/env tsx
/**
 * 占位符扫描脚本
 * 扫描项目中所有占位符内容并生成报告
 * 
 * 使用方法:
 *   tsx scripts/scan-placeholders.ts
 *   npm run scan-placeholders
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface PlaceholderMatch {
  file: string
  line: number
  column: number
  match: string
  rule: string
  severity: 'error' | 'warning'
  context: string
}

interface ScanResult {
  matches: PlaceholderMatch[]
  summary: {
    total: number
    errors: number
    warnings: number
    byRule: Record<string, number>
    byFile: Record<string, number>
  }
}

const PLACEHOLDER_RULES = [
  {
    name: 'XXXX Placeholder',
    pattern: /\+966\d*XXXX|\+966XX+|KSA-VAT-\d*XXX|XXXX+/i,
    severity: 'error' as const,
    description: '包含 XXXX 的占位符（电话号码、VAT 号码等）'
  },
  {
    name: 'Lorem Ipsum',
    pattern: /lorem ipsum|Lorem Ipsum|LOREM IPSUM/i,
    severity: 'error' as const,
    description: 'Lorem Ipsum 假文本'
  },
  {
    name: 'TODO/FIXME',
    pattern: /\/\/.*(TODO|FIXME|HACK|BUG)/i,
    severity: 'warning' as const,
    description: '代码注释中的待办事项'
  },
  {
    name: 'TBD',
    pattern: /\/\/.*\bTBD\b|\/\/.*\btbd\b|\/\/.*To Be Determined|\/\/.*to be determined/i,
    severity: 'warning' as const,
    description: '待确定的内容'
  },
  {
    name: 'Placeholder Map URL',
    pattern: /maps\.app\.goo\.gl\/XXXXXXX|placeholder.*map/i,
    severity: 'error' as const,
    description: '占位符地图 URL'
  },
  {
    name: 'Example Domain',
    pattern: /example\.com|example\.org/i,
    severity: 'error' as const,
    description: '示例域名（非真实链接）'
  },
  {
    name: 'Unfinished Translation',
    pattern: /\[AR\]|\[EN\]|TODO.*translation|NEEDS.*TRANSLATION|NOT YET TRANSLATED|未翻译|需要翻译/i,
    severity: 'error' as const,
    description: '未完成的翻译'
  },
  {
    name: 'Moijibake/Garbage Characters',
    pattern: /[\uFFFD\uFFFE\uFFFF]|&#xFFFD;|�/,
    severity: 'error' as const,
    description: '乱码或编码错误'
  },
  {
    name: 'Test Phone Number',
    pattern: /\+96650XXXXXXX|\+96611XXXXXXX/,
    severity: 'error' as const,
    description: '测试电话号码'
  },
  {
    name: 'Test Email',
    pattern: /test@|mock@|example@|placeholder@/i,
    severity: 'error' as const,
    description: '测试邮箱地址'
  },
  {
    name: 'AI Generated Certificate',
    pattern: /AI.*generated|fake.*certificate|mock.*certificate|sample.*certificate/i,
    severity: 'warning' as const,
    description: 'AI 生成的证书（可能不是真实的）'
  },
  {
    name: 'Placeholder Image Path',
    pattern: /placeholder-\d+\.(jpg|png|svg)/i,
    severity: 'warning' as const,
    description: '占位符图片路径'
  },
  {
    name: 'Starting Price Placeholder',
    pattern: /Price on request|السعر عند الطلب/i,
    severity: 'warning' as const,
    description: '起始价格占位符'
  }
]

async function scanFile(filePath: string): Promise<PlaceholderMatch[]> {
  const matches: PlaceholderMatch[] = []
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const lines = content.split('\n')
    const relativePath = path.relative(__dirname, filePath)
    
    lines.forEach((line, index) => {
      PLACEHOLDER_RULES.forEach(rule => {
        const match = line.match(rule.pattern)
        if (match) {
          matches.push({
            file: relativePath,
            line: index + 1,
            column: line.indexOf(match[0]) + 1,
            match: match[0],
            rule: rule.name,
            severity: rule.severity,
            context: line.trim()
          })
        }
      })
    })
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
  }
  
  return matches
}

async function scanDirectory(dir: string, extensions: string[]): Promise<string[]> {
  const files: string[] = []
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      if (entry.isDirectory()) {
        // Skip node_modules, dist, .git, and reports
        if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git' || entry.name === 'reports') {
          continue
        }
        
        const subFiles = await scanDirectory(fullPath, extensions)
        files.push(...subFiles)
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name)
        if (extensions.includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error)
  }
  
  return files
}

function generateSummary(matches: PlaceholderMatch[]): ScanResult['summary'] {
  const summary: ScanResult['summary'] = {
    total: matches.length,
    errors: 0,
    warnings: 0,
    byRule: {},
    byFile: {}
  }
  
  matches.forEach(match => {
    // Count by severity
    if (match.severity === 'error') {
      summary.errors++
    } else {
      summary.warnings++
    }
    
    // Count by rule
    if (!summary.byRule[match.rule]) {
      summary.byRule[match.rule] = 0
    }
    summary.byRule[match.rule]++
    
    // Count by file
    if (!summary.byFile[match.file]) {
      summary.byFile[match.file] = 0
    }
    summary.byFile[match.file]++
  })
  
  return summary
}

function printReport(result: ScanResult): void {
  console.log('\n' + '='.repeat(80))
  console.log('🔍 占位符扫描报告')
  console.log('='.repeat(80) + '\n')
  
  if (result.matches.length === 0) {
    console.log('✅ 恭喜！没有发现占位符。\n')
    return
  }
  
  // Print summary
  console.log('📊 摘要:')
  console.log(`   总计: ${result.summary.total}`)
  console.log(`   错误: ${result.summary.errors}`)
  console.log(`   警告: ${result.summary.warnings}`)
  console.log()
  
  // Print by rule
  console.log('📋 按规则分类:')
  Object.entries(result.summary.byRule)
    .sort((a, b) => b[1] - a[1])
    .forEach(([rule, count]) => {
      console.log(`   ${rule}: ${count}`)
    })
  console.log()
  
  // Print by file
  console.log('📁 按文件分类:')
  Object.entries(result.summary.byFile)
    .sort((a, b) => b[1] - a[1])
    .forEach(([file, count]) => {
      console.log(`   ${file}: ${count}`)
    })
  console.log()
  
  // Print details
  console.log('📝 详细信息:')
  console.log('-'.repeat(80))
  
  result.matches.forEach((match, index) => {
    const icon = match.severity === 'error' ? '❌' : '⚠️'
    
    console.log(`\n${index + 1}. ${icon} ${match.rule}`)
    console.log(`   文件: ${match.file}`)
    console.log(`   位置: 第 ${match.line} 行，第 ${match.column} 列`)
    console.log(`   匹配: ${match.match}`)
    console.log(`   上下文: ${match.context.substring(0, 80)}${match.context.length > 80 ? '...' : ''}`)
  })
  
  console.log('\n' + '='.repeat(80))
  
  // Print fix suggestions
  console.log('\n🔧 修复建议:')
  console.log('-'.repeat(80))
  
  const errorMatches = result.matches.filter(m => m.severity === 'error')
  const warningMatches = result.matches.filter(m => m.severity === 'warning')
  
  if (errorMatches.length > 0) {
    console.log('\n❌ 错误（必须在生产前修复）:')
    const errorRules = [...new Set(errorMatches.map(m => m.rule))]
    
    errorRules.forEach(rule => {
      console.log(`\n   ${rule}:`)
      console.log(`   - 请将这些占位符替换为实际值`)
      console.log(`   - 受影响文件: ${errorMatches.filter(m => m.rule === rule).map(m => m.file).join(', ')}`)
    })
  }
  
  if (warningMatches.length > 0) {
    console.log('\n⚠️  警告（建议修复）:')
    const warningRules = [...new Set(warningMatches.map(m => m.rule))]
    
    warningRules.forEach(rule => {
      console.log(`\n   ${rule}:`)
      console.log(`   - 这些占位符可能会影响用户体验`)
      console.log(`   - 受影响文件: ${warningMatches.filter(m => m.rule === rule).map(m => m.file).join(', ')}`)
    })
  }
  
  console.log('\n' + '='.repeat(80) + '\n')
}

async function main() {
  console.log('🔍 开始扫描占位符...\n')
  
  // Scan source files (from project root, not scripts directory)
  const projectRoot = path.resolve(__dirname, '..')
  const extensions = ['.ts', '.vue', '.astro', '.js', '.jsx', '.tsx']
  const files = await scanDirectory(projectRoot, extensions)
  
  // Filter out scan-placeholders.ts itself
  const filteredFiles = files.filter(f => !f.includes('scan-placeholders.ts'))
  
  console.log(`📂 扫描了 ${filteredFiles.length} 个文件\n`)
  
  // Scan each file
  const allMatches: PlaceholderMatch[] = []
  
  for (const file of filteredFiles) {
    const matches = await scanFile(file)
    allMatches.push(...matches)
  }
  
  // Generate result
  const result: ScanResult = {
    matches: allMatches,
    summary: generateSummary(allMatches)
  }
  
  // Print report
  printReport(result)
  
  // Save report to file
  const reportPath = path.join(projectRoot, 'reports/placeholder-scan-report.json')
  fs.mkdirSync(path.dirname(reportPath), { recursive: true })
  fs.writeFileSync(reportPath, JSON.stringify(result, null, 2))
  console.log(`📄 报告已保存到: ${reportPath}\n`)
  
  // Exit with error if there are errors
  if (result.summary.errors > 0) {
    console.error(`❌ 发现 ${result.summary.errors} 个错误，请在构建前修复。\n`)
    process.exit(1)
  } else if (result.summary.warnings > 0) {
    console.warn(`⚠️  发现 ${result.summary.warnings} 个警告，建议修复。\n`)
    process.exit(0)
  } else {
    console.log('✅ 没有发现问题。\n')
    process.exit(0)
  }
}

// Add script to package.json
function addScriptToPackageJson() {
  const packageJsonPath = path.join(__dirname, '../package.json')
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
    
    if (!packageJson.scripts['scan-placeholders']) {
      packageJson.scripts['scan-placeholders'] = 'tsx scripts/scan-placeholders.ts'
      
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
      console.log('✅ 已添加 "scan-placeholders" 脚本到 package.json\n')
    }
  } catch (error) {
    console.error('Error updating package.json:', error)
  }
}

// Run
addScriptToPackageJson()
main().catch(error => {
  console.error('扫描失败:', error)
  process.exit(1)
})
