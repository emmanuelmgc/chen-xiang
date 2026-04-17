
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { getFaqsByCategory } from '@/data/faqs'
import { useLanguage } from '@/lib/useLanguage'
import type { FAQModel } from '@/data/faqs'

const { locale, initLanguage } = useLanguage()

const isClient = ref(true)
const faqs = getFaqsByCategory('bakhoor', 3)

onMounted(() => {
  initLanguage()
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

const getQuestion = (faq: FAQModel) => {
  return locale.value === 'ar' ? faq.question_ar : faq.question_en
}

const getAnswer = (faq: FAQModel) => {
  return locale.value === 'ar' ? faq.answer_ar : faq.answer_en
}
</script>

<template>
  <section class="py-12 md:py-16 lg:py-20 bg-card border-t border-border/20">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {{ locale === 'ar' ? 'أسئلة شائعة' : 'Frequently Asked Questions' }}
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          {{ locale === 'ar' ? 'إجابات سريعة على أكثر الأسئلة التي يطرحها عملاؤنا حول البخور' : "Quick answers to our customers' most asked questions about Bakhoor" }}
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div
        class="max-w-3xl mx-auto transition-all duration-700"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <Accordion type="single" collapsible class="w-full">
          <AccordionItem
            v-for="(faq, index) in faqs"
            :key="faq.id"
            :value="faq.id"
            class="border-b border-border/30 last:border-b-0"
          >
            <AccordionTrigger class="py-4 md:py-6 hover:no-underline group">
              <span class="text-right text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {{ getQuestion(faq) }}
              </span>
            </AccordionTrigger>
            <AccordionContent class="pb-4 md:pb-6 text-muted-foreground leading-relaxed">
              {{ getAnswer(faq) }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <!-- Help Center Link -->
      <div class="flex justify-center mt-12">
        <Button
          variant="outline"
          size="lg"
          as="a"
          href="./help-center.html"
        >
          {{ locale === 'ar' ? 'عرض جميع الأسئلة الشائعة' : 'View All FAQs' }}
          <SafeIcon name="HelpCircle" :size="20" class="mr-2" />
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth accordion animations */
:deep(.accordion-content) {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
