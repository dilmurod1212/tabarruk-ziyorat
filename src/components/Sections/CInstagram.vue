<template>
  <div>
    <CTitle
      wrapperClass="container"
      :title="$t('title_instagram')"
      :descr="$t('title_instagram_descr')"
      divClass="mt-12"
    />
    <Vue3Marquee
      :pause-on-hover="true"
      :gradient="true"
      :gradient-color="[0, 0, 0, 0.2]"
      gradient-length="4%"
      :duration="50"
      class=""
    >
      <a
        target="_blank"
        v-for="el in data"
        :href="el.link"
        :key="el.id"
        class="p-2 rounded-xl w-[160px] md:w-[180px] lg:w-[280px] text-white bg-white/[0.04] border border-white/10 group cursor-pointer mr-6 h-full"
      >
        <div class="relative overflow-hidden">
          <SPlaceHolder
            v-bind="{ loading }"
            option-class="rounded-xl w-full h-full aspect-square"
          >
            <img
              :src="el.image"
              alt=""
              class="rounded-xl w-full h-full aspect-square object-cover"
            />
          </SPlaceHolder>
          <div
            class="flex items-center justify-center flex-col rounded-xl absolute top-0 left-0 z-30 w-full h-full bg-black/70 transform translate-y-[100%] group-hover:translate-y-0 transition-all"
          >
            <i class="icon-external-link text-3xl"></i>
            <span class="text-xs mt-2">View post</span>
          </div>
        </div>
        <SPlaceHolder
          v-bind="{ loading }"
          option-class="h-3 w-1/4 mt-2 rounded-sm"
        >
          <p class="text-xs mt-2">{{ el.likes }} likes</p>
        </SPlaceHolder>
        <div>
          <SPlaceHolder
            v-bind="{ loading }"
            option-class="w-full h-3 rounded-sm mt-2"
          >
            <h2 class="text-xs my-2 line-clamp-2">{{ el.text }}</h2>
          </SPlaceHolder>
          <SPlaceHolder
            v-bind="{ loading }"
            option-class="w-full h-3 rounded-sm mt-1"
          />
        </div>
        <SPlaceHolder
          v-bind="{ loading }"
          option-class="w-1/3 h-3 rounded-sm mt-3"
        >
          <p class="text-[10px]">{{ el.created_day }}</p>
        </SPlaceHolder>
      </a>
    </Vue3Marquee>
  </div>
</template>

<script setup lang="ts">
import type { Vue3Marquee } from "vue3-marquee";
import CTitle from "@/components/Common/CTitle.vue";
import { computed } from "vue";
import SPlaceHolder from "@/components/Skeleton/SPlaceHolder.vue";
import { useInstagramStore } from "@/stores/instagram";
const store = useInstagramStore();
const loading = computed(() => store.load);
interface Props {
  wrapperClass?: string;
  options: {
    id: number;
    text: string;
    link: string;
    created_day: string;
    image: string;
    likes: number;
  }[];
}
const props = defineProps<Props>();
const data = computed(() => [
  ...props.options,
  ...props.options,
  ...props.options,
  ...props.options,
]);
</script>
