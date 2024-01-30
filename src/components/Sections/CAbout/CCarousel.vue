<template>
    <div class="wrapper w-full">
      <swiper
        :slides-per-view="4"
        :centered-slides="false"
        :space-between="4"
        :navigation="true"
        :modules="modules"
        class="mySwiper images flex gap-2"
      >
        <swiper-slide
          v-for="(el, idx) in panels"
          :key="idx"
          class="panel bg-[url('/images/Sections/CAbout/country1.webp')]"
          :class="[el.class, el.isActive ? ' active' : '']"
          @mouseover="() => actived(el.id)"
        >
          <h3>{{ el.text }}</h3>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper/modules';
  const panels = reactive([
  {
    text: 'Machu Picchu',
    class: "bg-[url('/images/Sections/CAbout/country1.webp')] ",
    isActive: true,
    id: 1
  },
  {
    text: 'Angkor Wat',
    class: "bg-[url('/images/Sections/CAbout/country2.webp')]",
    isActive: false,
    id: 2
  },
  {
    text: 'Petra',
    class: "bg-[url('/images/Sections/CAbout/country3.webp')]",
    isActive: false,
    id: 3
  },
  {
    text: 'Stonehenge',
    class: "bg-[url('/images/Sections/CAbout/country4.webp')]",
    isActive: false,
    id: 4
  },
  {
    text: 'The Parthenon',
    class: "bg-[url('/images/Sections/CAbout/country5.webp')]",
    isActive: false,
    id: 5
  },
  {
    text: 'The Great Wall of China',
    class: "bg-[url('/images/Sections/CAbout/country6.webp')]",
    isActive: false,
    id: 6
  },
  {
    text: 'Taj Mahal',
    class: "bg-[url('/images/Sections/CAbout/country7.webp')]",
    isActive: false,
    id: 7
  },
  {
    text: 'Easter Island',
    class: "bg-[url('/images/Sections/CAbout/country8.webp')]",
    isActive: false,
    id: 8
  },
  
])
  const swiperRef = ref(null);
  const modules = [Pagination, Navigation];
  const actived = (id: number) => {
    panels.forEach((item) => {
      item.isActive = false;
      if (item.id === id) {
        item.isActive = true;
      }
    });
  };
  
  const prevSlide = () => {
    swiperRef.value.swiper.slidePrev();
  };
  
  const nextSlide = () => {
    swiperRef.value.swiper.slideNext();
  };
  </script>
  
  <style scoped>
  .wrapper {
    overflow: hidden;
  }
  
  .images {
    display: flex;
  }
  
  /* ------------------ */
  
  .panel {
    background-size: auto 110%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    height: 50vh;
    flex: 1;
    position: relative;
    transition: flex 0.3s ease-in;
    cursor: pointer;
  }
  
  .panel h3 {
    font-size: 24px;
    position: absolute;
    color: white;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }
  
  .panel.active {
    flex: 5;
  }
  
  .panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
  </style>
  