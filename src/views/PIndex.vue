<template>
  <div class="bg-dark">
    <CHero />
    <CAbout />
    <CCountryInfo :options="countryInfo" wrapper-class="mt-16" />
    <CCountries
      :loading="countriesStore.countriesLoad"
      :options="countriesStore.countries"
      :title="$t('title_countries')"
      :descr="$t('title_countries_descr')"
      wrapper-class="flex-wrap"
      item-class="px-16 py-6"
    />
    <CReligions />
    <CNews :options="newsData" />
    <CInstagram :options="instagramData" />
    <CPartners />
  </div>
</template>

<script setup lang="ts">
import CHero from "@/components/Sections/CHero.vue";
import CCountries from "@/components/Sections/CCountries.vue";
import CCountryInfo from "@/components/Sections/CCountryInfo.vue";
import CReligions from "@/components/Sections/CReligions.vue";
import CInstagram from "@/components/Sections/CInstagram.vue";
import CPartners from "@/components/Sections/CPartners.vue";
import CNews from "@/components/Sections/CNews.vue";
import CAbout from "@/components/Sections/CAbout.vue";
import { countryInfo } from "@/data/countryInfo";
import { computed, ref } from "vue";

import { useInstagramStore } from "@/stores/instagram";
import { useNewsStore } from "@/stores/news";
import { useCountriesStore } from "@/stores/countries";
import { useReligionsStore } from "@/stores/religions";
import { useTranslateStore } from "@/stores/translate";

const translateStore = useTranslateStore();
const countriesStore = useCountriesStore();
const instagramStore = useInstagramStore();
const newsStore = useNewsStore();
const store = useReligionsStore();

const instagramData = computed(() => instagramStore.instagram);
const newsData = computed(() => newsStore.news);
const loading = ref(true);

// translateStore.fetchTranslate()
countriesStore.fetchCountriesList(),
  newsStore.fetchNewsList(),
  instagramStore.fetchInstagramList(),
  store.fetchReligionsList(),
  Promise.allSettled([])
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
    });
</script>
