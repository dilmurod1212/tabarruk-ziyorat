<template>
  <div>
    CountryId: {{ count }}
    getters: {{ store.doubleCount }}

    <button @click="store.$reset()"> reset state </button>
  </div>
</template>

<script setup lang="ts">
import {useCommonStore} from "@/stores/counter";
import {computed} from "vue";

const store = useCommonStore();

const count = computed(() => store.count)
</script>