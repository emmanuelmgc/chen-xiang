
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

function navigateToWhatsApp() {
  window.open('https://wa.me/966500000000?text=مرحباً NAFHA، أود الاستفسار عن خدمات B2B', '_blank')
}

function navigateToContact() {
  window.location.href = './contact.html'
}
</script>

<template>
  <section class="py-12 md:py-20 bg-gradient-to-b from-background to-card">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
          هل لديك أسئلة؟
        </h2>
        <p class="text-lg text-muted-foreground mb-8">
          فريقنا متاح للإجابة على جميع استفساراتك والمساعدة في إيجاد الحل المناسب لعملك
        </p>
        
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            size="lg"
            class="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2"
            @click="navigateToWhatsApp"
          >
            <SafeIcon name="MessageCircle" :size="20" />
            تواصل عبر واتساب
          </Button>
          <Button
            size="lg"
            variant="outline"
            class="font-bold gap-2"
            @click="navigateToContact"
          >
            <SafeIcon name="Mail" :size="20" />
            اتصل بنا
          </Button>
        </div>
        
        <!-- Trust Indicators -->
        <div class="mt-12 pt-8 border-t border-border/20">
          <p class="text-sm text-muted-foreground mb-4">
            نحن نخدم أكثر من 50 فندق وفندق فاخر في منطقة الخليج
          </p>
          <div class="flex justify-center gap-8 flex-wrap">
            <div class="text-center">
              <p class="text-2xl font-bold text-primary">50+</p>
              <p class="text-sm text-muted-foreground">فندق وفندق فاخر</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-primary">1000+</p>
              <p class="text-sm text-muted-foreground">عميل راضٍ</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-primary">24/7</p>
              <p class="text-sm text-muted-foreground">دعم متخصص</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Gradient background */
section {
  background: linear-gradient(
    to bottom,
    hsl(var(--background)),
    hsl(var(--card))
  );
}
</style>
