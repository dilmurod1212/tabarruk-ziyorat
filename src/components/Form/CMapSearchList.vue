<template>
    <div class="text-center py-3 border-t-[0.5px] my-4" v-if="data.length === 0">
      <img src="/images/CMap/Empty state.svg" alt="" class="m-auto my-4" />
      <p class="text-base text-gray-250 font-medium">
        Oops! We couldn't find any matching <br /> results for your search
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useMapStore } from "@/stores/map";
  import { useUpdateQueries } from "@/composables/useUpdateQueries";
  import { useRoute } from "vue-router";
  import { ref, computed, defineProps } from "vue";
  const props = defineProps<{
    result: string;
  }>();
  const store = useMapStore();
  const { updateQueries } = useUpdateQueries();
  const route = useRoute();
  
  const data = computed(() => store.destinations);
  
  const filterData = computed(() => {
    return data.value.filter((element) => {
      return element?.title?.toLowerCase().includes(props.result?.toLowerCase());
    });
  });
  

  </script>
  