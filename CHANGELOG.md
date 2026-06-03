# Changelog

All notable changes to the NAFHA website project are documented here.

## [Unreleased]

### Added
- Meta descriptions for all pages (AR/EN)
- Hreflang tags for AR/EN pages
- Canonical URL support
- Organization Schema JSON-LD
- robots.txt and sitemap.xml

### Fixed
- Duplicate title tags (homepage and内幕 pages)
- BrandStorySection.vue: only append Chinese period 。 for Arabic locale, not English
- products.ts: replace invalid icon name "Tongs" with "Hand" (available in lucide-vue-next)
- CSS layout issues in FAQSection, B2BUseCases, MaterialExplanation
- Sourcing page paragraph separator logic
- Mobile styles consistency

### Changed
- Optimized SVG illustrations (removed inline width/height for CSS control)
- Improved responsive layout and RTL support

## [2025-01-XX] - Initial Release
- Basic website structure
- AR/EN bilingual support
- Product catalog and detail pages
- B2B and sourcing pages
