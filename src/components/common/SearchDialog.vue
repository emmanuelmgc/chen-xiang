<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { Search } from 'lucide-vue-next'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { MOCK_PRODUCTS_DATA, PRODUCT_CATEGORIES, type ProductType } from '@/data/products'
import { useLanguage } from '@/lib/useLanguage'

const { locale } = useLanguage()

const open = defineModel<boolean>({ default: false })

const searchQuery = ref('')
const debouncedQuery = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
let debounceTimer: ReturnType<typeof setTimeout> | null = null

watch(searchQuery, (val) => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    debouncedQuery.value = val
  }, 300)
})

watch(open, (val) => {
  if (val) {
    nextTick(() => {
      searchInput.value?.focus()
    })
  } else {
    searchQuery.value = ''
    debouncedQuery.value = ''
  }
})

const results = computed(() => {
  if (!debouncedQuery.value.trim()) return []
  const q = debouncedQuery.value.toLowerCase().trim()
  return MOCK_PRODUCTS_DATA.filter(p =>
    p.name_ar.toLowerCase().includes(q) ||
    p.name_en.toLowerCase().includes(q) ||
    p.description_ar.toLowerCase().includes(q) ||
    p.description_en.toLowerCase().includes(q)
  ).slice(0, 6)
})

const hasMore = computed(() => {
  if (!debouncedQuery.value.trim()) return false
  const q = debouncedQuery.value.toLowerCase().trim()
  return MOCK_PRODUCTS_DATA.filter(p =>
    p.name_ar.toLowerCase().includes(q) ||
    p.name_en.toLowerCase().includes(q) ||
    p.description_ar.toLowerCase().includes(q) ||
    p.description_en.toLowerCase().includes(q)
  ).length > 6
})

function getCategoryName(category: ProductType): string {
  const cat = PRODUCT_CATEGORIES[category]
  return locale.value === 'ar' ? cat.title_ar : cat.title_en
}

function navigateToProduct(url: string) {
  open.value = false
  window.location.href = url
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="sm:max-w-lg p-0 gap-0">
      <DialogHeader class="px-4 pt-4 pb-0">
        <DialogTitle>
          {{ locale === 'ar' ? 'البحث عن منتج' : 'Search Products' }}
        </DialogTitle>
      </DialogHeader>

      <div class="px-4 py-3">
        <div class="relative">
          <Search
            class="absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
            :class="locale === 'ar' ? 'right-3' : 'left-3'"
          />
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            :placeholder="locale === 'ar' ? 'ابحث بالاسم أو الوصف...' : 'Search by name or description...'"
            class="w-full h-10 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            :class="locale === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'"
            @keydown.escape="open = false"
          />
        </div>
      </div>

      <div class="px-4 pb-4 max-h-[400px] overflow-y-auto">
        <div v-if="debouncedQuery && results.length === 0" class="py-8 text-center text-muted-foreground text-sm">
          {{ locale === 'ar' ? 'لا توجد نتائج' : 'No results found' }}
        </div>

        <div v-else-if="!debouncedQuery" class="py-8 text-center text-muted-foreground text-sm">
          {{ locale === 'ar' ? 'ابدأ بكتابة اسم المنتج للبحث' : 'Start typing to search products' }}
        </div>

        <div v-else class="space-y-2">
          <div
            v-for="product in results"
            :key="product.id"
            class="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
            @click="navigateToProduct(product.detailUrl)"
            role="button"
            tabindex="0"
            @keydown.enter="navigateToProduct(product.detailUrl)"
          >
            <img
              :src="product.imageUrl"
              :alt="locale === 'ar' ? product.name_ar : product.name_en"
              class="w-12 h-12 rounded-md object-cover flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-foreground truncate">
                {{ locale === 'ar' ? product.name_ar : product.name_en }}
              </p>
              <p class="text-xs text-muted-foreground">
                {{ getCategoryName(product.category) }}
              </p>
            </div>
            <div class="text-sm font-medium text-primary whitespace-nowrap">
              {{ locale === 'ar' ? product.priceRange_ar : product.priceRange_en }}
            </div>
          </div>

          <div v-if="hasMore" class="py-2 text-center text-xs text-muted-foreground">
            {{ locale === 'ar' ? '...والمزيد من النتائج' : '...and more results' }}
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
