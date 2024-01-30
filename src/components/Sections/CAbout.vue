<template>
  <div class="container text-white">
    <CTitle
      title="About us"
      wrapper-class="text-start mt-4"
      line-class="mx-0 w-[100px]"
    />
    <div
      class="grid grid-cols-2 gap-5 max-lg:grid-cols-1 max-lg:grid-flow-col-reverse"
    >
      <AboutInfoVue />
      <CCarouselVue />
    </div>
  </div>
</template>
<script setup lang="ts">
import CTitle from "../Common/CTitle.vue";
import AboutInfoVue from "./CAbout/AboutInfo.vue";
import CCarouselVue from "./CAbout/CCarousel.vue";
</script>
<style></style>
