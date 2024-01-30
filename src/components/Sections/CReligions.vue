<template>
  <div id="religions" class="container">
    <CTitle :title="$t('title_religions')" :descr="$t('title_religions_descr')" divClass="mt-12" />
    <div class="flex justify-between max-md:flex-col gap-4" :class="wrapperClass">
      <ReligionsItem :religions="religion" :loading="store.religionLoad"/>
    </div>
    <!-- <pre class="text-white">{{ religion }}</pre> -->
  </div>
</template>

<script setup lang="ts">
import { useReligionsStore } from '@/stores/religions'
import {  computed } from 'vue'
import CTitle from '@/components/Common/CTitle.vue'
import ReligionsItem from './ReligionsItem.vue'

interface Props {
  wrapperClass?: string
}
defineProps<Props>()
const store = useReligionsStore()
const religion = computed(() => store.religions)
</script>
