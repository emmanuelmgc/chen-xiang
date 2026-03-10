
<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getFaqsByCategory } from '@/data/faqs'

const faqs = getFaqsByCategory('gifting', 4)
</script>

<template>
  <div class="space-y-8">
    <!-- Section Title -->
    <div class="text-center space-y-2">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground">
        أسئلة شائعة حول الهدايا
      </h2>
      <p class="text-lg text-muted-foreground">
        إجابات سريعة على الأسئلة الشائعة
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
              {{ faq.question_ar }}
            </span>
          </AccordionTrigger>
          <AccordionContent class="text-right pb-4">
            <p class="text-base text-muted-foreground leading-relaxed">
              {{ faq.answer_ar }}
            </p>
            <p class="text-sm text-muted-foreground mt-2 italic">
              {{ faq.answer_en }}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
    <!-- CTA to Help Center -->
    <div class="text-center pt-4">
      <p class="text-muted-foreground mb-4">
        هل لديك سؤال آخر؟
      </p>
      <a
        href="./help-center.html"
        class="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
      >
        اذهب إلى مركز المساعدة
        <svg class="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</template>
