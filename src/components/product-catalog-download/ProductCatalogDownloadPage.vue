<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { CONTACT_INFO, getWhatsAppInquiryUrl } from '@/data/contact_info'
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const pageData = computed(() => {
  const isAr = locale.value === 'ar'
  return {
    heroTitle: isAr ? 'كتالوج NAFHA 2026' : 'NAFHA Catalog 2026',
    heroSummary: isAr
      ? 'اكتشف مجموعتنا الكاملة من البخور والعود. حمّل الكتالوج للاطلاع على التفاصيل والأسعار.'
      : 'Discover our complete collection of incense and Oud. Download the catalog for full details and pricing.',
    downloadButton: isAr ? 'تحميل الكتالوج (PDF)' : 'Download Catalog (PDF)',
    orContact: isAr ? 'أو تواصل معنا مباشرة' : 'Or contact us directly',
    whatsappButton: isAr ? 'استفسر عبر واتساب' : 'Inquire via WhatsApp',
    emailSection: isAr ? 'أرسل بريداً إلكترونياً' : 'Send an email',
  }
})

const catalogUrl = computed(() => CONTACT_INFO.catalogDownloadUrl)

const whatsappUrl = computed(() => getWhatsAppInquiryUrl('B2B Catalog Request', locale.value))

onMounted(() => {
  initLanguage()
})
</script>

<template>
  <div class="container mx-auto px-4 py-4">
    <BreadcrumbNav client:load />
  </div>

  <!-- Hero Section -->
  <section class="py-20 md:py-32 text-center">
    <div class="container mx-auto px-4 max-w-2xl">
      <SafeIcon name="FileDown" :size="64" class="text-primary mx-auto mb-8" />
      <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
        {{ pageData.heroTitle }}
      </h1>
      <p class="text-lg text-muted-foreground leading-relaxed mb-10">
        {{ pageData.heroSummary }}
      </p>

      <Button as="a" :href="catalogUrl" target="_blank" rel="noopener noreferrer" size="lg" class="text-base px-8 py-6">
        <SafeIcon name="Download" :size="20" class="mr-2" />
        {{ pageData.downloadButton }}
      </Button>

      <p class="mt-8 text-sm text-muted-foreground">{{ pageData.orContact }}</p>

      <div class="flex flex-wrap justify-center gap-4 mt-6">
        <Button as="a" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
          <SafeIcon name="MessageCircle" :size="18" class="mr-2" />
          {{ pageData.whatsappButton }}
        </Button>
        <Button as="a" :href="`mailto:${CONTACT_INFO.email}`" variant="outline" size="lg">
          <SafeIcon name="Mail" :size="18" class="mr-2" />
          {{ pageData.emailSection }}
        </Button>
      </div>
    </div>
  </section>
</template>
