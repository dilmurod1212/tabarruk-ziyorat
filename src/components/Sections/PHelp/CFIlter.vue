<template>
  <div class="text-white col-span-1 h-screen flex flex-col">
    <div class="px-5">
      <div class="flex items-center max-lg:hidden">
        <i class="fa-solid fa-arrow-left text-xl mr-4 cursor-pointer"></i>
        <router-link to="/">
          <img
            src="/images/Logo.svg"
            alt=""
            class="max-w-[350px] w-full cursor-pointer"
          />
        </router-link>
      </div>
      <form action="" class="flex items-center justify-between">
        <CFilterInput placeHolder="Search" v-model="searchVal">
          <template #prefix>
            <i
              class="fa-solid fa-magnifying-glass cursor-pointer"
              :filterDone="filterDone"
              @update:filterDone="updateFilterDone"
            ></i>
          </template>
        </CFilterInput>
        <i
          class="fa-solid fa-sliders ml-10 text-gray-100 text-xl cursor-pointer"
          @click="emit('openBox')"
        ></i>
      </form>
    </div>
    <CMapSearchList :result="searchVal" />
    <div class="mt-5 grow overflow-y-auto px-5">
      <CHelpCountryVue v-for="(item, idx) in data" :key="idx" :data="item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import CHelpCountryVue from "../../Cards/CHelpCountry.vue";
import CFilterInput from "@/components/Form/CFilterInput.vue";
import CMapSearchList from "@/components/Form/CMapSearchList.vue";
import { useMapStore } from "@/stores/map";
import { computed, ref, watch } from "vue";
import { useUpdateQueries } from "@/composables/useUpdateQueries";
import { useRoute } from "vue-router";
import router from "@/router";
import { debounce } from '@/utils'
import { log } from "console";
const route = useRoute();
const { updateQueries } = useUpdateQueries();
const religions = computed(() => store.religions);
const countries = computed(() => store.countries);

const filterDone = ref(true);
const emit = defineEmits<{
  (e: "openBox"): void;
  (e: "closeBox"): void;
}>();
const searchVal = ref(route.query.search || "");
const store = useMapStore();
const data = computed(() => store.destinations);
const countryId = computed(() => route.query.country)
const religionId = computed(() => route.query.religions)
watch(
  () => searchVal.value,
  () => {
    debounce('search', () => {
      console.log(searchVal.value, 'value');
      updateQueries({ search: searchVal.value })
      store.fetchDestinationList({ 
        search: searchVal.value, 
        destination_country__in: countryId.value,
        religion__in: religionId.value
      });
    })
  },
);
const updateFilterDone = (value) => {
  filterDone.value = value;
};
</script>
