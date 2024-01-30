<template>
  <CCheckbox
    v-for="(item, index) in options"
    :key="index"
    :id="item[valueKey]"
    :text="item[labelKey]"
    :icon="item?.flag"
    @update:model-value="handleCheckbox(item[valueKey])"
    :checked="modelValue.includes(item[valueKey])"
  />
  <pre>{{ selectedValues }}</pre>
</template>
<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import CCheckbox from "@/components/Form/CCheckbox.vue";
interface Props {
  options: { [key: string]: string | number }[];
  labelKey: string;
  valueKey: string;
  modelValue: number[];
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", val: (string | number)[]): void;
}>();
const checkedList = ref<number[]>([]);
const selectedValues = computed({
  get() {
    return props.modelValue;
  },
  set(value: number[]) {
    checkedList.value = value;
  },
});
function handleCheckbox(id: number) {
  if (selectedValues.value.includes(id)) {
    selectedValues.value.splice(
      selectedValues.value.findIndex((el) => el === id),
      1
    );
  } else {
    selectedValues.value.push(id);
  }
  emit("update:modelValue", selectedValues.value);
}
</script>
