
<script setup lang="ts">
import { onMounted } from 'vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getFaqsByCategory } from '@/data/faqs'
import { useLanguage } from '@/lib/useLanguage'
import type { FAQModel } from '@/data/faqs'

const { locale, initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})

const faqs = getFaqsByCategory('gifting', 4)

const getQuestion = (faq: FAQModel) => {
  return locale.value === 'ar' ? faq.question_ar : faq.question_en
}

const getAnswer = (faq: FAQModel) => {
  return locale.value === 'ar' ? faq.answer_ar : faq.answer_en
}
</script>

<template>
  <div class="space-y-8">
    <!-- Section Title -->
    <div class="text-center space-y-2">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground">
        {{ locale === 'ar' ? 'أسئلة شائعة حول الهدايا' : 'Gift FAQs' }}
      </h2>
      <p class="text-lg text-muted-foreground">
        {{ locale === 'ar' ? 'إجابات سريعة على الأسئلة الشائعة' : 'Quick answers to common questions' }}
      </p>
    </div>
    
    <!-- FAQ Accordion -->
    <div class="max-w-3xl mx-auto">
      <Accordion type="single" collapsible class="w-full">
        <AccordionItem
          v-for="faq in faqs"
          :key="faq.id"
          :value="faq.id"
          class="border-b border-border/30"
        >
          <AccordionTrigger class="text-right hover:text-primary transition-colors py-4">
            <span class="text-lg font-bold text-foreground">
              {{ getQuestion(faq) }}
            </span>
          </AccordionTrigger>
          <AccordionContent class="text-right pb-4">
            <p class="text-base text-muted-foreground leading-relaxed">
              {{ getAnswer(faq) }}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
    <!-- CTA to Help Center -->
    <div class="text-center pt-4">
      <p class="text-muted-foreground mb-4">
        {{ locale === 'ar' ? 'هل لديك سؤال آخر؟' : 'Have another question?' }}
      </p>
      <a
        href="./help-center.html"
        class="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
      >
        {{ locale === 'ar' ? 'اذهب إلى مركز المساعدة' : 'Go to Help Center' }}
        <svg class="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</template>
