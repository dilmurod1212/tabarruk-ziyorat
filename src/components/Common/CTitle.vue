<template>
  <div
    class="title text-white text-center my-4 mt-12 z-20"
    :class="wrapperClass"
  >
    <h2
      class="font-gilroy text-2xl md:text-3xl lg:text-4xl z-20 capitalize font-bold border-b-2 border-b-red inline-block pb-2"
      :class="titleClass"
    >
      {{ title }}
    </h2>
    <!-- <div
      class="h-[2px] w-2/12 max-md:w-2/6 bg-red mx-auto mt-3"
      :class="lineClass"
    ></div> -->
    <p class="text-base md:text-xl mt-3 max-md:text-sm" :class="descrClass">
      {{ descr }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  descr?: string;
  titleClass?: string;
  wrapperClass?: string;
  descrClass?: string;
  lineClass?: string;
}
defineProps<Props>();
</script>
