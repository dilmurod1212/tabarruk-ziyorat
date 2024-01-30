<template>
    <div class="lg:container">
      <swiper
        :slidesPerView="1.2"
        :centeredSlides="true"
        :grabCursor="true"
        :spaceBetween="40"
        :loop="true"
       
        :breakpoints="{
          '768': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 40,
          }
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(el, idx) in info" :key="idx" v-slot="{ isActive }" class="pt-5">
          <div
            class="relative flex flex-col justify-center items-center text-center bg-white/20 border border-white/20 rounded-2xl"
            :class="{ 'scale-110': isActive }"
          >
            <img :src="el?.img" alt="" class="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
            <div class="p-4 mb-4 text-white pt-[60px]">
              <p class="text-[#E54545] font-bold text-sm" :class="{'text-lg': isActive}">{{ el?.name }}</p>
              <p class="opacity-80 font-light text-xs" :class="{'text-base': isActive}">{{ el?.title }}</p>
              <p class="font-bold text-sm mt-4 line-clamp-3" :class="{'text-lg line-clamp-3': isActive}">​​{{ el?.descr }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="text-white">
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { reactive,ref, onMounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/effect-coverflow'
  import 'swiper/css/pagination'
  import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { isatty } from 'tty'

  const statementData = ref(null)

  const fetchStatement=async()=>{
    try{
      const response = await fetch('https://tabarruk.uicgroup.tech/api/v1/about/StatementList')
      const data =  await response.json()
      statementData.value = data?.results
    }catch(error){
      console.log("Error occured while loading content", error)
    }
  }
  onMounted(fetchStatement)
  const modules = reactive([EffectCoverflow, Pagination, Navigation])
  const info = reactive([
    {
      id: 1,
      img: 'images/Sections/CAbout/President.svg',
      name: 'Shavkat Mirziyoyev',
      title: 'President of  Uzbekistan',
      descr: '​​To sit in love with the achievements is the greatest cave on the path of progress.'
    },
    {
      id: 2,
      img: 'images/Sections/CAbout/President2.svg',
      name: 'Tayyip Erdoğan',
      title: 'President of  Turkey',
      descr: "A political party cannot have a religion. Only individuals can. Otherwise, you'd be exploiting religion, and religion is so supreme that it cannot be exploited or taken advantage of."
    },
    {
      id: 1,
      img: 'images/Sections/CAbout/President.svg',
      name: 'Shavkat Mirziyoyev',
      title: 'President of  Uzbekistan',
      descr: '​​To sit in love with the achievements is the greatest cave on the path of progress.'
    },
    {
      id: 3,
      img: 'images/Sections/CAbout/President3.svg',
      name: 'Katalin Novák',
      title: 'President of  Hungary',
      descr: '​Let us admit: in the Western world, women today have similar chance for success as men. In terms of education, career, in terms of progress in employment. The real difference is giving or not giving birth.'
    },
  ])
  </script>
  <style>
  .mySwiper {
    padding: 50px 0;
  }
  </style>