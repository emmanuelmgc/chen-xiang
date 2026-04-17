
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SafeIcon from '@/components/common/SafeIcon.vue'
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { label_ar: 'المتجر', label_en: 'Collections', href: './collections.html' },
  { label_ar: 'الهدايا', label_en: 'Gifts', href: './gift-sets-category.html' },
  { label_ar: 'الأعمال', label_en: 'B2B', href: './b2b-hotels-venues.html' },
  { label_ar: 'من نحن', label_en: 'About', href: './about.html' },
  { label_ar: 'المساعدة', label_en: 'Help', href: './help-center.html' },
]

onMounted(() => {
  initLanguage()
  if (typeof window !== 'undefined') {
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }
})

const getNavLabel = (item: typeof navItems[0]) => {
  return locale.value === 'ar' ? item.label_ar : item.label_en
}
</script>

<template>
  <header 
    class="sticky top-0 z-50 w-full transition-all duration-300"
    :class="isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-soft' : 'bg-background'"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Mobile Menu (Left in RTL) -->
        <div class="md:hidden">
          <Sheet v-model:open="isMenuOpen">
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon" :aria-label="locale === 'ar' ? 'القائمة' : 'Menu'">
                <SafeIcon name="Menu" :size="24" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" class="w-[280px]">
              <nav class="flex flex-col gap-4 mt-8">
                <a
                  v-for="item in navItems"
                  :key="item.href"
                  :href="item.href"
                  class="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  @click="isMenuOpen = false"
                >
                  {{ getNavLabel(item) }}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <!-- Logo (Center) -->
        <div class="flex-1 flex justify-center md:justify-start">
          <a href="./collections.html" class="flex items-center gap-2">
            <span class="text-2xl md:text-3xl font-bold text-foreground">
              {{ locale === 'ar' ? 'نفحة' : 'Nafha' }}
            </span>
            <span class="text-sm md:text-base text-muted-foreground font-medium">
              NAFHA
            </span>
          </a>
        </div>

        <!-- Desktop Navigation (Hidden on mobile) -->
        <nav class="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {{ getNavLabel(item) }}
          </a>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" :aria-label="locale === 'ar' ? 'البحث' : 'Search'">
            <SafeIcon name="Search" :size="20" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            :aria-label="locale === 'ar' ? 'واتساب' : 'WhatsApp'"
            as="a"
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SafeIcon name="MessageCircle" :size="20" />
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>
