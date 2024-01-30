<template>
  <div>
    <div class="text-white my-4" :class="titleClass">
      <h2 class="text-2xl md:text-3xl capitalize font-bold">{{ title }}</h2>
      <p class="text-sm opacity-60 mt-2">{{ descr }}</p>
    </div>
    <div
      class="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 rounded-lg overflow-hidden"
      :class="wrapperClass"
    >
      <slot name="card">
        <router-link
          :to="{
            name: 'Destination',
            params: { slug: el.slug },
          }"
          v-for="el in data"
          :key="el.id"
          class="relative overflow-hidden rounded-lg group cursor-pointer border border-white/30"
          :class="itemClass"
        >
          <img
            :src="el.image"
            alt=""
            class="w-full aspect-square object-cover max-sm:min-w-[200px] group-hover:scale-110 overflow-hidden transition-all"
          />
          <div
            class="absolute bottom-0 left-0 text-white w-full px-2 py-4 duration-300 flex items-end justify-start rounded-b-lg transition-all"
            :class="shadowClass"
          >
            <slot :data="el" name="cardTitle">
              <p class="text-white pt-4">{{ el.title }}</p>
            </slot>
          </div>
        </router-link>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  wrapper?: string;
  wrapperClass?: string;
  itemClass?: string;
  titleClass?: string;
  shadowClass?: string;
  title?: string;
  descr?: string;
  options?: {
    name: string;
    img: string;
    country: string;
  }[];
}
const props = defineProps<Props>();
const data = computed(()=>props.options)
</script>

<style scoped>
.shadow-img {
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0));
}
.shadow-full {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1));
  height: 100%;
}
</style>
