
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { B2B_FORM_FIELDS } from '@/data/b2b_content'
import { toast } from 'vue-sonner'

const isClient = ref(true)
const isSubmitting = ref(false)

const formData = ref({
  company_name: '',
  contact_person: '',
  city: '',
  whatsapp: '',
  email: '',
  volume_range: '',
  interested_category: [] as string[],
  custom_notes: '',
})

onMounted(() => {
  isClient.value = false
  
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

function toggleCategory(value: string) {
  const index = formData.value.interested_category.indexOf(value)
  if (index > -1) {
    formData.value.interested_category.splice(index, 1)
  } else {
    formData.value.interested_category.push(value)
  }
}

async function handleSubmit() {
  if (!isClient.value) return
  
  // Validation
  if (!formData.value.company_name || !formData.value.contact_person || !formData.value.whatsapp) {
    toast.error('يرجى ملء جميع الحقول المطلوبة')
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to success page
    window.location.href = './b2b-form-success.html'
  } catch (error) {
    toast.error('حدث خطأ أثناء إرسال النموذج')
    isSubmitting.value = false
  }
}
</script>

<template>
  <div id="b2b-inquiry-form" class="bg-card rounded-lg border border-border/30 p-8 md:p-12 shadow-soft">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Company Name -->
      <div class="space-y-2">
        <Label for="company_name" class="text-base font-medium">
          اسم الشركة/الفندق *
        </Label>
        <Input
          id="company_name"
          v-model="formData.company_name"
          type="text"
          placeholder="اسم الفندق أو الشركة"
          class="h-12"
          :disabled="!isClient"
        />
      </div>
      
      <!-- Contact Person -->
      <div class="space-y-2">
        <Label for="contact_person" class="text-base font-medium">
          اسم مسؤول التواصل *
        </Label>
        <Input
          id="contact_person"
          v-model="formData.contact_person"
          type="text"
          placeholder="خالد العلي"
          class="h-12"
          :disabled="!isClient"
        />
      </div>
      
      <!-- City -->
      <div class="space-y-2">
        <Label for="city" class="text-base font-medium">
          المدينة *
        </Label>
        <Input
          id="city"
          v-model="formData.city"
          type="text"
          placeholder="الرياض / جدة / دبي"
          class="h-12"
          :disabled="!isClient"
        />
      </div>
      
      <!-- WhatsApp -->
      <div class="space-y-2">
        <Label for="whatsapp" class="text-base font-medium">
          رقم الـ WhatsApp *
        </Label>
        <Input
          id="whatsapp"
          v-model="formData.whatsapp"
          type="tel"
          placeholder="+966XXXXXXXXX"
          class="h-12"
          :disabled="!isClient"
        />
      </div>
      
      <!-- Email -->
      <div class="space-y-2">
        <Label for="email" class="text-base font-medium">
          البريد الإلكتروني
        </Label>
        <Input
          id="email"
          v-model="formData.email"
          type="email"
          placeholder="info@company.com"
          class="h-12"
          :disabled="!isClient"
        />
      </div>
      
      <!-- Volume Range -->
      <div class="space-y-2">
        <Label for="volume_range" class="text-base font-medium">
          نطاق الكمية المتوقعة (للدفعة الواحدة) *
        </Label>
        <Select v-model="formData.volume_range" :disabled="!isClient">
          <SelectTrigger id="volume_range" class="h-12">
            <SelectValue placeholder="اختر نطاق الكمية" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1_10k">1,000 - 10,000 SAR</SelectItem>
            <SelectItem value="10_50k">10,000 - 50,000 SAR</SelectItem>
            <SelectItem value="50k_plus">أكثر من 50,000 SAR</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <!-- Interested Categories -->
      <div class="space-y-3">
        <Label class="text-base font-medium">
          فئات المنتجات المهتم بها *
        </Label>
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <Checkbox
              id="incense_sticks"
              :checked="formData.interested_category.includes('incense_sticks')"
              @update:checked="toggleCategory('incense_sticks')"
              :disabled="!isClient"
            />
            <Label for="incense_sticks" class="font-normal cursor-pointer">
              أعواد البخور
            </Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox
              id="bakhoor"
              :checked="formData.interested_category.includes('bakhoor')"
              @update:checked="toggleCategory('bakhoor')"
              :disabled="!isClient"
            />
            <Label for="bakhoor" class="font-normal cursor-pointer">
              بخور ورقائق العود
            </Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox
              id="mabkhara"
              :checked="formData.interested_category.includes('mabkhara')"
              @update:checked="toggleCategory('mabkhara')"
              :disabled="!isClient"
            />
            <Label for="mabkhara" class="font-normal cursor-pointer">
              مباخر وملحقات
            </Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox
              id="gift_sets"
              :checked="formData.interested_category.includes('gift_sets')"
              @update:checked="toggleCategory('gift_sets')"
              :disabled="!isClient"
            />
            <Label for="gift_sets" class="font-normal cursor-pointer">
              مجموعات الهدايا
            </Label>
          </div>
        </div>
      </div>
      
      <!-- Custom Notes -->
      <div class="space-y-2">
        <Label for="custom_notes" class="text-base font-medium">
          ملاحظات إضافية (تخصيص، موعد تسليم)
        </Label>
        <Textarea
          id="custom_notes"
          v-model="formData.custom_notes"
          placeholder="أخبرنا عن احتياجاتك الخاصة..."
          class="min-h-32 resize-none"
          :disabled="!isClient"
        />
      </div>
      
      <!-- Submit Button -->
      <Button
        type="submit"
        size="lg"
        class="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12"
        :disabled="isSubmitting || !isClient"
      >
        {{ isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب' }}
      </Button>
      
      <!-- Privacy Notice -->
      <p class="text-sm text-muted-foreground text-center">
        نحن نحترم خصوصيتك. سيتم استخدام بيانات الاتصال الخاصة بك فقط للرد على استفسارك.
      </p>
    </form>
  </div>
</template>

<style scoped>
/* Form input focus styles */
:deep(input:focus),
:deep(textarea:focus),
:deep([role="combobox"]:focus) {
  outline: none;
  border-color: hsl(var(--primary));
  box-shadow: 0 0 0 3px hsl(var(--primary) / 0.1);
}

/* Disabled state */
:deep(input:disabled),
:deep(textarea:disabled),
:deep([role="combobox"]:disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
