<template>
  <ul class="pagination flex items-center gap-2">
    <li v-if="paginationButtons && !hasFirst" :class="`${itemClass} ${disableClass}`" class="items-center justify-center flex-items  flex">
      <button @click="first">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    </li>
    <li v-for="page in items" :key="page.label" :class="pageClasses(page)">
      <span v-if="page.disable" class="w-full h-full flex items-center justify-center">
        ...
      </span>
      <button v-else class="w-full h-full" @click="goto(page.label)">
        {{ page.label }}
      </button>
    </li>
    <li v-if="paginationButtons && !hasLast" :class="`${itemClass} ${disableClass}`" class="items-center justify-center flex-items  flex">
      <button @click="last" >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';

interface Page {
  label: number;
  active: boolean;
  disable: boolean;
}

interface Props {
  currentPage: number;
  total: number;
  limit: number;
  itemClass?: string;
  activeClass?: string;
  disableClass?: string;
  paginationButtons?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  itemClass: 'text-white border border-white rounded-md w-8 h-8 flex-center transition-300',
  activeClass: '!bg-red-600 !border-transparent !text-white',
});

const emit = defineEmits(['change', 'input']);

const pageCount = computed(() => Math.ceil(props.total / props.limit));

const items = computed(() => {
  const valPrev = props.currentPage > 1 ? props.currentPage - 1 : 1;
  const valNext = props.currentPage < pageCount.value ? props.currentPage + 1 : pageCount.value;
  const output: Page[] = [];

  for (let i = 1; i <= pageCount.value; i += 1) {
    if ([1, pageCount.value, props.currentPage, valPrev, valNext].includes(i)) {
      output.push({
        label: i,
        active: props.currentPage === i,
        disable: false,
      });
    } else if (i < props.currentPage - 1 || i > props.currentPage + 1) {
      if (output[output.length - 1]?.disable !== true) {
        output.push({ label: -1, active: false, disable: true });
      }
    }
  }

  return output;
});

const hasFirst = computed(() => props.currentPage === 1);
const hasLast = computed(() => props.currentPage === pageCount.value);

watch(() => props.currentPage, () => emit('change'));

function first() {
  if (!hasFirst.value) {
    emit('input', 1);
  }
}

function goto(page: number) {
  emit('input', page);
}

function last() {
  if (!hasLast.value) {
    emit('input', pageCount.value);
  }
}

function pageClasses(page: Page) {
  return `${props.itemClass} ${page.active ? props.activeClass : ''} ${
    page.disable ? props.disableClass : ''
  }`;
}

onMounted(() => {
  if (props.currentPage > pageCount.value) {
    emit('change');
  }
});
</script>






