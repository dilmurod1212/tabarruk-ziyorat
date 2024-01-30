<template>
    <div class="relative overflow-hidden w-full h-[200px] lg:h-[550px]" loading="false" data-v-fdb8a45c="">
     <div class="w-full h-full flex -y-center relative">
       <div v-for="(image, idx) in dynamicImages" :key="idx" class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]">
         <img class="w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6] opacity-1" alt="banner-image" lazy="loaded" :src="`${image}`">
       </div>
       <img class="w-full h-full absolute left-0 max-w-[30%] object-cover" alt="banner-image" lazy="loaded" src="/images/Sections/CAbout/country3.webp">
       <img class="w-full h-full absolute right-0 max-w-[30%] object-cover" alt="banner-image" lazy="loaded" src="/images/Sections/CAbout/country3.webp">
       <div class="w-full h-full absolute inset-0 bg-dark/20 z-[2]">
       </div>
     </div>
   </div>
 </template>
 <script setup lang="ts">
 import { reactive } from 'vue';
 defineProps ({image:String})
 const dynamicImages = reactive(['/images/Sections/CAbout/country1.webp', '/images/Sections/CAbout/country2.webp', '/images/Sections/CAbout/country3.webp', '/images/Sections/CAbout/country4.webp', '/images/Sections/CAbout/country5.webp', '/images/Sections/CAbout/country6.webp',])
 </script>