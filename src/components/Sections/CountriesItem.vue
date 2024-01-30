<template>
  <router-link
    :to="{ name: 'countrySingle', params: { slug: el.country } }"
    v-for="el in countries"
    :key="el.id"
  >
    <div
      class="flex flex-col justify-center items-center hover:bg-white/[0.04] border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white/40 border-transparent hover:border-white/[0.05] p-3 rounded-xl transition-all cursor-pointer"
      :class="itemClass"
    >
      <img :src="el.flag" alt="uz-flag" class="min-w-[70px]" />
      <div class="text-white text-center mt-4">
        <h3 class="text-xl capitalize">{{ el.country }}</h3>
        <p class="text-sm opacity-60">{{ $t('destinations_count', { count: el.destination }) }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
interface Props {
  countries: {
    id: number
    flag: string
    country: string
    destination: number
  }[]
  itemClass?: string
}

defineProps<Props>()
</script>

<style scoped></style>
