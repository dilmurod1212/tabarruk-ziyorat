<template>
  <div class="bg-dark h-screen">
    <Header />
    <div class="bg-[url('/images/bg-vector.svg')] h-full lg:pt-[80px] md:pt-[50px] sm:pt-[30px]">
      <div class="flex flex-col justify-center items-center h-full text-white container">
        <div class="relative flex lg:gap-[140px] gap-[100px]">
          <div
            class="absolute lg:w-[160px] lg:h-[160px] h-[100px] w-[100px] shadow-round flex justify-center items-center bg-[#57B4CA] top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] rounded-full"
          >
            <img src="/images/Logo-icon.svg" alt="logo" class="w-[80px] lg:w-[130px] logo" />
          </div>
          <img src="/images/4-left.svg" alt="" class="lg:w-[110px] w-[70px]" />
          <img src="/images/4-left.svg" alt="" class="lg:w-[110px] w-[70px]" />
        </div>
        <div class="flex flex-col items-center mt-8">
          <h2 class="lg:text-4xl md:text-3xl sm:text-2xl text-lg text-center font-bold">
            The page you are looking for can’t be found.
          </h2>
          <p class="my-4 md:w-2/4 text-center max-sm:text-xs">
            We’re sorry, we seem to have lost this page, but we don’t want to lose you.
          </p>
          <router-link to="/">
            <button
              class="px-6 py-3 bg-red hover:bg-red-800 transition-all rounded-lg max-sm:px-4 max-sm:py-2 max-sm:text-sm"
            >
              Go to home page
              <i class="icon-house-medical"></i>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Common/Header.vue'
import CButton from '@/components/Form/CButton.vue'
</script>
<style>
.shadow-round {
  box-shadow: 0 0 100px 1px #57b4ca;
}
.logo {
  animation: rotate 15s linear infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
