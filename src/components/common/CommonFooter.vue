
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

interface Props {
  variant?: 'complex' | 'simple'
}

withDefaults(defineProps<Props>(), {
  variant: 'simple'
})

const serviceLinks = [
  { label_ar: 'كيفية الاستخدام', label_en: 'How to Use', href: './help-center.html' },
  { label_ar: 'السلامة والتخزين', label_en: 'Safety & Storage', href: './help-center.html' },
  { label_ar: 'الاستفسار والتسعير', label_en: 'Inquiries & Pricing', href: './help-center.html' },
]

const companyLinks = [
  { label_ar: 'من نحن', label_en: 'About Us', href: './about.html' },
  { label_ar: 'قصتنا', label_en: 'Our Story', href: './our-story.html' },
  { label_ar: 'المصدر والحرفة', label_en: 'Sourcing & Craft', href: './sourcing-craft.html' },
  { label_ar: 'وعد الجودة', label_en: 'Quality Promise', href: './quality-promise.html' },
]

const legalLinks = [
  { label_ar: 'الخصوصية وملفات تعريف الارتباط', label_en: 'Privacy & Cookie Policy', href: './privacy-cookie-policy.html' },
  { label_ar: 'شروط الخدمة', label_en: 'Terms of Service', href: './terms-of-service.html' },
  { label_ar: 'إشعار سلامة المنتج', label_en: 'Product Safety Notice', href: './product-safety-notice.html' },
  { label_ar: 'معلومات الشركة', label_en: 'Company Information', href: './company-identity-card.html' },
]

const socialLinks = [
  { icon: 'Instagram', href: '#', label: 'Instagram' },
  { icon: 'Twitter', href: '#', label: 'Twitter' },
  { icon: 'Facebook', href: '#', label: 'Facebook' },
]

const getLinkLabel = (item: typeof serviceLinks[0]) => {
  return locale.value === 'ar' ? item.label_ar : item.label_en
}
</script>

<template>
  <footer class="bg-background border-t border-border/30 mt-auto">
    <!-- Complex Footer -->
    <div v-if="variant === 'complex'" class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Service Links -->
        <div>
          <h3 class="text-sm font-bold text-foreground mb-4">{{ locale === 'ar' ? 'الخدمات' : 'Services' }}</h3>
          <ul class="space-y-2">
            <li v-for="link in serviceLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                {{ getLinkLabel(link) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="text-sm font-bold text-foreground mb-4">{{ locale === 'ar' ? 'الشركة' : 'Company' }}</h3>
          <ul class="space-y-2">
            <li v-for="link in companyLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                {{ getLinkLabel(link) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Links -->
        <div>
          <h3 class="text-sm font-bold text-foreground mb-4">{{ locale === 'ar' ? 'القانونية' : 'Legal' }}</h3>
          <ul class="space-y-2">
            <li v-for="link in legalLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                {{ getLinkLabel(link) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-sm font-bold text-foreground mb-4">{{ locale === 'ar' ? 'ابق على اطلاع' : 'Stay Updated' }}</h3>
          <p class="text-sm text-muted-foreground mb-4">
            {{ locale === 'ar' ? 'اشترك للحصول على آخر الأخبار والعروض' : 'Subscribe for the latest news and offers' }}
          </p>
          <div class="flex gap-2">
            <Input 
              type="email" 
              :placeholder="locale === 'ar' ? 'بريدك الإلكتروني' : 'Your email'"
              class="flex-1"
            />
            <Button variant="default" size="icon">
              <SafeIcon name="Send" :size="18" />
            </Button>
          </div>
        </div>
      </div>

      <!-- Social & Copyright -->
      <div class="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-2">
          <Button
            v-for="social in socialLinks"
            :key="social.label"
            variant="ghost"
            size="icon"
            :aria-label="social.label"
            as="a"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SafeIcon :name="social.icon" :size="20" />
          </Button>
        </div>
        <p class="text-sm text-muted-foreground">
          {{ locale === 'ar' ? '©2026 نفحة NAFHA. جميع الحقوق محفوظة.' : '©2026 Nafha NAFHA. All rights reserved.' }}
        </p>
      </div>
    </div>

    <!-- Simple Footer -->
    <div v-else class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          <a href="./about.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            {{ locale === 'ar' ? 'من نحن' : 'About' }}
          </a>
          <a href="./help-center.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            {{ locale === 'ar' ? 'المساعدة' : 'Help' }}
          </a>
          <a href="./compliance-safety.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            {{ locale === 'ar' ? 'الامتثال والسلامة' : 'Compliance & Safety' }}
          </a>
          <a href="./contact.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            {{ locale === 'ar' ? 'اتصل بنا' : 'Contact' }}
          </a>
        </div>
        <p class="text-sm text-muted-foreground">
          {{ locale === 'ar' ? '© 2024 نفحة NAFHA' : '© 2024 Nafha NAFHA' }}
        </p>
      </div>
    </div>
  </footer>
</template>
