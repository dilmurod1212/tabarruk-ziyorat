<template>
  <div class="" v-if="loading">
    <div
      :style="{
        background: `linear-gradient(180deg, #07091c -4.12%, rgba(7, 9, 28, 0.6) 49.39%, rgba(7, 9, 28, 0.2) 85.78%, #07091c 100%), url('${attraction?.image}')`,
      }"
      class="relative text-white !bg-center !bg-cover !bg-no-repeat"
    >
      <div class="backdrop-blur-[6px]">
        <div class="container mt-[120px]">
          <CBreadCrumb v-bind="{ routes }" />
          <div class="my-4 flex flex-col md:flex-row gap-4 items-center">
            <img
              :src="attraction?.image"
              alt=""
              class="rounded-lg flex-shrink-0 w-full h-[300px] md:w-[300px] md:h-[450px] lg:w-[382px] lg:h-[546px] object-cover aspect-video"
            />
            <div class="">
              <div>
                <p>
                  <i class="icon-location-pin"></i>
                  {{ attraction.region?.title }},
                  {{ attraction.region?.country?.title }}
                </p>
                <h2 class="text-2xl md:text-3xl lg:text-5xl font-semibold mt-2">
                  {{ attraction?.title }}
                </h2>
                <div
                  v-html="attraction?.short_description"
                  class="my-4 lg:w-3/4 line-clamp-6"
                ></div>
              </div>
              <div
                class="flex flex-col lg:flex-row w-full gap-4 justify-between items-start p-3 rounded-xl bg-black/20 border border-white/[0.1] mt-4"
              >
                <div class="pr-4 md:pr-10">
                  <div class="flex gap-3 items-center">
                    <div class="p-2 rounded-lg bg-white/10">
                      <img
                        src="/images/religions/islam-icon.svg"
                        alt=""
                        class="lg:w-7 lg:h-7 w-5 h-5"
                      />
                    </div>
                    <p class="text-xl lg:text-2xl text-white/60">Affiliation</p>
                  </div>
                  <h3 class="text-xl lg:text-2xl font-bold mt-1">
                    {{ attraction?.religion?.title }}
                  </h3>
                </div>
                <div
                  class="white-shadow-border h-px lg:h-[75px] w-full lg:w-px"
                ></div>
                <div class="md:pr-10">
                  <div class="flex gap-3 items-center">
                    <div class="p-2 rounded-lg bg-white/10">
                      <img
                        src="/images/religions/islam-icon.svg"
                        alt=""
                        class="lg:w-7 lg:h-7 w-5 h-5"
                      />
                    </div>
                    <p class="text-xl lg:text-2xl text-white/60">Was erected</p>
                  </div>
                  <h3 class="text-xl lg:text-2xl font-bold mt-1">
                    {{ attraction?.erected_from }}-{{ attraction?.erected_to }}
                  </h3>
                </div>
              </div>
              <CShare class="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[url('/images/bg-vector.svg')]">
      <div class="container text-white">
        <div class="mb-10">
          <h2 class="text-2xl font-bold lg:text-4xl mb-6">
            About {{ attraction?.title }}
          </h2>
          <div v-html="attraction?.content" class="text-sm md:text-base"></div>
        </div>
      </div>
      <div>
        <CTitle
          v-if="recommendedAttraction.length"
          class="container"
          title="Recommended Attractions"
          descr="Stay up-to-date on the latest news and developments in the Turkic world."
        />
        <CAttractionsCard
          :options="recommendedAttraction"
          shadow-class="shadow-img"
          class="container"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CAttractionsCard from "@/components/Cards/CAttractionsCard.vue";
import CBreadCrumb from "@/components/Common/CBreadCrumb.vue";
import CTitle from "@/components/Common/CTitle.vue";
import CShare from "@/components/Common/CShare.vue";
import { computed, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import { useDestinationStore } from "@/stores/destinations";
import { useAttractionsStore } from "@/stores/attractionList";

const route = useRoute();
const destinationStore = useDestinationStore();
const attractionStore = useAttractionsStore();

const attraction = computed(() => destinationStore.destinationDetail);
const recommendedAttraction = computed(
  () => attractionStore.attractionRecommended
);

const { t } = useI18n();

const routes = computed(() => [
  {
    label: t("Country"),
    link: "/Country",
  },
  {
    label: attraction?.value?.region?.country.title,
    link: `/country/${attraction?.value?.region?.country.title}`,
  },
  {
    label: attraction?.value.title,
    link: `/`,
  },
]);

const getData = async () => {
  await destinationStore.fetchDestinationDetail(route.params.slug as string);
  await attractionStore.fetchAttractionRecommended(
    attraction.value.region.country.id,
    route.params.slug
  );
};

watch(
  () => route.params,
  () => {
    getData();
  },
  { deep: true, immediate: true }
);

const loading = ref(true);

// Promise.allSettled([
//   destinationStore.fetchDestinationDetail(route.params.slug),
//   attractionStore.fetchAttractionRecommended(attraction.value.region.country.id, route.params.slug),
// ])
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     loading.value = false;
//   });
</script>
<style>
.white-shadow-border {
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    #fff 51.04%,
    hsla(0, 0%, 100%, 0)
  );
}
</style>
