<template>
  <label class="w-full text-white flex items-center justify-between border p-4 rounded-xl hover:border-white transition ease-out">
    <img v-if="icon" :src="icon" alt="" class="w-[20px] mr-2">
    <span class="text-sm font-medium">{{ text }}</span>
    <input type="checkbox"
           @change="handleInput"
           :value="id"
           :checked="checked"
           class="border bg-transparent rounded-sm checked:bg-red checked:text-white ml-auto"
    >
  </label>
</template>
<script setup lang="ts">
defineProps<{
    text: string
    icon?: string
    id?: number | string
    checked?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', id:number):void
}>()

const handleInput = (e: Event) => {
    emit('update:modelValue', e.target.checked)
}
</script>