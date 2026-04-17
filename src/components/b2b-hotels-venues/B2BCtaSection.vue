
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

function navigateToWhatsApp() {
  window.open('https://wa.me/966500000000?text=مرحباً NAFHA، أود الاستفسار عن خدمات B2B', '_blank')
}

function navigateToContact() {
  window.location.href = './contact.html'
}

const content = {
  title_ar: 'هل لديك أسئلة؟',
  title_en: 'Have Questions?',
  description_ar: 'فريقنا متاح للإجابة على جميع استفساراتك والمساعدة في إيجاد الحل المناسب لعملك',
  description_en: 'Our team is available to answer all your inquiries and help find the right solution for your business',
  whatsappBtn_ar: 'تواصل عبر واتساب',
  whatsappBtn_en: 'Contact via WhatsApp',
  contactBtn_ar: 'اتصل بنا',
  contactBtn_en: 'Contact Us',
  trustText_ar: 'نحن نخدم أكثر من 50 فندق وفندق فاخر في منطقة الخليج',
  trustText_en: 'Serving 50+ luxury hotels in the Gulf region',
  hotels_ar: 'فندق وفندق فاخر',
  hotels_en: 'Hotels & Resorts',
  clients_ar: 'عميل راضٍ',
  clients_en: 'Satisfied Clients',
  support_ar: 'دعم متخصص',
  support_en: 'Specialized Support',
}
</script>

<template>
  <section class="py-12 md:py-20 bg-gradient-to-b from-background to-card">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
          {{ locale === 'ar' ? content.title_ar : content.title_en }}
        </h2>
        <p class="text-lg text-muted-foreground mb-8">
          {{ locale === 'ar' ? content.description_ar : content.description_en }}
        </p>
        
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            size="lg"
            class="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2"
            @click="navigateToWhatsApp"
          >
            <SafeIcon name="MessageCircle" :size="20" />
            {{ locale === 'ar' ? content.whatsappBtn_ar : content.whatsappBtn_en }}
          </Button>
          <Button
            size="lg"
            variant="outline"
            class="font-bold gap-2"
            @click="navigateToContact"
          >
            <SafeIcon name="Mail" :size="20" />
            {{ locale === 'ar' ? content.contactBtn_ar : content.contactBtn_en }}
          </Button>
        </div>
        
        <!-- Trust Indicators -->
        <div class="mt-12 pt-8 border-t border-border/20">
          <p class="text-sm text-muted-foreground mb-4">
            {{ locale === 'ar' ? content.trustText_ar : content.trustText_en }}
          </p>
          <div class="flex justify-center gap-8 flex-wrap">
            <div class="text-center">
              <p class="text-2xl font-bold text-primary">50+</p>
              <p class="text-sm text-muted-foreground">{{ locale === 'ar' ? content.hotels_ar : content.hotels_en }}</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-primary">1000+</p>
              <p class="text-sm text-muted-foreground">{{ locale === 'ar' ? content.clients_ar : content.clients_en }}</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-primary">24/7</p>
              <p class="text-sm text-muted-foreground">{{ locale === 'ar' ? content.support_ar : content.support_en }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Gradient background */
section {
  background: linear-gradient(
    to bottom,
    hsl(var(--background)),
    hsl(var(--card))
  );
}
</style>
