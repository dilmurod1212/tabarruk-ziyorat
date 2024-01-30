<template>
  <div class="about bg-dark">
    <CHero />
    <div class="container text-white">
      <CBreadCrumb v-bind="{ routes }" />
      <p class="text-40 font-bold mt-20">About us</p>
      <p class="text-lg my-4">
        Explore the valuable, historical, and heritage places of Turkic
        countries through our curated selection of articles, photos, and videos.
        Discover the beauty of ancient ruins, stunning mosques, medieval
        fortresses, and intricate tilework, and learn about legendary rulers,
        artists, and architects who left their mark on the region.
      </p>
      <div class="p-0">
        <CCountryInfo :options="countryInfo" wrapper-class="mt-[100px] p-0" />
      </div>
    </div>
    <CMap class="my-20" />
    <CSatements />
    <CVideo />
    <CLocation />
  </div>
</template>
<script setup lang="ts">
import CHero from "@/components/Sections/PAbout/CHero.vue";
import CCountryInfo from "@/components/Sections/CCountryInfo.vue";
import { countryInfo } from "@/data/countryInfo.js";
import CMap from "@/components/Sections/PAbout/CMap.vue";
import CSatements from "@/components/Sections/PAbout/CSatements.vue";
import CVideo from "@/components/Sections/PAbout/CVideo.vue";
import CLocation from "@/components/Sections/PAbout/CLocation.vue";
import CBreadCrumb from "@/components/Common/CBreadCrumb.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const routes = computed(() => [
  {
    label: t("about"),
    link: "/about",
  },
]);
</script>

