<template>
  <div class="text-white"></div>
  <div class="py-4">
    <Vue3Marquee :pause-on-hover="true" :duration="50">
      <a
        :href="el.link"
        target="_blank"
        class="card p-4 bg-white/[0.04] h-full mr-6 md:mr-10 border border-white/20 flex justify-center items-center rounded-xl w-[280px] max-md:w-[200px]"
        v-for="(el, idx) in options"
        :key="idx"
      >
        <img
          :src="el.logo"
          class="max-w-[160px] w-full min-h-[30px] max-h-[50px] object-cover"
        />
      </a>
    </Vue3Marquee>

    <Vue3Marquee
      :pause-on-hover="true"
      :duration="50"
      class="mt-6"
      :direction="'reverse'"
    >
      <a
        :href="el.link"
        target="_blank"
        class="card p-4 bg-white/[0.04] h-full mr-6 md:mr-10 border border-white/20 flex justify-center items-center rounded-xl w-[280px] max-md:w-[200px]"
        v-for="(el, idx) in options"
        :key="idx"
      >
        <img
          :src="el.logo"
          class="max-w-[160px] w-full min-h-[30px] max-h-[50px] object-cover"
        />
      </a>
      <!-- <SPlaceHolder
        v-bind="{ loading }"
        option-class="md:w-[280px] md:h-[80px] w-[200px] h-[70px] rounded-xl mr-6"
      >
      </SPlaceHolder>
      <SPlaceHolder
        v-for="el in 10"
        v-bind="{ loading }"
        option-class="md:w-[280px] md:h-[80px] w-[200px] h-[70px] rounded-xl mr-6 "
      /> -->
    </Vue3Marquee>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref, onMounted } from "vue";
import SPlaceHolder from "@/components/Skeleton/SPlaceHolder.vue";
interface Props {
  options: {
    name: string;
    link: string;
    id: number;
    logo: string;
  }[];
}
const props = defineProps<Props>();

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});

const data = reactive([
  "/images/partners/Frame.svg",
  "/images/partners/Group 86.svg",
  "/images/partners/Group 19051.svg",
  "/images/partners/Layer_1.svg",
]);
const partners = computed(() => [
  ...props.options,
  ...props.options,
  ...props.options,
]);
</script>
