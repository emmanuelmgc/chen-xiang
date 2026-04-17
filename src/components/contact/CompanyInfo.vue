
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { CONTACT_INFO } from '@/data/contact_info'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const isClient = ref(true)

onMounted(() => {
  initLanguage()
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
    <!-- Company Info -->
    <div 
      class="transition-all duration-700"
      :class="isClient ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
    >
      <h2 class="text-3xl font-bold text-foreground mb-8">
        {{ locale === 'ar' ? 'معلومات الشركة' : 'Company Information' }}
      </h2>
      
      <!-- Address -->
      <div class="mb-8">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
            <SafeIcon name="MapPin" :size="20" class="text-accent" />
          </div>
          <div>
            <h3 class="font-bold text-foreground mb-1">{{ locale === 'ar' ? 'العنوان' : 'Address' }}</h3>
            <p class="text-muted-foreground">
              {{ locale === 'ar' ? CONTACT_INFO.addressLine1_ar : CONTACT_INFO.addressLine1_en }}
            </p>
            <a 
              :href="CONTACT_INFO.googleMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline text-sm mt-2 inline-block"
            >
              {{ locale === 'ar' ? 'عرض على الخريطة →' : 'View on Map →' }}
            </a>
          </div>
        </div>
      </div>
      
      <!-- Working Hours -->
      <div class="mb-8">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
            <SafeIcon name="Clock" :size="20" class="text-accent" />
          </div>
          <div>
            <h3 class="font-bold text-foreground mb-1">{{ locale === 'ar' ? 'ساعات العمل' : 'Working Hours' }}</h3>
            <p class="text-muted-foreground">
              {{ locale === 'ar' ? CONTACT_INFO.workingHours_ar : CONTACT_INFO.workingHours_en }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Quick Contact -->
      <div class="p-6 rounded-lg bg-card border border-border/30">
        <h3 class="font-bold text-foreground mb-4">{{ locale === 'ar' ? 'تواصل سريع' : 'Quick Contact' }}</h3>
        <div class="space-y-3">
          <a 
            :href="`tel:${CONTACT_INFO.phoneNumber}`"
            class="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <SafeIcon name="Phone" :size="18" class="text-accent" />
            <span>{{ CONTACT_INFO.phoneNumber }}</span>
          </a>
          <a 
            :href="`mailto:${CONTACT_INFO.email}`"
            class="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <SafeIcon name="Mail" :size="18" class="text-accent" />
            <span>{{ CONTACT_INFO.email }}</span>
          </a>
          <a 
            :href="`https://wa.me/${CONTACT_INFO.whatsappNumber}`"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <SafeIcon name="MessageCircle" :size="18" class="text-accent" />
            <span>{{ CONTACT_INFO.whatsappNumber }}</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Map Placeholder -->
    <div 
      class="rounded-lg overflow-hidden border border-border/30 h-[400px] md:h-[500px] transition-all duration-700"
      :class="isClient ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
    >
      <iframe
        :src="CONTACT_INFO.googleMapsUrl"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="موقع نفحة NAFHA على الخريطة"
      ></iframe>
    </div>
  </div>
</template>
