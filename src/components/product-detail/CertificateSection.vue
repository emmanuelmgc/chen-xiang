
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

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const selectedCertificate = ref<string | null>(null)
</script>

<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold text-foreground mb-6">الشهادات والاعتماد</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <button
        v-for="cert in product.certificates"
        :key="cert.id"
        @click="selectedCertificate = cert.id"
        class="p-6 rounded-xl border border-border/30 hover:border-primary/50 hover:shadow-card transition-all text-left group"
      >
        <div class="flex items-start gap-4">
          <img
            :src="cert.imageUrl"
            :alt="cert.title_ar"
            class="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform"
          />
          <div class="flex-1">
            <h3 class="font-semibold text-foreground mb-1">{{ cert.title_ar }}</h3>
            <p class="text-sm text-muted-foreground line-clamp-2">{{ cert.summary_ar }}</p>
            <p class="text-xs text-accent mt-2 flex items-center gap-1">
              عرض التفاصيل
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
            {{ product.certificates.find(c => c.id === selectedCertificate)?.title_ar }}
          </DialogTitle>
          <DialogDescription v-if="selectedCertificate">
            {{ product.certificates.find(c => c.id === selectedCertificate)?.title_en }}
          </DialogDescription>
        </DialogHeader>
        <div v-if="selectedCertificate" class="space-y-4">
          <img
            :src="product.certificates.find(c => c.id === selectedCertificate)?.imageUrl"
            :alt="product.certificates.find(c => c.id === selectedCertificate)?.title_ar"
            class="w-full rounded-lg"
          />
          <div>
            <h3 class="font-semibold text-foreground mb-2">الوصف</h3>
            <p class="text-sm text-foreground/80">
              {{ product.certificates.find(c => c.id === selectedCertificate)?.summary_ar }}
            </p>
            <p class="text-xs text-muted-foreground mt-2">
              {{ product.certificates.find(c => c.id === selectedCertificate)?.summary_en }}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
