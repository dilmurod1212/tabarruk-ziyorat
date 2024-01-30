<template>
  <div class="flex bg-dark overflow-hidden max-lg:hidden">
    <CFilterMap class="max-w-[404px] w-full" @openBox="openToggle" />
    <CMap class="w-full" />
  </div>
  <CFilterBox v-if="openBoxFilter" @closeBox="closeBox" />
  <CmobileLayout @openBox="openToggle"/>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CMap from "@/components/Sections/PHelp/CMap.vue";
import CFilterMap from "@/components/Sections/PHelp/CFIlter.vue";
import CFilterBox from "@/components/Sections/PHelp/CFilterBox.vue";
import { useMapStore } from "@/stores/map";
import CmobileLayout from "@/components/Sections/PHelp/CmobileLayout.vue";
import { useRoute } from "vue-router";

const store = useMapStore();
const route = useRoute()
const openBoxFilter = ref(false);
const openToggle = () => {
  openBoxFilter.value = true;
};
const closeBox = () => {
  openBoxFilter.value = false;
};
store.fetchDestinationList({
  search: route.query.search || undefined,
  destination_country__in: route.query.country || undefined,
  religion__in: route.query.religions || undefined,
});
</script>
