<template>
  <div class="text-white">{{}}</div>
  <div
    :style="{
      background: `linear-gradient(180deg, #07091c -4.12%, rgba(7, 9, 28, 0.6) 49.39%, rgba(7, 9, 28, 0.2) 85.78%, #07091c 100%), url('${country?.image}')`
    }"
    class="h-screen relative text-white !bg-center !bg-cover"
  >
    <div class="container h-full flex flex-col justify-center items-center">
      <div class="container absolute top-[100px]">
        <CBreadCrumb :routes="routes"/>
      </div>

      <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold my-4 capitalize">
        {{ country?.title }}
      </h2>
      <div class="md:w-3/4 font-semibold text-center md:text-xl" v-html="country?.short_description">
      </div>
      <CButton variant="red" btn-class="mt-4">Watch video <i class="fas fa-play"></i></CButton>
    </div>
  </div>
  <CAttractionsCard
    title="media"
    :descr="$t('media_descr')"
    titleClass="mt-8"
    wrapperClass="!grid-cols-1"
    shadow-class="shadow-img"
    title-class="container"
  >
    <template #card>
      <Vue3Marquee
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[0, 0, 0, 0.1]"
        gradient-length="2%"
        class="mb-4"
      >
        <div
          v-for="(el, idx) in country?.media"
          :key="idx"
          class="mr-4 w-[180px] md:w-[220px] lg:w-[280px]"
        >
          <img :src="el" alt="" />
        </div>
      </Vue3Marquee>
      <Vue3Marquee
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[0, 0, 0, 0.1]"
        gradient-length="2%"
        :direction="'reverse'"
      >
        <div
          v-for="(el, idx) in country?.media"
          :key="idx"
          class="mr-4 w-[180px] md:w-[220px] lg:w-[280px]"
        >
          <img :src="el" alt="" />
        </div>
      </Vue3Marquee>
    </template>
    <template v-slot:cardTitle="data">
      <div>
        <h2>{{ data.data.name }}</h2>
      </div>
    </template>
  </CAttractionsCard>
  <CInstagram :options="instagram" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CBreadCrumb from '@/components/Common/CBreadCrumb.vue'
import CButton from '@/components/Form/CButton.vue'
import CAttractionsCard from '@/components/Cards/CAttractionsCard.vue'
import CInstagram from '@/components/Sections/CInstagram.vue'
import { instagram } from '@/data/instagram'
import type { Vue3Marquee } from 'vue3-marquee'
import { useCountriesStore } from '@/stores/countries'
import { useI18n } from 'vue-i18n'

const countriesStore = useCountriesStore()
const route = useRoute()
countriesStore.fetchCountryDetail(route.params?.id as string)
const country = computed(() => countriesStore.country)

const { t } = useI18n()

const routes = computed(() => [
  {
    label: t('country'),
    link: '/country'
  },
  {
    label: country.value.title,
    link: '/'
  }
])
</script>
