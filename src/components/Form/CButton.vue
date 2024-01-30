<template>
  <button
    v-bind="{ disabled }"
    :disabled="true"
    class="rounded-lg w-fit flex-center cursor-pointer"
    :class="[sizes[size], variants[variant], { 'pointer-events-none': disabled }, btnClass ] "
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
interface Props {
  text?: string
  btnClass?: string
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'red'
  size?: 'normal' | 'small'
  iconName?: string
}
withDefaults(defineProps<Props>(), {
  hasShadow: true,
  text: 'Button',
  textClass: '',
  shadowColor: '',
  disabled: false,
  loading: false,
  variant: 'primary',
  size: 'normal',
  iconName: ''
})
const sizes = {
  small: '!px-4 !py-2 !rounded-10 !text-sm',
  normal: '!px-7 !py-3 !text-base'
}
const variants = {
  primary: 'bg-gray-700 hover:bg-gray-800 active:scale-95 transition-all active:ring-2 active:ring-gray-700  z-10 text-white',
  red: 'bg-red hover:bg-red-500 active:scale-95 transition-all  z-10 text-white',
}
</script>

