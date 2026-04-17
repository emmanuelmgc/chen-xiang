# NAFHA项目清理脚本 - 上传GitHub前执行
# 运行方式：在PowerShell中执行此脚本

$projectPath = "C:\Users\Emmanuel\WorkBuddy\20260416102521\chen-xiang\chen-xiang-main"

Write-Host "开始清理项目..." -ForegroundColor Cyan

# 删除不需要上传的文件夹/文件
$itemsToDelete = @(
    "dist",
    "scripts",
    "pnpm-lock.yaml",
    "code.rar"
)

foreach ($item in $itemsToDelete) {
    $fullPath = Join-Path $projectPath $item
    if (Test-Path $fullPath) {
        Remove-Item -Path $fullPath -Recurse -Force
        Write-Host "已删除: $item" -ForegroundColor Green
    } else {
        Write-Host "未找到: $item (跳过)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "清理完成！" -ForegroundColor Green
Write-Host ""
Write-Host "现在上传以下内容到GitHub:" -ForegroundColor Cyan
Write-Host "  - src/"
Write-Host "  - package.json"
Write-Host "  - package-lock.json"
Write-Host "  - astro.config.mjs"
Write-Host "  - tailwind.config.mjs"
Write-Host "  - tsconfig.json"
Write-Host "  - components.json"
Write-Host "  - postcss.config.mjs"
Write-Host "  - .gitignore"
Write-Host ""
Write-Host "上传后，运行 'npm install' 来安装依赖" -ForegroundColor Yellow
