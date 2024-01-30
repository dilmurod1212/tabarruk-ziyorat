<template>
  <div class="w-full md:h-[650px] max-md:h-[500px] relative" :style="customStyle">
    <i
      @click="showModal"
      class="fa-solid fa-play flex absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-6xl max-md:text-4xl bg-redColor py-6 max-md:py-4 px-8 max-md:px-6 rounded-full border-4 border-red bg-red text-white"
    ></i>
  </div>
  <div class="container fixed max-md:bottom-1/4 lg:bottom-5 left-1/2 translate-x-[-50%] z-[150]">
      <div v-if="isShowModal"
        class="md:max-w-[90%] w-full border text-white flex flex-col m-auto rounded-xl bg-dark"
      >
        <div class="flex items-center justify-between p-4 border-b">
          <p class="md:text-2xl font-medium">
            Explore the valuable, historical, and heritage places of Turkic countries
          </p>
          <i
            @click="closeModal"
            class="fa-solid fa-xmark text-2xl text-gray-500 hover:text-white transition ease-out"
          ></i>
        </div>
        <div>
          <iframe
            class="rounded-b-xl max-md:h-[350px]"
            v-if="url"
            width="100%"

            height="515"
            :src="url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const customStyle = computed(() => {
  return {
    background: `linear-gradient(180deg, #07091C -4.12%, rgba(7, 9, 28, 0.60) 49.39%, rgba(7, 9, 28, 0.20) 85.78%, #07091C 100%), url('/images/Hero/banner.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
})
const isShowModal = ref(false)
const scrollPositionY = ref(0)
const scrollTop = ref(0)
const scrolLeft = ref(0)

function showModal() {
  isShowModal.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  isShowModal.value = false
  document.body.style.overflow = 'auto'

}

const link = ref('https://www.youtube.com/watch?v=4j2Uzwv4L2g')
const url = computed(() => {
  if (link.value.includes('watch')) {
    const list = link.value.split('watch?v=')
    return list?.[0] + 'embed/' + list?.[1]
  } else {
    return link.value
  }
})
</script>