
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'
import { CONTACT_INFO } from '@/data/contact_info'

const { locale, initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})

interface Props {
  variant?: 'complex' | 'simple'
}

withDefaults(defineProps<Props>(), {
  variant: 'simple'
})

const currentYear = new Date().getFullYear()

const email = ref('')
const subscribed = ref(false)
const subscribing = ref(false)

const handleSubscribe = async () => {
  if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) return
  subscribing.value = true
  // Simulate API call — replace with actual endpoint when available
  await new Promise(r => setTimeout(r, 800))
  subscribing.value = false
  subscribed.value = true
  email.value = ''
  setTimeout(() => { subscribed.value = false }, 4000)
}

const serviceLinks = [
  { label_ar: 'كيفية الاستخدام', label_en: 'How to Use', href: '/help-center.html' },
  { label_ar: 'السلامة والتخزين', label_en: 'Safety & Storage', href: '/help-center.html' },
  { label_ar: 'الاستفسار والتسعير', label_en: 'Inquiries & Pricing', href: '/help-center.html' },
]

const companyLinks = [
  { label_ar: 'من نحن', label_en: 'About Us', href: '/about.html' },
  { label_ar: 'قصتنا', label_en: 'Our Story', href: '/our-story.html' },
  { label_ar: 'المصدر والحرفة', label_en: 'Sourcing & Craft', href: '/sourcing-craft.html' },
  { label_ar: 'وعد الجودة', label_en: 'Quality Promise', href: '/quality-promise.html' },
]

const legalLinks = [
  { label_ar: 'الخصوصية وملفات تعريف الارتباط', label_en: 'Privacy & Cookie Policy', href: '/privacy-cookie-policy.html' },
  { label_ar: 'شروط الخدمة', label_en: 'Terms of Service', href: '/terms-of-service.html' },
  { label_ar: 'إشعار سلامة المنتج', label_en: 'Product Safety Notice', href: '/product-safety-notice.html' },
  { label_ar: 'معلومات الشركة', label_en: 'Company Information', href: '/company-identity-card.html' },
]

const socialLinks = CONTACT_INFO.socialMedia.map(s => ({
  icon: s.iconName,
  href: s.url,
  label: s.platform,
}))

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
            <form @submit.prevent="handleSubscribe" class="flex gap-2 flex-1">
              <Input
                v-model="email"
                type="email"
                :placeholder="locale === 'ar' ? 'بريدك الإلكتروني' : 'Your email'"
                class="flex-1"
                required
              />
              <Button type="submit" variant="default" size="icon" :disabled="subscribing">
                <SafeIcon v-if="!subscribing" name="Send" :size="18" />
                <span v-else class="inline-block w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
              </Button>
            </form>
          </div>
          <Transition name="fade">
            <p v-if="subscribed" class="mt-2 text-sm text-green-600">
              {{ locale === 'ar' ? '✓ تم الاشتراك بنجاح!' : '✓ Successfully subscribed!' }}
            </p>
          </Transition>
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
          {{ locale === 'ar' ? `©${currentYear} نفحة NAFHA. جميع الحقوق محفوظة.` : `©${currentYear} Nafha NAFHA. All rights reserved.` }}
        </p>
      </div>
    </div>

    <!-- Simple Footer -->
    <div v-else class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          <a href="/about.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            {{ locale === 'ar' ? 'من نحن' : 'About' }}
          </a>
          <a href="/help-center.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            {{ locale === 'ar' ? 'المساعدة' : 'Help' }}
          </a>
          <a href="/compliance-safety.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            {{ locale === 'ar' ? 'الامتثال والسلامة' : 'Compliance & Safety' }}
          </a>
          <a href="/contact.html" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            {{ locale === 'ar' ? 'اتصل بنا' : 'Contact' }}
          </a>
        </div>
        <p class="text-sm text-muted-foreground">
          {{ locale === 'ar' ? `© ${currentYear} نفحة NAFHA` : `© ${currentYear} Nafha NAFHA` }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
