import { describe, it, expect } from 'vitest'
import { toArabicNumerals, fromArabicNumerals, formatPrice, formatNumber, formatDate } from '../formatters'

describe('formatters', () => {
  describe('toArabicNumerals', () => {
    it('should convert single digits to Arabic numerals', () => {
      expect(toArabicNumerals('0')).toBe('٠')
      expect(toArabicNumerals('1')).toBe('١')
      expect(toArabicNumerals('9')).toBe('٩')
    })

    it('should convert multi-digit numbers to Arabic numerals', () => {
      expect(toArabicNumerals('123')).toBe('١٢٣')
      expect(toArabicNumerals('456')).toBe('٤٥٦')
      expect(toArabicNumerals('789')).toBe('٧٨٩')
    })

    it('should convert numbers with hyphens (price ranges)', () => {
      expect(toArabicNumerals('99 - 179')).toBe('٩٩ - ١٧٩')
    })

    it('should handle number type input', () => {
      expect(toArabicNumerals(123)).toBe('١٢٣')
      expect(toArabicNumerals(0)).toBe('٠')
    })
  })

  describe('fromArabicNumerals', () => {
    it('should convert Arabic numerals to Western digits', () => {
      expect(fromArabicNumerals('٠')).toBe('0')
      expect(fromArabicNumerals('١')).toBe('1')
      expect(fromArabicNumerals('٩')).toBe('9')
    })

    it('should convert multi-digit Arabic numerals', () => {
      expect(fromArabicNumerals('١٢٣')).toBe('123')
      expect(fromArabicNumerals('٤٥٦')).toBe('456')
    })
  })

  describe('formatPrice', () => {
    it('should format price for Arabic locale', () => {
      const result = formatPrice('99 - 179 SAR', 'ar')
      expect(result).toBe('٩٩ - ١٧٩ ريال')
    })

    it('should return original string for English locale', () => {
      const price = '99 - 179 SAR'
      expect(formatPrice(price, 'en')).toBe(price)
    })

    it('should handle single price', () => {
      expect(formatPrice('50 SAR', 'ar')).toBe('٥٠ ريال')
    })
  })

  describe('formatNumber', () => {
    it('should convert numbers to Arabic numerals for Arabic locale', () => {
      expect(formatNumber('123', 'ar')).toBe('١٢٣')
      expect(formatNumber('456', 'ar')).toBe('٤٥٦')
    })

    it('should return original string for English locale', () => {
      expect(formatNumber('123', 'en')).toBe('123')
    })
  })

  describe('formatDate', () => {
    it('should format date as DD/MM/YYYY with Arabic numerals for Arabic locale', () => {
      const date = new Date(2026, 5, 15) // June 15, 2026
      const result = formatDate(date, 'ar')
      expect(result).toBe('١٥/٠٦/٢٠٢٦')
    })

    it('should format date as MM/DD/YYYY for English locale', () => {
      const date = new Date(2026, 5, 15) // June 15, 2026
      const result = formatDate(date, 'en')
      expect(result).toBe('06/15/2026')
    })

    it('should pad single digit days and months', () => {
      const date = new Date(2026, 0, 5) // January 5, 2026
      expect(formatDate(date, 'en')).toBe('01/05/2026')
      expect(formatDate(date, 'ar')).toBe('٠٥/٠١/٢٠٢٦')
    })
  })
})
