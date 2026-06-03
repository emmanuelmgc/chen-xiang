
<script setup lang="ts">
import { ref } from 'vue'
import type { ProductFullModel } from '@/data/products'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const selectedCertificate = ref<string | null>(null)

// REAL_ASSET_REQUIRED: Check if certificates have real files (PDF/scans)
// Hide View Details if no real certificates
const hasRealCertificates = props.product.certificates && props.product.certificates.length > 0
</script>

<!-- REAL_ASSET_REQUIRED: Certifications section - only show if real certificates exist -->
<template>
  <div v-if="hasRealCertificates" class="mb-12">
    <h2 class="text-2xl font-bold text-foreground mb-6">
      {{ locale === 'ar' ? 'الشهادات والاعتماد' : 'Certifications & Approvals' }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <button
        v-for="cert in product.certificates"
        :key="cert.id"
        @click="selectedCertificate = cert.id"
        class="p-6 rounded-xl border border-border/30 hover:border-primary/50 hover:shadow-card transition-all text-left group"
      >
        <div class="flex items-start gap-4">
          <!-- REAL_ASSET_REQUIRED: Use real certificate image or PDF thumbnail -->
          <img
            :src="cert.imageUrl"
            :alt="locale === 'ar' ? cert.title_ar : cert.title_en"
            class="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform"
          />
          <div class="flex-1">
            <h3 class="font-semibold text-foreground mb-1">{{ locale === 'ar' ? cert.title_ar : cert.title_en }}</h3>
            <p class="text-sm text-muted-foreground line-clamp-2">{{ locale === 'ar' ? cert.summary_ar : cert.summary_en }}</p>
            <!-- REAL_ASSET_REQUIRED: Only show View Details if real file exists -->
            <p class="text-xs text-accent mt-2 flex items-center gap-1">
              {{ locale === 'ar' ? 'عرض التفاصيل' : 'View Details' }}
              <SafeIcon name="ArrowLeft" :size="14" />
            </p>
          </div>
        </div>
      </button>
    </div>

    <!-- Certificate Modal -->
    <Dialog :open="selectedCertificate !== null" @update:open="(open) => !open && (selectedCertificate = null)">
      <DialogContent class="max-w-2xl">
        <DialogHeader>
          <DialogTitle v-if="selectedCertificate">
            {{ locale === 'ar' ? product.certificates.find(c => c.id === selectedCertificate)?.title_ar : product.certificates.find(c => c.id === selectedCertificate)?.title_en }}
          </DialogTitle>
        </DialogHeader>
        <div v-if="selectedCertificate" class="space-y-4">
          <img
            :src="product.certificates.find(c => c.id === selectedCertificate)?.imageUrl"
            :alt="locale === 'ar' ? product.certificates.find(c => c.id === selectedCertificate)?.title_ar : product.certificates.find(c => c.id === selectedCertificate)?.title_en"
            class="w-full rounded-lg"
          />
          <div>
            <h3 class="font-semibold text-foreground mb-2">
              {{ locale === 'ar' ? 'الوصف' : 'Description' }}
            </h3>
            <p class="text-sm text-foreground/80">
              {{ locale === 'ar' ? product.certificates.find(c => c.id === selectedCertificate)?.summary_ar : product.certificates.find(c => c.id === selectedCertificate)?.summary_en }}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
  
  <!-- REAL_ASSET_REQUIRED: Placeholder when no real certificates -->
  <div v-else class="mb-12 opacity-50">
    <h2 class="text-2xl font-bold text-foreground mb-6">
      {{ locale === 'ar' ? 'الشهادات والاعتماد' : 'Certifications & Approvals' }}
    </h2>
    <p class="text-sm text-muted-foreground italic">
      {{ locale === 'ar' ? 'الشهادات قيد التحقق - يرجى التواصل معنا للمزيد من المعلومات' : 'Certifications pending verification - please contact us for more information' }}
    </p>
  </div>
</template>
