<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { QUALITY_PROMISE_HIGHLIGHTS } from '@/data/brand_story'
import { CONTACT_INFO, getWhatsAppInquiryUrl } from '@/data/contact_info'
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const title = computed(() =>
  locale.value === 'ar' ? QUALITY_PROMISE_HIGHLIGHTS.title_ar : QUALITY_PROMISE_HIGHLIGHTS.title_en
)

const summary = computed(() =>
  locale.value === 'ar' ? QUALITY_PROMISE_HIGHLIGHTS.summary_ar : QUALITY_PROMISE_HIGHLIGHTS.summary_en
)

const complianceLinks = computed(() =>
  QUALITY_PROMISE_HIGHLIGHTS.complianceLinks.map((link) => ({
    label: locale.value === 'ar' ? link.title_ar : link.title_en,
    url: link.url,
  }))
)

const whatsappUrl = computed(() => getWhatsAppInquiryUrl('Quality Inquiry', locale.value))

const cta = computed(() => ({
  contact: locale.value === 'ar' ? 'تواصل معنا' : 'Contact Us',
  learnMore: locale.value === 'ar' ? 'تعرف على المزيد' : 'Learn More',
}))

onMounted(() => {
  initLanguage()
})
</script>

<template>
  <div class="container mx-auto px-4 py-4">
    <BreadcrumbNav client:load />
  </div>

  <!-- Hero Section -->
  <section class="py-16 md:py-24 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
        {{ title }}
      </h1>
      <p class="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {{ summary }}
      </p>
    </div>
  </section>

  <!-- Compliance Links as Cards -->
  <section class="pb-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <a
          v-for="link in complianceLinks"
          :key="link.url"
          :href="link.url"
          class="block"
        >
          <Card class="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent class="p-6 flex flex-col items-center text-center gap-4">
              <SafeIcon name="FileCheck" :size="40" class="text-primary" />
              <span class="font-medium text-foreground">{{ link.label }}</span>
            </CardContent>
          </Card>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-muted/30">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-2xl font-semibold text-foreground mb-6">
        {{ cta.contact }}
      </h2>
      <div class="flex flex-wrap justify-center gap-4">
        <Button as="a" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" size="lg">
          <SafeIcon name="MessageCircle" :size="18" class="mr-2" />
          WhatsApp
        </Button>
        <Button as="a" href="/compliance-safety" variant="outline" size="lg">
          {{ cta.learnMore }}
        </Button>
      </div>
    </div>
  </section>
</template>
