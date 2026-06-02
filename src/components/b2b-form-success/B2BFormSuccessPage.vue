<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { CONTACT_INFO } from '@/data/contact_info'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const whatsappUrl = computed(() => {
  const isAr = locale.value === 'ar'
  const message = isAr
    ? 'مرحباً NAFHA، لقد قدمت استفساراً عبر النموذج وأود المتابعة.'
    : 'Hello NAFHA, I submitted an inquiry via the form and would like to follow up.'
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`
})

const pageData = computed(() => {
  const isAr = locale.value === 'ar'
  return {
    successTitle: isAr ? 'تم إرسال استفسارك بنجاح' : 'Your Inquiry Has Been Sent Successfully',
    successMessage: isAr
      ? 'شكراً لتواصلكم مع NAFHA. سيقوم فريقنا بمراجعة استفساركم والرد عليكم في أقرب وقت ممكن عبر البريد الإلكتروني أو الواتساب.'
      : 'Thank you for reaching out to NAFHA. Our team will review your inquiry and respond as soon as possible via email or WhatsApp.',
    browseCollections: isAr ? 'تصفح مجموعاتنا' : 'Browse Our Collections',
    contactWhatsApp: isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp',
    backHome: isAr ? 'العودة للرئيسية' : 'Back to Home',
  }
})

onMounted(() => {
  initLanguage()
})
</script>

<template>
  <!-- No breadcrumb for success page -->
  <section class="py-24 md:py-32 text-center">
    <div class="container mx-auto px-4 max-w-lg">
      <div class="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center mx-auto mb-8">
        <SafeIcon name="Check" :size="40" class="text-primary" />
      </div>

      <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
        {{ pageData.successTitle }}
      </h1>

      <p class="text-lg text-muted-foreground leading-relaxed mb-10">
        {{ pageData.successMessage }}
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <Button as="a" href="/collections" size="lg">
          <SafeIcon name="ShoppingBag" :size="18" class="mr-2" />
          {{ pageData.browseCollections }}
        </Button>
        <Button as="a" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
          <SafeIcon name="MessageCircle" :size="18" class="mr-2" />
          {{ pageData.contactWhatsApp }}
        </Button>
        <Button as="a" href="/" variant="ghost" size="lg">
          {{ pageData.backHome }}
        </Button>
      </div>
    </div>
  </section>
</template>
