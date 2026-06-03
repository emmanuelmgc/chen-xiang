<script setup lang="ts">
import { computed, defineAsyncComponent, h, ref, onMounted } from 'vue';
import { Circle } from 'lucide-vue-next';
import { useLanguage } from '@/lib/useLanguage';

interface Props {
  name: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  strokeWidth: 2,
});

const { locale } = useLanguage();

// REAL_ASSET_REQUIRED: RTL icon flipping for directional icons
const RTL_FLIP_MAP: Record<string, string> = {
  'ArrowRight': 'ArrowLeft',
  'ArrowLeft': 'ArrowRight',
  'ChevronRight': 'ChevronLeft',
  'ChevronLeft': 'ChevronRight',
  'ChevronDown': 'ChevronDown', // No flip needed
  'ChevronUp': 'ChevronUp', // No flip needed
  'ArrowUpRight': 'ArrowUpLeft',
  'ArrowUpLeft': 'ArrowUpRight',
  'MoveRight': 'MoveLeft',
  'MoveLeft': 'MoveRight',
};

const resolvedName = computed(() => {
  if (locale.value === 'ar') {
    return RTL_FLIP_MAP[props.name] || props.name;
  }
  return props.name;
});

// Dynamically import icon, fallback to Circle if not found
const IconComponent = computed(() => {
  try {
    return defineAsyncComponent(() =>
      import('lucide-vue-next')
        .then((module) => {
          const icon = (module as any)[resolvedName.value];
          if (!icon) {
            console.warn(`Icon "${resolvedName.value}" not found in lucide-vue-next, using fallback`);
            return Circle;
          }
          return icon;
        })
        .catch(() => {
          console.warn(`Failed to load icon "${resolvedName.value}", using fallback`);
          return Circle;
        })
    );
  } catch {
    return Circle;
  }
});
</script>

<template>
  <component
    :is="IconComponent"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :class="props.class"
  />
</template>

