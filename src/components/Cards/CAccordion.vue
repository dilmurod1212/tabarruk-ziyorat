<template>
  <div
    class="p-5 flex flex-col justify-center rounded-xl border h-fit border-white/20 bg-white/[0.04] text-white cursor-pointer min-h-[98px]"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <img :src="icon" alt="" class="p-2 rounded-lg bg-red-600 border border-red-400" />
        <h2 class="text-xl max-lg:text-base max-md:text-sm line-clamp-2">{{ title }}</h2>
      </div>
      <div class="rounded-lg bg-white/10 border border-white/10 cursor-pointer">
        <i
          class="fas fa-chevron-down transition-all p-2"
          :class="{ 'rotate-180 transition-transform': show }"
        ></i>
      </div>
    </div>
    <div v-auto-animate>
      <p
        v-if="show"
        class="mt-5 pt-5 pl-0 font-light border-t max-lg:text-sm max-md:text-xs border-t-white/20 transition-all"
      >
        {{ descr }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  // option: {
  //   title: string
  //   id: number
  //   descr: string
  //   icon: string
  //   show: boolean
  // }
  title: string
  id: number
  descr: string
  icon: string
  show: boolean
}
defineProps<Props>()
const activeItem = ref(0)

const showItem = (id: number): void => {
  console.log(id, activeItem.value)

  if (activeItem.value == id) {
    activeItem.value = 0
  } else {
    activeItem.value = id
  }
}
</script>
