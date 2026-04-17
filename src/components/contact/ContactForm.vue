
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const isClient = ref(true)
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = ref<Partial<FormData>>({})

onMounted(() => {
  initLanguage()
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

// Bilingual labels and placeholders
const labels = computed(() => ({
  name: locale.value === 'ar' ? 'الاسم الكامل *' : 'Full Name *',
  namePlaceholder: locale.value === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name',
  email: locale.value === 'ar' ? 'البريد الإلكتروني *' : 'Email *',
  emailPlaceholder: locale.value === 'ar' ? 'your@email.com' : 'your@email.com',
  phone: locale.value === 'ar' ? 'رقم الهاتف *' : 'Phone Number *',
  phonePlaceholder: locale.value === 'ar' ? '+966 50 000 0000' : '+966 50 000 0000',
  subject: locale.value === 'ar' ? 'الموضوع *' : 'Subject *',
  subjectPlaceholder: locale.value === 'ar' ? 'ما الذي تود الاستفسار عنه؟' : 'What would you like to inquire about?',
  message: locale.value === 'ar' ? 'الرسالة *' : 'Message *',
  messagePlaceholder: locale.value === 'ar' ? 'أخبرنا بمزيد من التفاصيل...' : 'Tell us more details...',
  submit: locale.value === 'ar' ? 'إرسال الرسالة' : 'Send Message',
  submitting: locale.value === 'ar' ? 'جاري الإرسال...' : 'Sending...',
  successTitle: locale.value === 'ar' ? 'تم إرسال رسالتك بنجاح' : 'Your message has been sent successfully',
  successText: locale.value === 'ar' ? 'سنرد عليك قريباً' : "We'll get back to you soon",
  privacyNote: locale.value === 'ar' ? 'نحن نحترم خصوصيتك. اقرأ سياسة الخصوصية الخاصة بنا' : "We respect your privacy. Read our Privacy Policy",
  privacyLink: locale.value === 'ar' ? 'هنا' : 'here',
}))

const validateForm = (): boolean => {
  errors.value = {}
  
  if (!formData.value.name.trim()) {
    errors.value.name = locale.value === 'ar' ? 'الاسم مطلوب' : 'Name is required'
  }
  
  if (!formData.value.email.trim()) {
    errors.value.email = locale.value === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = locale.value === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format'
  }
  
  if (!formData.value.phone.trim()) {
    errors.value.phone = locale.value === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required'
  }
  
  if (!formData.value.subject.trim()) {
    errors.value.subject = locale.value === 'ar' ? 'الموضوع مطلوب' : 'Subject is required'
  }
  
  if (!formData.value.message.trim()) {
    errors.value.message = locale.value === 'ar' ? 'الرسالة مطلوبة' : 'Message is required'
  }
  
  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  submitError.value = ''
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    submitSuccess.value = true
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    submitError.value = locale.value === 'ar' 
      ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
      : 'An error occurred while sending the message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Success Message -->
    <div 
      v-if="submitSuccess && isClient"
      class="p-4 rounded-lg bg-accent/10 border border-accent/30 flex items-start gap-3 animate-fade-in-up"
    >
      <SafeIcon name="CheckCircle" :size="20" class="text-accent flex-shrink-0 mt-0.5" />
      <div>
        <p class="font-medium text-accent">{{ labels.successTitle }}</p>
        <p class="text-sm text-accent/80">{{ labels.successText }}</p>
      </div>
    </div>
    
    <!-- Error Message -->
    <div 
      v-if="submitError && isClient"
      class="p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3"
    >
      <SafeIcon name="AlertCircle" :size="20" class="text-destructive flex-shrink-0 mt-0.5" />
      <p class="text-sm text-destructive">{{ submitError }}</p>
    </div>
    
    <!-- Name Field -->
    <div class="space-y-2">
      <Label for="name" class="text-foreground font-medium">
        {{ labels.name }}
      </Label>
      <Input
        id="name"
        v-model="formData.name"
        type="text"
        :placeholder="labels.namePlaceholder"
        :class="errors.name ? 'border-destructive' : ''"
        :disabled="isSubmitting"
      />
      <p v-if="errors.name && isClient" class="text-sm text-destructive">
        {{ errors.name }}
      </p>
    </div>
    
    <!-- Email Field -->
    <div class="space-y-2">
      <Label for="email" class="text-foreground font-medium">
        {{ labels.email }}
      </Label>
      <Input
        id="email"
        v-model="formData.email"
        type="email"
        :placeholder="labels.emailPlaceholder"
        :class="errors.email ? 'border-destructive' : ''"
        :disabled="isSubmitting"
      />
      <p v-if="errors.email && isClient" class="text-sm text-destructive">
        {{ errors.email }}
      </p>
    </div>
    
    <!-- Phone Field -->
    <div class="space-y-2">
      <Label for="phone" class="text-foreground font-medium">
        {{ labels.phone }}
      </Label>
      <Input
        id="phone"
        v-model="formData.phone"
        type="tel"
        :placeholder="labels.phonePlaceholder"
        :class="errors.phone ? 'border-destructive' : ''"
        :disabled="isSubmitting"
      />
      <p v-if="errors.phone && isClient" class="text-sm text-destructive">
        {{ errors.phone }}
      </p>
    </div>
    
    <!-- Subject Field -->
    <div class="space-y-2">
      <Label for="subject" class="text-foreground font-medium">
        {{ labels.subject }}
      </Label>
      <Input
        id="subject"
        v-model="formData.subject"
        type="text"
        :placeholder="labels.subjectPlaceholder"
        :class="errors.subject ? 'border-destructive' : ''"
        :disabled="isSubmitting"
      />
      <p v-if="errors.subject && isClient" class="text-sm text-destructive">
        {{ errors.subject }}
      </p>
    </div>
    
    <!-- Message Field -->
    <div class="space-y-2">
      <Label for="message" class="text-foreground font-medium">
        {{ labels.message }}
      </Label>
      <Textarea
        id="message"
        v-model="formData.message"
        :placeholder="labels.messagePlaceholder"
        rows="6"
        :class="errors.message ? 'border-destructive' : ''"
        :disabled="isSubmitting"
      />
      <p v-if="errors.message && isClient" class="text-sm text-destructive">
        {{ errors.message }}
      </p>
    </div>
    
    <!-- Submit Button -->
    <Button 
      type="submit"
      size="lg"
      class="w-full"
      :disabled="isSubmitting"
    >
      <span v-if="!isSubmitting">{{ labels.submit }}</span>
      <span v-else class="flex items-center gap-2">
        <SafeIcon name="Loader2" :size="18" class="animate-spin" />
        {{ labels.submitting }}
      </span>
    </Button>
    
    <!-- Form Note -->
    <p class="text-xs text-muted-foreground text-center">
      {{ labels.privacyNote }}
      <a href="./privacy-cookie-policy.html" class="text-primary hover:underline">
        {{ labels.privacyLink }}
      </a>
    </p>
  </form>
</template>
