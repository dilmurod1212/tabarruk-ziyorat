<template>
  <router-link
    :to="{ name: 'religionSingle', params: { id: religion.id } }"
    v-for="(religion, idx) in religions"
    :key="idx"
    class="w-full h-full"
    :class="{ hidden: idx == 3 }"
  >
    <div
      class="text-white w-full h-full group border border-white/20 hover:border-white/[0.04] hover:bg-white/[0.04] p-6 rounded-xl transition-all cursor-pointer"
    >
      <SPlaceHolder
        v-bind="{ loading }"
        width="61px"
        height="61px"
        border-radius="6px"
      >
        <div
          class="w-16 h-16 p-4 group-hover:bg-red-500 transition-all rounded-lg border border-white/20 group:border-white/[0.04] flex"
        >
          <img :src="religion.flag" :alt="religion.title" />
        </div>
      </SPlaceHolder>
      <SPlaceHolder
        class="my-4"
        v-bind="{ loading }"
        width="50%"
        height="24px"
        border-radius="6px"
      >
        <h2 class="text-2xl font-bold my-4 uppercase">{{ religion.title }}</h2>
      </SPlaceHolder>
      <div>
        <SPlaceHolder
          v-bind="{ loading }"
          class="my-2"
          width="100%"
          height="16px"
          border-radius="6px"
        >
          <p class="line-clamp-6">
            {{ religion.short_description }}
          </p>
        </SPlaceHolder>
        <SPlaceHolder
          v-bind="{ loading }"
          class="my-2"
          width="100%"
          height="16px"
          border-radius="6px"
        >
        </SPlaceHolder>
        <SPlaceHolder
          v-bind="{ loading }"
          class="my-2"
          width="100%"
          height="16px"
          border-radius="6px"
        >
        </SPlaceHolder>
        <SPlaceHolder
          v-bind="{ loading }"
          class="my-2"
          width="100%"
          height="16px"
          border-radius="6px"
        >
        </SPlaceHolder>
        <SPlaceHolder
          v-bind="{ loading }"
          class="my-2"
          width="100%"
          height="16px"
          border-radius="6px"
        >
        </SPlaceHolder>
        <SPlaceHolder
          v-bind="{ loading }"
          class="my-2"
          width="100%"
          height="16px"
          border-radius="6px"
        >
        </SPlaceHolder>
      </div>
      <SPlaceHolder
        v-bind="{ loading }"
        class="mt-4"
        width="30%"
        height="16px"
        border-radius="6px"
      >
        <p class="mt-2 group-hover:text-red-500 transition-all">
          See more <i class="fas fa-arrow-right"></i>
        </p>
      </SPlaceHolder>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import SPlaceHolder from "../Skeleton/SPlaceHolder.vue";
interface Props {
  loading: boolean;
  religions: {
    id: number;
    image: string;
    title: string;
    short_description: string;
    type: string;
    flag: string;
  }[];
}
defineProps<Props>();
</script>
