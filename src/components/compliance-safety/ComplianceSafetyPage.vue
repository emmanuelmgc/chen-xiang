<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { CONTACT_INFO, getWhatsAppInquiryUrl } from '@/data/contact_info'
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import PolicyContent from '@/components/legal/PolicyContent.vue'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const pageData = computed(() => {
  const isAr = locale.value === 'ar'
  return {
    heroTitle: isAr ? 'الامتثال والسلامة' : 'Compliance & Safety',
    heroSummary: isAr
      ? 'التزام NAFHA بأعلى معايير الجودة والسلامة في صناعة البخور والعود.'
      : "NAFHA's commitment to the highest quality and safety standards in incense and Oud manufacturing.",
    certsTitle: isAr ? 'الشهادات والاعتمادات' : 'Certifications & Compliance',
    sgs: {
      title: isAr ? 'شهادة SGS' : 'SGS Certification',
      description: isAr
        ? 'منتجاتنا خضعت لاختبارات SGS المستقلة لضمان خلوها من المواد الكيميائية الضارة والمعادن الثقيلة.'
        : 'Our products have been independently tested by SGS to ensure they are free from harmful chemicals and heavy metals.',
    },
    ifra: {
      title: isAr ? 'الامتثال لمعايير IFRA' : 'IFRA Compliance',
      description: isAr
        ? 'جميع تركيباتنا العطرية تتوافق مع إرشادات الرابطة الدولية للعطور (IFRA) لضمان سلامة الاستخدام.'
        : 'All our fragrance formulations comply with the International Fragrance Association (IFRA) guidelines to ensure safe usage.',
    },
    testing: {
      title: isAr ? 'معايير اختبار المنتجات' : 'Product Testing Standards',
      description: isAr
        ? 'كل دفعة إنتاجية تخضع لاختبارات صارمة تشمل: فحص الدخان، اختبار الاحتراق، والتحقق من ثبات العطر.'
        : 'Every production batch undergoes rigorous testing including smoke inspection, burn testing, and fragrance stability verification.',
    },
  }
})

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
        {{ pageData.heroTitle }}
      </h1>
      <p class="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {{ pageData.heroSummary }}
      </p>
    </div>
  </section>

  <!-- Certifications & Compliance Cards -->
  <section class="pb-16">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-semibold text-foreground text-center mb-10">
        {{ pageData.certsTitle }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card class="h-full">
          <CardContent class="p-6 flex flex-col items-center text-center gap-4" id="material-safety">
            <SafeIcon name="Award" :size="40" class="text-primary" />
            <h3 class="text-lg font-semibold text-foreground">{{ pageData.sgs.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ pageData.sgs.description }}</p>
          </CardContent>
        </Card>

        <Card class="h-full">
          <CardContent class="p-6 flex flex-col items-center text-center gap-4">
            <SafeIcon name="ShieldCheck" :size="40" class="text-primary" />
            <h3 class="text-lg font-semibold text-foreground">{{ pageData.ifra.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ pageData.ifra.description }}</p>
          </CardContent>
        </Card>

        <Card class="h-full">
          <CardContent class="p-6 flex flex-col items-center text-center gap-4">
            <SafeIcon name="FlaskConical" :size="40" class="text-primary" />
            <h3 class="text-lg font-semibold text-foreground">{{ pageData.testing.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ pageData.testing.description }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  <!-- Safety Notice (reuse PolicyContent) -->
  <section class="pb-16" id="safety-notice">
    <div class="container mx-auto px-4">
      <PolicyContent policy-key="safety" />
    </div>
  </section>
</template>
