<template>
  <div
    class="container flex justify-between gap-4 max-lg:flex-wrap"
    :class="wrapperClass"
  >
    <CInfoItem
      v-for="(el, idx) in options"
      :key="idx"
      :count="el.count"
      :icon="el.img"
      :info="el.info"
      :length="options.length"
    />
  </div>
</template>

<script setup lang="ts">
import CInfoItem from "./CInfoItem.vue";

interface Props {
  options: {
    count: string | number;
    info: string;
    img: string;
  }[];
  wrapperClass?: string;
  itemClass?: string;
}

defineProps<Props>();
</script>
