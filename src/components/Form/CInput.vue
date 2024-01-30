<template>
  <div class="relative m-0 p-0 bg-transparent border-none">
    <input
      :id="id"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      class="rounded-md w-full border bg-white/10 outline-none p-3 border-white/10 focus:ring-0"
      :class="[{ '!border-red': error }, inputClass]"
      :max="max"
      :min="min"
      @change="$emit('change')"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  inputClass: string;
  modelValue: string;
  id?: string;
  max?: number;
  min?: number;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  error?: boolean;
}>();
</script>

<style scoped>
.error {
  border-color: red;
}
</style>
