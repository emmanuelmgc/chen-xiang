import { ref, watch } from 'vue'

export type Locale = 'ar' | 'en'

// Global reactive locale state
const currentLocale = ref<Locale>('ar')

// Initialize from localStorage on client
function initLanguage() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('preferred-lang') as Locale | null
    if (stored && (stored === 'ar' || stored === 'en')) {
      currentLocale.value = stored
    }
    // Update document attributes
    updateDocumentAttrs(currentLocale.value)
  }
}

// Update document dir and lang attributes
function updateDocumentAttrs(locale: Locale) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', locale === 'ar' ? 'ar-SA' : 'en')
  }
}

// Set locale and persist to localStorage
function setLocale(locale: Locale) {
  currentLocale.value = locale
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-lang', locale)
    updateDocumentAttrs(locale)
    // Dispatch custom event so non-Vue pages can listen
    window.dispatchEvent(new CustomEvent('lang-change', { detail: { locale } }))
  }
}

// Toggle between ar and en
function toggleLocale() {
  const newLocale = currentLocale.value === 'ar' ? 'en' : 'ar'
  setLocale(newLocale)
}

// Watch for changes and update localStorage
if (typeof window !== 'undefined') {
  watch(currentLocale, (newLocale) => {
    localStorage.setItem('preferred-lang', newLocale)
    updateDocumentAttrs(newLocale)
  })
}

export function useLanguage() {
  return {
    locale: currentLocale,
    setLocale,
    toggleLocale,
    initLanguage
  }
}
