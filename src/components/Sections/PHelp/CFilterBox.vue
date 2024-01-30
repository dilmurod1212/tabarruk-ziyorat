<template>
  <div
    class="text-white bg-dark max-w-[600px] w-full px-4 rounded-md fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[999]"
  >
    <header class="flex items-center justify-between py-3 border-b">
      <p class="text-2xl font-bold">Filter</p>
      <i
        class="fa-solid fa-xmark cursor-pointer text-xl"
        @click="emits('closeBox')"
      ></i>
    </header>
    <div class="max-h-[800px] h-full overflow-y-auto">
      <div>
        <p class="text-base font-medium mt-4">Choose the religion</p>
        <div class="grid grid-cols-2 gap-6">
          <CCheckbox
            text="All"
            v-model="religionAll"
            :checked="religionAll"
            :id="1"
            @change="selectAllReligions"
          />
          <CCheckBoxGroup
            :options="religions"
            v-model="religionId"
            label-key="title"
            value-key="id"
          />
        </div>
      </div>
      <div class="my-4">
        <p class="text-base font-medium">Choose Country</p>
        <div class="grid grid-cols-2 gap-6">
          <CCheckbox
            text="All"
            v-model="countryAll"
            :checked="countryAll"
            :id="1"
            @change="selectAllCountries"
          />
          <CCheckBoxGroup
            :options="countries"
            v-model="countryId"
            label-key="title"
            value-key="id"
          />
        </div>
        <div class="flex gap-6 mt-6">
          <button
            @click="onClear"
            class="bg-gray-400 py-2 px-5 rounded-md w-full"
          >
            Clear
          </button>
          <button @click="onFilter" class="bg-red py-2 px-5 rounded-md w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import CCheckbox from "@/components/Form/CCheckbox.vue";
import { useMapStore } from "@/stores/map";
import CCheckBoxGroup from "@/components/Form/CCheckBoxGroup.vue";
import { useUpdateQueries } from "@/composables/useUpdateQueries";
import { useRoute } from "vue-router";
import router from "@/router";

const store = useMapStore();
const { updateQueries } = useUpdateQueries();
const route = useRoute();

const religions = computed(() => store.religions);
const countries = computed(() => store.countries);

const religionId = ref([]);
const countryId = ref([]);

const countryAll = ref(false);
const religionAll = ref(false);

const filterDone = ref(true);

const emits = defineEmits(["closeBox", "openBox", "filterStatus"]);
const props = defineProps<{
  filterDone: boolean;
}>();
watch(
  () => countryId.value,
  (val) => {
    updateQueries({ country: val?.join(",") || undefined });
    countryAll.value = countryId.value.length === countries.value.length;
  },
  {
    deep: true,
  }
);
watch(
  () => religionId.value,
  (val) => {
    updateQueries({ religions: val?.join(",") || undefined });
    religionAll.value = religionId.value.length === religions.value.length;
  },
  {
    deep: true,
  }
);
const onFilter = async () => {
  await store.fetchDestinationList({
    destination_country__in: countryId.value?.join(","),
    religion__in: religionId.value?.join(","),
    search: route.query.search || undefined,
  });
  filterDone.value = false;
  emits("closeBox");
};

const onClear = async () => {
  await router.replace({ query: {} });
  countryId.value = [];
  religionId.value = [];
  await store.fetchDestinationList({});
  emits("closeBox");
};

onMounted(() => {
  if (route.query?.religions)
    religionId.value = route.query.religions
      ?.split(",")
      ?.map((el) => Number(el));
  if (route.query?.country)
    countryId.value = route.query.country?.split(",")?.map((el) => Number(el));
  setTimeout(() => {
    if (religionId.value.length)
      religionAll.value = religionId.value.length === religions.value.length;
    if (countryId.value.length)
      countryAll.value = countryId.value.length === countries.value.length;
  }, 100);
});

const selectAllReligions = () => {
  if (religionAll.value) {
    religionId.value = religions.value.map((religion) => religion.id);
  } else {
    religionId.value = [];
  }
};
const selectAllCountries = () => {
  if (countryAll.value) {
    countryId.value = countries.value.map((country) => country.id);
  } else {
    countryId.value = [];
  }
};

store.fetchReligionsList();
store.fetchCountryList();
</script>
