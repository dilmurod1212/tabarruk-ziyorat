<template>
<div>
    <transition name="fade" mode="out-in">
      <div :key="currentData" class="h-screen bg-cover bg-center bg-no-repeat" :style="customStyles">
        <div class="flex container flex-col items-center justify-center h-screen text-white">
          <!-- Your existing content here -->
          <p class="text-xl flex justify-center max-sm:text-sm items-center">
            <img src="/images/Hero/map.svg" alt="location icon" class="mr-1" />
            {{ currentData.location }}
          </p>
          <h1
            class="text-center text-[5rem] capitalize font-fontFamily-bannerFont font-bold banner-shadow max-sm:text-[40px]"
          >
            {{ currentData.name }}
          </h1>
          <p
            class="text-center text-xl font-medium mt-[40px]s w-[60%] max-lg:w-[100%] max-sm:mt-0 max-sm:text-sm leading-[130%] max-sm:mt-4"
          >
            {{ currentData.title }}
          </p>
          <CButton title="Explore" variant="red" class="my-6">
            <div class="flex items-center gap-1">
              {{ $t('explore') }}
              <img src="/images/button/arrow-sm-right.svg" alt="" />
            </div>
          </CButton>
          <div
            class="absolute right-0 top-[50%] -translate-y-1/2 flex flex-col items-center gap-2 justify-center transform w-[140px] max-lg:hidden"
          >
            <p>{{ currentData.id }}</p>
            <div class="w-2 h-[134px] bg-gray-50 rounded-md">
              <div :style="{ height: progressBarWidth }" class="bg-white h-full w-full rounded-md"></div>
            </div>
            <p>{{ currentData.id + 1 }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div class="w-[100%] transform -translate-y-[50%]">
      <swiper
        :slidesPerView="1.2"
        :autoplay="{ delay: 1500, disableOnInteraction: false }"
        :centeredSlides="true"
        :spaceBetween="20"
        :loop="true"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20
          },
          '768': {
            slidesPerView: 2.2,
            spaceBetween: 20
          },
          '1024': {
            slidesPerView: 2.8,
            spaceBetween: 30
          },
          '1280': {
            slidesPerView: 3.5,
            spaceBetween: 30
          }
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(el, idx) in CCHeroCardInfo" :key="idx" class="" :virtualIndex="idx">
          <CCHeroCardVue :data="el"/>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import CButton from '../Form/CButton.vue'
import { ref, onMounted, onBeforeUnmount, reactive, onUnmounted, computed } from 'vue'
import CCHeroCardVue from '../Cards/CCHeroCard.vue'
import CCHeroCardInfo from '../../assets/Data/CCHeroCardInfo'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
const modules = reactive([Autoplay, Pagination, Navigation])

const dataValue = [
  {
    name: 'Samarkand Square',
    title:
      'Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th century.',
    id: 1,
    location: 'Samarkand, Uzbekistan',
    images: '/images/Hero/banner.svg'
  },
  {
    name: 'Minaret Kalyan',
    title:
      'Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th century.',
    id: 2,
    location: 'Bukhara, Uzbekistan',
    images: '/images/Hero/Bukhara.jpeg'
  },
  {
    name: 'Tashkent Square',
    title:
      'Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th century.',
    id: 3,
    location: 'Tashkent, Uzbekistan',
    images: '/images/Hero/Tashkent.jpeg'
  }
]
const totalDuration = 5000
const updateInterval = 100

const reactiveData = dataValue.map((item) => reactive(item))
const currentData = ref(reactiveData[0])
const progressBarWidth = ref('0%')

let elapsedTime = 0

const updateProgressBar = () => {
  elapsedTime += updateInterval
  const progressPercentage = (elapsedTime / totalDuration) * 100
  progressBarWidth.value = `${progressPercentage}%`

  if (elapsedTime >= totalDuration) {
    elapsedTime = 0
    progressBarWidth.value = '0%'
    updateData()
  }
}

const updateData = () => {
  const currentIndex = reactiveData.indexOf(currentData.value)
  const nextIndex = (currentIndex + 1) % reactiveData.length
  currentData.value = reactiveData[nextIndex]
}

onMounted(() => {
  setInterval(updateProgressBar, updateInterval)
})

onBeforeUnmount(() => {
  clearInterval(updateProgressBar)
})
const customStyles = computed(() => {
      return {
        backgroundImage: `linear-gradient(180deg, #07091C -4.12%, rgba(7, 9, 28, 0.60) 49.39%, rgba(7, 9, 28, 0.20) 85.78%, #07091C 100%), url(${currentData.value.images})`,
      };
    });
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.content {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>