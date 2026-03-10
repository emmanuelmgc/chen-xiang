
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getFaqsByCategory } from '@/data/faqs'

const isClient = ref(true)

const faqs = getFaqsByCategory('general', 4)

onMounted(() => {
  isClient.value = false
  
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="w-full py-12 md:py-16 px-4 md:px-8 bg-muted/30">
    <div class="container mx-auto max-w-3xl">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        أسئلة شائعة
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
              {{ faq.question_ar }}
            </span>
          </AccordionTrigger>
          <AccordionContent class="text-muted-foreground pb-4">
            <p class="text-base leading-relaxed">
              {{ faq.answer_ar }}
            </p>
            <p class="text-sm text-muted-foreground mt-2 italic">
              {{ faq.answer_en }}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <!-- Help Center Link -->
      <div class="text-center mt-12">
        <p class="text-muted-foreground mb-4">
          هل لديك أسئلة أخرى؟
        </p>
        <a 
          href="./help-center.html"
          class="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          زيارة مركز المساعدة
        </a>
      </div>
    </div>
  </section>
</template>
