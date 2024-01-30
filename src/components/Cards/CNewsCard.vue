<template>
  <div v-if="!loading">
    <router-link
      :to="{ name: 'NewsSingle', params: { slug: item?.slug } }"
      class="text-white p-2 border border-white/20 hover:border-white/[0.04] rounded-xl hover:bg-white/[0.04] transition-all  group flex flex-col"
      :class="wrapperClass"
    >
      <slot name="card">
        <SPlaceHolder
          v-bind="{ loading }"
          option-class="w-full rounded-lg aspect-square"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full rounded-lg aspect-square object-cover"
          />
        </SPlaceHolder>
        <div class="flex flex-col grow w-full">
          <SPlaceHolder
            v-bind="{ loading }"
            option-class="mt-4 h-3 md:h-4 w-full"
          >
            <h3
              class="mt-4 group-hover:text-red-500 transition-all max-md:text-sm line-clamp-2"
            >
              {{ item.title }}
            </h3>
          </SPlaceHolder>
          <SPlaceHolder
            v-bind="{ loading }"
            option-class="mt-1 h-3 md:h-4 w-full"
          ></SPlaceHolder>
          <SPlaceHolder v-bind="{ loading }" option-class="my-2 h-3 w-full">
            <div
              v-html="item.short_description"
              class="text-sm max-md:text-xs text-white/60 font-normal my-2 line-clamp-2"
            ></div>
          </SPlaceHolder>
          <SPlaceHolder
            v-bind="{ loading }"
            option-class="mt-1 h-3 w-full"
          ></SPlaceHolder>
          <SPlaceHolder v-bind="{ loading }" option-class="mt-3 h-3  w-[100px]">
            <div class="flex justify-between items-center mt-auto">
              <p>{{ item.published_at }}</p>
              <i
                class="fas fa-arrow-right cursor-pointer relative right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all"
              ></i>
            </div>
          </SPlaceHolder>
        </div>
      </slot>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SPlaceHolder from "../Skeleton/SPlaceHolder.vue";
import { useNewsStore } from "@/stores/news";
const store = useNewsStore();
const loading = computed(() => store.newsLoad);
interface Props {
  item: {
    id: number;
    slug: string;
    title: string;
    short_description: string;
    published_at: string;
    image: string;
  };
  wrapperClass?: string;
}
defineProps<Props>();
</script>
