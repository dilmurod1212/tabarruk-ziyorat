<template>
  <div class=" bg-no-repeat  border-t  border-white/6 border-b border-solid border-white/6 p-10 bg-sun">
    <div class="container grid grid-cols-1 md:grid-cols-3 gap-30">
      <div class="col-span-1">
        <router-link to="/">
          <img src="/images/slowlogo.png" alt="">
        </router-link>
        <p class="text-white font-sans text-base font-normal leading-6 mt-4">
          This website is created to share information about historical, unique places located in Turkic states.
        </p>
      </div>
      <div class="col-span-1 flex justify-center items-end">
        <a href="https://www.telegram.com/" target="_blank" class="mr-3">
          <img src="/images/tg.png" alt="">
        </a>
        <a href="https://www.twitter.com/" target="_blank" class="mr-3">
          <img src="/images/twit.png" alt="">
        </a>
        <a href="https://www.youtube.com/" target="_blank" class="mr-3">
          <img src="/images/youtube.png" alt="">
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/images/insta.png" alt="">
        </a>
      </div>
      <div class="col-span-1 grid grid-cols-2 gap-4">
        <router-link to="/" class="text-white text-base font-sans font-semibold hover:text-red-600">Main page</router-link>
        <router-link to="/" class="text-white text-base font-sans font-semibold hover:text-red-600">Media resources</router-link>
        <router-link to="/" class="text-white text-base font-sans font-semibold hover:text-red-600">Contact</router-link>
        <router-link to="/" class="text-white text-base font-sans font-semibold hover:text-red-600">F.A.Q</router-link>
        <router-link to="/" class="text-white text-base font-sans font-semibold hover:text-red-600">Privacy</router-link>
      </div>
    </div>
  </div>
  <div class="flex justify-between items-center p-1 container">
    <p class="text-white font-sans text-base font-normal leading-6 mt-4">&copy; 2023, Tabarruk Ziyorat</p>
    <router-link to="/">
      <img src="/images/uiclogo.png" alt="">
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>
