<template>
  <div id="countries" class="container">
    <CTitle :title="title" :descr="descr" />
    <div
      class="lg:flex grid sm:grid grid-cols-2 md:grid-cols-3 gap-2 justify-evenly"
      :class="wrapperClass"
    >
      <router-link
        :to="{ name: 'countrySingle', params: { id: el.id } }"
        v-for="el in options"
        :key="el.id"
      >
        <div
          class="w-full flex flex-col justify-center items-center hover:bg-white/[0.04] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white/40 border-transparent hover:border-white/[0.05] p-3 rounded-xl transition-all cursor-pointer"
          :class="itemClass"
        >
          <SPlaceHolder
            v-bind="{ loading }"
            option-class="min-w-[70px] w-[70px] h-[70px] rounded-lg"
          >
            <img :src="el.flag" alt="uz-flag" class="min-w-[70px]" />
          </SPlaceHolder>
          <div
            class="text-white text-center mt-4 w-full flex flex-col items-center"
          >
            <SPlaceHolder
              v-bind="{ loading }"
              option-class="w-[120px] h-5 rounded-sm"
            >
              <h3 class="text-xl capitalize">{{ el?.title }}</h3>
            </SPlaceHolder>
            <SPlaceHolder
              v-bind="{ loading }"
              option-class="w-[80px] h-3 mt-2 rounded-sm"
            >
              <p class="text-sm opacity-60">
                {{
                  el.destination_count < 1
                    ? "no destination"
                    : $t("destinations_count", { count: el?.destination_count })
                }}
              </p>
            </SPlaceHolder>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import CTitle from "@/components/Common/CTitle.vue";
import SPlaceHolder from "../Skeleton/SPlaceHolder.vue";

interface Props {
  wrapperClass?: string;
  itemClass?: string;
  title: string;
  descr?: string;
  loading:boolean
  options: {
    id: number;
    flag: string;
    title: string;
    destination_count: string | number;
  }[];
}
defineProps<Props>();
</script>
