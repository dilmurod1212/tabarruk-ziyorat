<template>
  <!-- <div class="text-white mt-20">
    <pre>{{ destinations }}</pre>
  </div> -->
  <div
    :style="{
      background: `linear-gradient(180deg, #07091c -4.12%, rgba(7, 9, 28, 0.6) 49.39%, rgba(7, 9, 28, 0.2) 85.78%, #07091c 100%), url('${religion?.image}')`,
    }"
    class="h-screen relative text-white !bg-center !bg-cover"
  >
    <div
      class="absolute transform translate-y-[-50%] top-[35%] md:top-[50%] left-0 bg-white/[0.04] p-2 md:p-4 flex flex-col gap-3 border border-white/10 backdrop-blur-md rounded-xl rounded-l-none"
    >
      <router-link
        :to="{ name: 'religionSingle', params: { id: el.id } }"
        v-for="el in ReligionsStore.religions"
        :key="el.id"
        class="p-2 lg:p-4 rounded-lg border border-white/10 backdrop-blur-lg hover:bg-red transition-all"
        :class="{ 'bg-red': el.id == route.params.id, hidden: el.id == 5 }"
      >
        <img :src="el.flag" :alt="el?.name" class="w-3 h-3 md:w-7 md:h-7" />
      </router-link>
    </div>
    <div class="container h-full flex flex-col justify-center items-center">
      <div class="container absolute top-[100px]">
        <CBreadCrumb :routes="routes" />
      </div>
      <img
        :src="religion?.flag"
        alt=""
        class="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
      />
      <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold my-4 capitalize">
        {{ religion?.name }}
      </h2>
      <div
        class="md:w-3/4 font-semibold text-center md:text-xl"
        v-html="religion?.short_description"
      ></div>
    </div>
  </div>
  <div class="container flex justify-between gap-4 max-lg:flex-wrap">
    <CInfoItem
      :count="religion.attractions_count"
      info="attractions"
      icon="/images/mosque/fa-solid_mosque.svg"
    />
    <CInfoItem
      :count="religion.countries_count"
      info="countries"
      icon="/images/mosque/Mask group (1).svg"
    />
    <CInfoItem
      :count="religion.population"
      info="populations"
      icon="/images/mosque/populations.svg"
    />
  </div>
  <CCountries
    :options="religion.countries"
    item-class="px-4"
    :title="$t('countries')"
  />
  <CAttractionsCard
    v-for="el in countryDestinations"
    :title="el?.title"
    :descr="$t('destinations_count', { count: el?.destinations_count })"
    :options="el?.destinations"
    titleClass="mt-8 container"
    wrapper-class="container"
    shadow-class="shadow-img"
  >
    <template v-slot:cardTitle="data">
      <div class="group">
        <h2 class="translate-y-4 group-hover:translate-y-0 transition-all">
          {{ data.data.title }}
        </h2>
        <p
          class="text-xs transform translate-y-4 opacity-0 group-hover:opacity-70 group-hover:translate-y-0 transition-all capitalize"
        >
          {{ data.data.region.country.title }}
        </p>
      </div>
    </template>
  </CAttractionsCard>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import CCountries from "@/components/Sections/CCountries.vue";
import CAttractionsCard from "@/components/Cards/CAttractionsCard.vue";
import CBreadCrumb from "@/components/Common/CBreadCrumb.vue";

import { useReligionsStore } from "@/stores/religions";
import { useAttractionsStore } from "@/stores/attractionList";
import { useDestinationStore } from "@/stores/destinations";
import { useCountriesStore } from "@/stores/countries";

import { useI18n } from "vue-i18n";
import CInfoItem from "@/components/Sections/CInfoItem.vue";

const attractionStore = useAttractionsStore();
const ReligionsStore = useReligionsStore();
const destinationStore = useDestinationStore();
const countryStore = useCountriesStore();

const route = useRoute();

countryStore.fetchCountryDestinations(route.params?.id);
countryStore.fetchcountryAttractions()
ReligionsStore.fetchReligionsList();
ReligionsStore.fetchReligionDetail(route.params?.id);
destinationStore.fetchDestinationList();

const destinations = computed(() => destinationStore.destinations);
const religion = computed(() => ReligionsStore.religion);
const countryDestinations = computed(() => countryStore.countryDestinations);
const countryAttractions = computed(() => countryStore.countryAttractions);

const { t } = useI18n();

const routes = computed(() => [
  {
    label: t("religion"),
    link: "/religion",
  },
  {
    label: religion.value.name,
    link: "/",
  },
]);
</script>
