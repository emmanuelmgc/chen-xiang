
<script setup lang="ts">
import type { FAQModel } from '@/data/faqs'
import { getFaqsByCategory } from '@/data/faqs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  category: FAQModel['category']
  isClient: boolean
}

const props = defineProps<Props>()

const faqs = getFaqsByCategory(props.category, 3)
</script>

<template>
  <section class="w-full py-12 md:py-16 bg-card border-t border-border/20">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-2">
            أسئلة شائعة
          </h2>
          <p class="text-muted-foreground">
            إجابات سريعة على الأسئلة الشائعة حول أعواد البخور
          </p>
        </div>
        
        <!-- View All Link -->
        <Button
          variant="outline"
          as="a"
          href="./help-center.html"
          class="whitespace-nowrap"
        >
          عرض جميع الأسئلة
          <SafeIcon name="ArrowLeft" :size="16" class="mr-2" />
        </Button>
      </div>
      
      <!-- FAQ Accordion -->
      <div class="max-w-3xl">
        <Accordion type="single" collapsible class="w-full">
          <AccordionItem
            v-for="(faq, index) in faqs"
            :key="faq.id"
            :value="`faq-${index}`"
            class="border-b border-border/20"
          >
            <AccordionTrigger class="text-lg font-semibold text-foreground hover:text-primary transition-colors py-4">
              {{ faq.question_ar }}
            </AccordionTrigger>
            <AccordionContent class="text-muted-foreground leading-relaxed pb-4">
              {{ faq.answer_ar }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>
