<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { COMPANY_IDENTITY } from '@/data/legal_policies'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const companyName = computed(() => {
  return locale.value === 'ar'
    ? COMPANY_IDENTITY.registeredName_ar
    : COMPANY_IDENTITY.registeredName_en
})

const address = computed(() => {
  return locale.value === 'ar'
    ? COMPANY_IDENTITY.registeredAddress_ar
    : COMPANY_IDENTITY.registeredAddress_en
})

const googleMapsQuery = computed(() => {
  return encodeURIComponent(address.value)
})

const labels = computed(() => ({
  title: locale.value === 'ar' ? 'بطاقة هوية الشركة' : 'Company Identity Card',
  registeredName: locale.value === 'ar' ? 'الاسم التجاري المسجل' : 'Registered Company Name',
  registeredAddress: locale.value === 'ar' ? 'العنوان المسجل' : 'Registered Address',
  vatTrn: locale.value === 'ar' ? 'الرقم الضريبي' : 'VAT / TRN Number',
  contactEmail: locale.value === 'ar' ? 'البريد الإلكتروني' : 'Contact Email',
  contactPhone: locale.value === 'ar' ? 'رقم الهاتف' : 'Contact Phone',
  viewOnMap: locale.value === 'ar' ? 'عرض على الخريطة' : 'View on Google Maps',
}))

onMounted(() => {
  initLanguage()
})
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold text-foreground mb-8">{{ labels.title }}</h1>

    <Card class="shadow-soft">
      <CardHeader>
        <CardTitle class="text-xl">{{ companyName }}</CardTitle>
      </CardHeader>
      <CardContent class="space-y-6">
        <!-- Registered Address -->
        <div class="flex gap-3">
          <SafeIcon name="MapPin" :size="20" class="text-muted-foreground shrink-0 mt-0.5" />
          <div>
            <p class="text-sm font-medium text-foreground">{{ labels.registeredAddress }}</p>
            <p class="text-sm text-muted-foreground mt-1">{{ address }}</p>
            <a
              :href="`https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
            >
              <SafeIcon name="ExternalLink" :size="14" />
              {{ labels.viewOnMap }}
            </a>
          </div>
        </div>

        <!-- VAT / TRN — hidden until owner provides real number -->
        <!-- <div class="flex gap-3">
          <SafeIcon name="FileText" :size="20" class="text-muted-foreground shrink-0 mt-0.5" />
          <div>
            <p class="text-sm font-medium text-foreground">{{ labels.vatTrn }}</p>
            <p class="text-sm text-muted-foreground mt-1 font-mono">{{ COMPANY_IDENTITY.vatTrn }}</p>
          </div>
        </div> -->

        <!-- Contact Email -->
        <div class="flex gap-3">
          <SafeIcon name="Mail" :size="20" class="text-muted-foreground shrink-0 mt-0.5" />
          <div>
            <p class="text-sm font-medium text-foreground">{{ labels.contactEmail }}</p>
            <a
              :href="`mailto:${COMPANY_IDENTITY.contactEmail}`"
              class="text-sm text-primary hover:underline mt-1 inline-block"
            >
              {{ COMPANY_IDENTITY.contactEmail }}
            </a>
          </div>
        </div>

        <!-- Contact Phone -->
        <div class="flex gap-3">
          <SafeIcon name="Phone" :size="20" class="text-muted-foreground shrink-0 mt-0.5" />
          <div>
            <p class="text-sm font-medium text-foreground">{{ labels.contactPhone }}</p>
            <a
              :href="`tel:${COMPANY_IDENTITY.contactPhone}`"
              class="text-sm text-primary hover:underline mt-1 inline-block"
              dir="ltr"
            >
              {{ COMPANY_IDENTITY.contactPhone }}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
