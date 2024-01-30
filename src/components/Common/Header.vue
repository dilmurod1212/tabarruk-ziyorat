<template>
  <header
    ref="header"
    class="fixed top-0 left-0 w-full z-[60] flex items-center py-0.5 transition-200"
    :class="[{ ' z-30': resNavbar }, { 'bg-dark': headerBg }]"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <Clogo :class="{ 'relative z-50': changeState }" @click="closeNavbar" />
        <div class="flex items-center gap-8 relative">
          <Navbar v-if="!changeState" />
          <LanguageSwitcher
            switcherClass="lg:block hidden border-x-2 border-x-white/20  px-6"
            v-if="!changeState"
          />
          <SearchPanel
            searchClass="lg:flex hidden"
            :class="{ block: changeState }"
            @on-change="showSearch"
          />
          <div class="lg:hidden">
            <i
              v-if="!resNavbar"
              class="fas fa-bars text-white open hidden max-lg:block z-[80] text-2xl cursor-pointer"
              @click="showResNavbar"
            ></i>
            <i
              v-else
              @click="showResNavbar"
              class="fas fa-close text-white text-2xl z-[80] cursor-pointer"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </header>
  <transition name="fade">
    <div
      class="z-50 fixed left-0 top-0 h-full w-full bg-[#07091C] py-4 pt-16 lg:hidden overflow-y-auto transform translate-x-[-100%] transition-200"
      :class="{ '!translate-x-0': resNavbar }"
    >
      <div class="container mt-10">
        <CSearch searchClass=" mt-2" />
        <Navbar @close="closeNavbar" navClass="max-lg:flex flex-col mt-8 gap-4" />
        <LanguageSwitcher class="mt-8" />
      </div>
    </div>
  </transition>

  <!--  -->
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
import Navbar from './Navbar.vue'
import SearchPanel from '@/components/Common/SearchPanel.vue'
import { computed, ref, watch } from 'vue'
import CSearch from '@/components/Common/CSearch.vue'
import Clogo from '@/components/Common/CLogo.vue'
import { useWindowScroll } from '@vueuse/core'
const resNavbar = ref(false)
const header = ref(null)
const { y } = useWindowScroll()

const headerBg = computed(() => y.value > 350)
const closeNavbar = () => {
  resNavbar.value = false
  document.body.style.overflowY = 'auto'
}
const showResNavbar = () => {
  resNavbar.value = !resNavbar.value
  if (resNavbar.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }
}
function onScroll() {
  console.log('scrol')
}
function showSearch(event) {
  changeState.value = event
  if (changeState.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'scroll'
  }
}
const changeState = ref(false)
</script>
<style>
header {
  background: linear-gradient(180deg, #07091c -61.25%, rgba(7, 9, 28, 0) 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
