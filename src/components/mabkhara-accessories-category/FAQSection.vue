
<script setup lang="ts">
import { ref, onMounted } from 'vue'
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

const isClient = ref(true)

const faqs = getFaqsByCategory('general', 4)

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
  <section class="w-full py-12 md:py-16 px-4 md:px-8 bg-muted/30">
    <div class="container mx-auto max-w-3xl">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        {{ locale === 'ar' ? 'أسئلة شائعة' : 'Frequently Asked Questions' }}
      </h2>

      <!-- FAQ Accordion -->
      <Accordion type="single" collapsible class="w-full">
        <AccordionItem
          v-for="(faq, index) in faqs"
          :key="faq.id"
          :value="faq.id"
          class="border-b border-border/20 transition-all duration-500"
          :class="isClient ? 'opacity-100' : 'opacity-0'"
          :style="{ transitionDelay: isClient ? `${index * 50}ms` : '0ms' }"
        >
          <AccordionTrigger class="text-right hover:text-primary transition-colors py-4">
            <span class="text-lg font-semibold text-foreground">
              {{ getQuestion(faq) }}
            </span>
          </AccordionTrigger>
          <AccordionContent class="text-muted-foreground pb-4">
            <p class="text-base leading-relaxed">
              {{ getAnswer(faq) }}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <!-- Help Center Link -->
      <div class="text-center mt-12">
        <p class="text-muted-foreground mb-4">
          {{ locale === 'ar' ? 'هل لديك أسئلة أخرى؟' : 'Have more questions?' }}
        </p>
        <a 
          href="./help-center.html"
          class="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          {{ locale === 'ar' ? 'زيارة مركز المساعدة' : 'Visit Help Center' }}
        </a>
      </div>
    </div>
  </section>
</template>
