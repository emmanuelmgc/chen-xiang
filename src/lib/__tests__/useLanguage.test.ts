import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useLanguage } from '../useLanguage'

describe('useLanguage', () => {
  let mockLocalStorage: Record<string, string> = {}
  let mockSetAttribute: any

  beforeEach(() => {
    // Mock localStorage
    mockLocalStorage = {}
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn((key: string) => mockLocalStorage[key] || null),
        setItem: vi.fn((key: string, value: string) => {
          mockLocalStorage[key] = value
        }),
        removeItem: vi.fn((key: string) => {
          delete mockLocalStorage[key]
        })
      },
      writable: true,
      configurable: true
    })

    // Mock document.documentElement
    mockSetAttribute = vi.fn()
    Object.defineProperty(document, 'documentElement', {
      value: {
        setAttribute: mockSetAttribute
      },
      writable: true,
      configurable: true
    })

    // Mock window.dispatchEvent
    window.dispatchEvent = vi.fn()
    
    // Reset locale to default 'ar' before each test
    const { setLocale } = useLanguage()
    setLocale('ar')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return locale ref and functions', () => {
    const { locale, setLocale, toggleLocale, initLanguage } = useLanguage()
    
    expect(locale).toBeDefined()
    expect(typeof setLocale).toBe('function')
    expect(typeof toggleLocale).toBe('function')
    expect(typeof initLanguage).toBe('function')
  })

  it('should set locale and update localStorage', () => {
    const { locale, setLocale } = useLanguage()
    
    setLocale('en')
    
    expect(locale.value).toBe('en')
    expect(window.localStorage.setItem).toHaveBeenCalledWith('preferred-lang', 'en')
  })

  it('should toggle between ar and en', () => {
    const { locale, setLocale, toggleLocale } = useLanguage()
    
    // Start with default 'ar'
    expect(locale.value).toBe('ar')
    
    // Toggle to 'en'
    toggleLocale()
    expect(locale.value).toBe('en')
    
    // Toggle back to 'ar'
    toggleLocale()
    expect(locale.value).toBe('ar')
  })

  it('should update document direction when setting locale', () => {
    const { setLocale } = useLanguage()
    
    setLocale('ar')
    expect(mockSetAttribute).toHaveBeenCalledWith('dir', 'rtl')
    expect(mockSetAttribute).toHaveBeenCalledWith('lang', 'ar-SA')
    
    setLocale('en')
    expect(mockSetAttribute).toHaveBeenCalledWith('dir', 'ltr')
    expect(mockSetAttribute).toHaveBeenCalledWith('lang', 'en')
  })

  it('should dispatch lang-change event when setting locale', () => {
    const { setLocale } = useLanguage()
    
    setLocale('en')
    
    expect(window.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'lang-change',
        detail: { locale: 'en' }
      })
    )
  })
})
