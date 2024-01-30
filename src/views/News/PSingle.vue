<template>
  <div class="container">
    <CBreadCrumb v-bind="{ routes }" class="mt-[120px] text-white" />
    <div class="text-white md:w-3/4 mx-auto">
      <h2 class="text-xl lg:text-4xl md:text-2xl my-4 font-semibold">
        {{ item?.title }}
      </h2>
      <div class="flex gap-7">
        <p class="text-[#727272] text-sm flex items-center gap-1">
          <i class="icon-calendar"></i>{{ item?.published_at }}
        </p>
        <p class="text-[#727272] text-sm flex items-center gap-1">
          <i class="icon-eye"></i>{{ item?.view_count }}
        </p>
      </div>
      <img
        :src="item?.image"
        alt=""
        class="w-full aspect-video rounded-xl mt-4 mb-6"
      />
      <div v-html="item?.short_description"></div>
      <div v-html="item?.description"></div>
    </div>
    <div class="text-center">
      <CShare
        class="text-white my-6 inline-block"
        wrapper-class="bg-transparent"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useNewsStore } from "@/stores/news";
import CBreadCrumb from "@/components/Common/CBreadCrumb.vue";
import CShare from "@/components/Common/CShare.vue";
const store = useNewsStore();

const route = useRoute();
interface News {
  id: number;
  img: string;
  title: string;
  date: string;
  alt: string;
  descr: string;
}
store.fetchNewsDetail(route.params?.slug);
const item = computed(() => store.newsDetail);

const routes = computed(() => [
  {
    link: "/news",
    label: "News",
  },
  {
    link: "/",
    label: item?.value?.title,
  },
]);
</script>

<style scoped></style>
