
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon.vue'

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
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

const validateForm = (): boolean => {
  errors.value = {}
  
  if (!formData.value.name.trim()) {
    errors.value.name = 'الاسم مطلوب'
  }
  
  if (!formData.value.email.trim()) {
    errors.value.email = 'البريد الإلكتروني مطلوب'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'البريد الإلكتروني غير صحيح'
  }
  
  if (!formData.value.phone.trim()) {
    errors.value.phone = 'رقم الهاتف مطلوب'
  }
  
  if (!formData.value.subject.trim()) {
    errors.value.subject = 'الموضوع مطلوب'
  }
  
  if (!formData.value.message.trim()) {
    errors.value.message = 'الرسالة مطلوبة'
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
    submitError.value = 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
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
        <p class="font-medium text-accent">تم إرسال رسالتك بنجاح</p>
        <p class="text-sm text-accent/80">سنرد عليك قريباً</p>
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
        الاسم الكامل *
      </Label>
      <Input
        id="name"
        v-model="formData.name"
        type="text"
        placeholder="أدخل اسمك الكامل"
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
        البريد الإلكتروني *
      </Label>
      <Input
        id="email"
        v-model="formData.email"
        type="email"
        placeholder="your@email.com"
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
        رقم الهاتف *
      </Label>
      <Input
        id="phone"
        v-model="formData.phone"
        type="tel"
        placeholder="+966 50 000 0000"
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
        الموضوع *
      </Label>
      <Input
        id="subject"
        v-model="formData.subject"
        type="text"
        placeholder="ما الذي تود الاستفسار عنه؟"
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
        الرسالة *
      </Label>
      <Textarea
        id="message"
        v-model="formData.message"
        placeholder="أخبرنا بمزيد من التفاصيل..."
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
      <span v-if="!isSubmitting">إرسال الرسالة</span>
      <span v-else class="flex items-center gap-2">
        <SafeIcon name="Loader2" :size="18" class="animate-spin" />
        جاري الإرسال...
      </span>
    </Button>
    
    <!-- Form Note -->
    <p class="text-xs text-muted-foreground text-center">
      نحن نحترم خصوصيتك. اقرأ سياسة الخصوصية الخاصة بنا
      <a href="./privacy-cookie-policy.html" class="text-primary hover:underline">
        هنا
      </a>
    </p>
  </form>
</template>
