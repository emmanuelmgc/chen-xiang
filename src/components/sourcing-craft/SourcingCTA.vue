
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
</script>

<template>
  <div class="rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-8 md:p-12">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground">
        هل أنت مستعد لاستكشاف منتجاتنا؟
      </h2>
      <p class="text-lg text-muted-foreground">
        الآن بعد أن تعرفت على عملية الإنتاج والالتزام بالجودة، اكتشف مجموعتنا الكاملة من منتجات العود الفاخرة
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <!-- Primary CTA -->
        <Button
          size="lg"
          class="bg-primary hover:bg-primary/90 text-primary-foreground"
          as="a"
          href="./collections.html"
        >
          <span>استكشف المجموعة</span>
          <SafeIcon name="ArrowLeft" :size="20" class="mr-2" />
        </Button>

        <!-- Secondary CTA -->
        <Button
          size="lg"
          variant="outline"
          as="a"
          href="https://wa.me/966500000000?text=مرحباً، أود الاستفسار عن منتجاتكم والمصدر والحرفة"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SafeIcon name="MessageCircle" :size="20" class="ml-2" />
          <span>تواصل عبر واتساب</span>
        </Button>
      </div>

      <!-- Additional Info -->
      <div class="pt-8 border-t border-border/30">
        <p class="text-sm text-muted-foreground">
          لديك أسئلة حول عملية الإنتاج أو المواد؟
          <a href="./help-center.html" class="text-primary font-medium hover:underline">
            زر مركز المساعدة
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
