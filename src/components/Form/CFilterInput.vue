<template>
    <div class="flex items-center bg-gray-350 text-gray-100 rounded-md pl-2 w-full max-lg:py-2">
        <slot name="prefix"></slot>
        <input
         type="text" 
         :placeholder="placeHolder" 
         class="text-base placeholder:text-gray-100 bg-transparent border-none w-full rounded-md text-white focus:outline-none !outline-none active:ring-0 focus:border-none focus:ring-0"
         :value="modelValue"
        @input="(event) => emit('update:modelValue', event.target?.value)"
         >
        <slot name="suffix"></slot>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    placeHolder: string
    modelValue: string | number
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', val: Event):void
}>()
</script>