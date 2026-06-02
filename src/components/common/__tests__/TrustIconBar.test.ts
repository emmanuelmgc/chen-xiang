import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TrustIconBar from '../TrustIconBar.vue'
import { h } from 'vue'

// Mock SafeIcon component with a simple render function
vi.mock('@/components/common/SafeIcon.vue', () => ({
  default: {
    name: 'SafeIcon',
    props: ['name', 'size', 'color', 'strokeWidth', 'class'],
    render() {
      return h('div', { 
        'data-testid': 'safe-icon',
        'data-name': this.name,
        'data-size': this.size
      })
    }
  }
}))

// Mock useLanguage composable
const mockLocale = { value: 'ar' }
vi.mock('@/lib/useLanguage', () => ({
  useLanguage: () => ({
    locale: mockLocale,
    initLanguage: vi.fn()
  })
}))

describe('TrustIconBar', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockLocale.value = 'ar'
  })

  it('should render correctly', () => {
    const wrapper = mount(TrustIconBar)
    
    expect(wrapper.exists()).toBe(true)
  })

  it('should render all trust items', () => {
    const wrapper = mount(TrustIconBar)
    
    // Should render 5 items (based on GLOBAL_TRUST_USPS in the component)
    const items = wrapper.findAll('.flex.flex-col')
    expect(items.length).toBe(5)
  })

  it('should render SafeIcon for each item', () => {
    const wrapper = mount(TrustIconBar)
    
    const icons = wrapper.findAll('[data-testid="safe-icon"]')
    expect(icons.length).toBe(5)
  })

  it('should display Arabic titles when locale is ar', () => {
    mockLocale.value = 'ar'
    const wrapper = mount(TrustIconBar)
    
    // Check that Arabic text is present
    expect(wrapper.text()).toContain('دخان منخفض')
  })

  it('should display English titles when locale is en', () => {
    mockLocale.value = 'en'
    const wrapper = mount(TrustIconBar)
    
    // Check that English text is present
    expect(wrapper.text()).toContain('Low Smoke Formula')
  })

  it('should have proper CSS classes for layout', () => {
    const wrapper = mount(TrustIconBar)
    
    const container = wrapper.find('.overflow-x-auto')
    expect(container.exists()).toBe(true)
  })
})
