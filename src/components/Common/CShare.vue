<template>
  <div class="">
    <div
      class="p-4 rounded-xl border boder-white/20 bg-black/20 flex items-center justify-between mx-auto gap-3 md:gap-6"
      :class="wrapperClass"
    >
      <div class="flex gap-3 md:gap-6 items-center">
        <div class="sm:ml-6">
          <i class="icon-share text-3xl"></i>
        </div>
        <div class="white-shadow-border w-px h-[30px]"></div>
        <div class="flex items-center gap-4">
          <a
            v-for="(el, idx) in icons ? icons : iconss"
            :key="idx"
            :href="el.link"
          >
            <i
              class="w-[32px] h-[32px] flex items-center justify-center bg-white/10 hover:bg-white hover:text-[#229ED9] rounded-full transition-all cursor-pointer"
              :class="el.icon"
            ></i>
          </a>
        </div>
      </div>
      <div
        @click="copy()"
        class="flex items-center bg-white/10 rounded-lg cursor-pointer overflow-hidden"
      >
        <span
          data-v-8bed980c=""
          class="line-clamp-1 pl-4 text-white leading-130 transition-300 max-w-[300px] break-all"
          style="word-break: break-all"
          >{{ path ? path : routePath }}</span
        >
        <button class="p-1 rounded-md bg-red flex items-center justify-center">
          <i
            v-if="!copied"
            class="fa-regular fa-copy w-6 h-6 mx-auto my-auto flex items-center justify-center"
          ></i>
          <i
            v-else
            class="fas fa-check w-6 h-6 mx-auto my-auto flex items-center justify-center"
          ></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useClipboard } from "@vueuse/core";
import { useRoute } from "vue-router";

const route = useRoute();
const routePath = ref(window.location.href);
const { copy, copied } = useClipboard({
  source: routePath,
  copiedDuring: 1500,
});
console.log(window.location.href);
console.log(route.fullPath);

interface Props {
  path?: string;
  wrapperClass?: string;
  icons?: {
    icon: string;
    link: string;
  }[];
}
defineProps<Props>();
const iconss = [
  { icon: "icon-telegram", link: "https://telegram.org" },
  { icon: "icon-twitter", link: "https://telegram.org" },
  { icon: "icon-facebook", link: "https://telegram.org" },
];
</script>

<style scoped>
.white-shadow-border {
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    #fff 51.04%,
    hsla(0, 0%, 100%, 0)
  );
}
</style>
