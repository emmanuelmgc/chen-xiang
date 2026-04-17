
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { ProductFullModel } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import ProductBadge from '@/components/product-detail/ProductBadge.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const currentImageIndex = ref(0)
const isClient = ref(true)
const isZoomed = ref(false)

const allImages = [props.product.imageUrl, ...props.product.galleryUrls]

function previousImage() {
  currentImageIndex.value = (currentImageIndex.value - 1 + allImages.length) % allImages.length
}

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % allImages.length
}

function toggleZoom() {
  isZoomed.value = !isZoomed.value
}

onMounted(() => {
  initLanguage()
  isClient.value = false
  setTimeout(() => {
    isClient.value = true
  }, 50)
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
    <!-- Image Gallery -->
    <div class="flex flex-col gap-4">
      <!-- Main Image -->
      <div 
        class="relative w-full aspect-square bg-muted rounded-2xl overflow-hidden border border-border/30 cursor-zoom-in"
        @click="toggleZoom"
      >
        <img
          :src="allImages[currentImageIndex]"
          :alt="product.name_ar"
          class="w-full h-full object-cover transition-transform duration-300"
          :class="isZoomed ? 'scale-150' : 'scale-100'"
        />
        
        <!-- Zoom Indicator -->
        <div v-if="!isZoomed" class="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg text-xs font-medium">
          {{ locale === 'ar' ? 'اضغط للتكبير' : 'Tap to zoom' }}
        </div>

        <!-- Navigation Arrows -->
        <button
          v-if="allImages.length > 1"
          @click.stop="previousImage"
          class="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-all"
          :aria-label="locale === 'ar' ? 'الصورة السابقة' : 'Previous image'"
        >
          <SafeIcon name="ChevronRight" :size="20" />
        </button>
        <button
          v-if="allImages.length > 1"
          @click.stop="nextImage"
          class="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-all"
          :aria-label="locale === 'ar' ? 'الصورة التالية' : 'Next image'"
        >
          <SafeIcon name="ChevronLeft" :size="20" />
        </button>

        <!-- Image Counter -->
        <div v-if="allImages.length > 1" class="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg text-xs font-medium">
          {{ currentImageIndex + 1 }} / {{ allImages.length }}
        </div>
      </div>

      <!-- Thumbnail Strip -->
      <div v-if="allImages.length > 1" class="flex gap-2 overflow-x-auto custom-scrollbar">
        <button
          v-for="(image, index) in allImages"
          :key="index"
          @click="currentImageIndex = index"
          class="flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all"
          :class="currentImageIndex === index 
            ? 'border-primary' 
            : 'border-border/30 hover:border-border/60'"
          :aria-label="`${locale === 'ar' ? 'صورة' : 'Image'} ${index + 1}`"
        >
          <img :src="image" :alt="`${locale === 'ar' ? 'صورة' : 'Image'} ${index + 1}`" class="w-full h-full object-cover" />
        </button>
      </div>
    </div>

    <!-- Quick Info Panel -->
    <div class="flex flex-col gap-6">
      <!-- Badges -->
      <div class="flex flex-wrap gap-2">
        <ProductBadge
          v-for="badgeId in product.badges"
          :key="badgeId"
          :badge-id="badgeId"
        />
      </div>

      <!-- Price & Availability -->
      <div class="space-y-2">
        <p class="text-sm text-muted-foreground">{{ locale === 'ar' ? 'السعر المرجعي' : 'Reference Price' }}</p>
        <p class="text-3xl font-bold text-foreground">{{ locale === 'ar' ? product.priceRange_ar : product.priceRange_en }}</p>
        <p class="text-xs text-muted-foreground">
          {{ locale === 'ar' ? 'ابتداءً من ... مع تمارا / تابي' : 'Starting from... with Tamara / Tabby' }}
        </p>
      </div>

      <!-- Quick Specs -->
      <div class="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-xl border border-border/20">
        <div>
          <p class="text-xs text-muted-foreground mb-1">{{ locale === 'ar' ? 'وقت الحرق' : 'Burn Time' }}</p>
          <p class="font-semibold text-sm">{{ locale === 'ar' ? product.specs.burnTime_ar : product.specs.burnTime_en }}</p>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-1">{{ locale === 'ar' ? 'مستوى الدخان' : 'Smoke Level' }}</p>
          <p class="font-semibold text-sm">{{ locale === 'ar' ? product.specs.smokeLevel_ar : product.specs.smokeLevel_en }}</p>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-1">{{ locale === 'ar' ? 'الوزن' : 'Weight' }}</p>
          <p class="font-semibold text-sm">{{ locale === 'ar' ? product.specs.weight_ar : product.specs.weight_en }}</p>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-1">{{ locale === 'ar' ? 'المساحة المناسبة' : 'Applicable Space' }}</p>
          <p class="font-semibold text-sm">{{ locale === 'ar' ? product.specs.applicableSpace_ar : product.specs.applicableSpace_en }}</p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col gap-3 pt-4">
        <Button
          size="lg"
          class="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          as="a"
          :href="locale === 'ar' ? product.whatsappInquiryUrl_ar : product.whatsappInquiryUrl_en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SafeIcon name="MessageCircle" :size="20" class="ml-2" />
          {{ locale === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp' }}
        </Button>
        <Button
          size="lg"
          variant="outline"
          class="w-full"
          as="a"
          href="./product-catalog-download.html"
        >
          <SafeIcon name="Download" :size="20" class="ml-2" />
          {{ locale === 'ar' ? 'تحميل الكتالوج والمواصفات' : 'Download Catalog & Specs' }}
        </Button>
      </div>

      <!-- Stock Status -->
      <div class="p-3 bg-accent/10 rounded-lg border border-accent/20">
        <p class="text-sm text-accent font-medium flex items-center gap-2">
          <SafeIcon name="CheckCircle2" :size="18" />
          {{ locale === 'ar' ? 'متوفر في المخزون' : 'In Stock' }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--border) / 0.6);
}
</style>
