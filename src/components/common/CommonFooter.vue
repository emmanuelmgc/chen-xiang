
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  variant?: 'complex' | 'simple'
}

withDefaults(defineProps<Props>(), {
  variant: 'simple'
})

const serviceLinks = [
  { label: 'كيفية الاستخدام', href: './help-center.html' },
  { label: 'السلامة والتخزين', href: './help-center.html' },
  { label: 'الاستفسار والتسعير', href: './help-center.html' },
]

const companyLinks = [
  { label: 'من نحن', href: './about.html' },
  { label: 'قصتنا', href: './our-story.html' },
  { label: 'المصدر والحرفة', href: './sourcing-craft.html' },
  { label: 'وعد الجودة', href: './quality-promise.html' },
]

const legalLinks = [
  { label: 'الخصوصية وملفات تعريف الارتباط', href: './privacy-cookie-policy.html' },
  { label: 'شروط الخدمة', href: './terms-of-service.html' },
  { label: 'إشعار سلامة المنتج', href: './product-safety-notice.html' },
  { label: 'معلومات الشركة', href: './company-identity-card.html' },
]

const socialLinks = [
  { icon: 'Instagram', href: '#', label: 'Instagram' },
  { icon: 'Twitter', href: '#', label: 'Twitter' },
  { icon: 'Facebook', href: '#', label: 'Facebook' },
]
</script>

<template>
  <footer class="bg-background border-t border-border/30 mt-auto">
    <!-- Complex Footer -->
    <div v-if="variant === 'complex'" class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Service Links -->
        <div>
          <h3 class="text-sm font-bold text-foreground mb-4">الخدمات</h3>
          <ul class="space-y-2">
            <li v-for="link in serviceLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="text-sm font-bold text-foreground mb-4">الشركة</h3>
          <ul class="space-y-2">
            <li v-for="link in companyLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Links -->
        <div>
          <h3 class="text-sm font-bold text-foreground mb-4">القانونية</h3>
          <ul class="space-y-2">
            <li v-for="link in legalLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-sm font-bold text-foreground mb-4">ابق على اطلاع</h3>
          <p class="text-sm text-muted-foreground mb-4">
            اشترك للحصول على آخر الأخبار والعروض
          </p>
          <div class="flex gap-2">
            <Input 
              type="email" 
              placeholder="بريدك الإلكتروني"
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
<p id="iih8fl" class="text-sm text-muted-foreground">
          ©2026 نفحة NAFHA. جميع الحقوق محفوظة.
        </p>
      </div>
    </div>

    <!-- Simple Footer -->
    <div v-else class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          <a href="./about.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            من نحن
          </a>
          <a href="./help-center.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            المساعدة
          </a>
          <a href="./compliance-safety.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            الامتثال والسلامة
          </a>
          <a href="./contact.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            اتصل بنا
          </a>
        </div>
        <p class="text-sm text-muted-foreground">
          © 2024 نفحة NAFHA
        </p>
      </div>
    </div>
  </footer>
</template>
