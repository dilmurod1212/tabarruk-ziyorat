<template>
  <div :class="switcherClass">
    <CDropdown
      :options="languageSwitcherData"
      value-key="descr"
      label-key="title"
      optionsWrapperClass="grid grid-cols-2 gap-1 right-auto left-auto md:grid-cols-3 lg:right-0 "
    >
      <template #header>
        <div class="flex items-center">
          <img :src="currentLocale?.img" alt="uk-icon" class="cursor-pointer" />
          <span class="text-white text-sm font-medium md:hidden ml-2">
            {{ currentLocale?.title }}
          </span>
        </div>
      </template>
      <template v-slot:option="slotData">
        <div
          @click="$i18n.locale = slotData.data.locale"
          class="text-white flex items-center justify-between gap-x-2 p-2 rounded-lg hover:bg-white/10 group transition-all"
          :class="{ 'bg-white/10 ': $i18n.locale == slotData.data.locale }"
        >
          <div class="flex items-center gap-1">
            <img :src="slotData.data.img" :alt="slotData.data.title" />
            <h2>
              {{ slotData.data.title }}
            </h2>
          </div>
          <div
            class="opacity-0"
            :class="{ 'opacity-100': $i18n.locale == slotData.data.locale }"
          >
            <i class="fas fa-check"></i>
          </div>
        </div>
      </template>
    </CDropdown>
  </div>
</template>

<script setup lang="ts">
import { languageSwitcherData } from "@/data/dropdown";
import CDropdown from "@/components/Common/CDropdown.vue";

import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { locale } = useI18n();
interface Props {
  switcherClass?: string;
}
defineProps<Props>();

const currentLocale = computed(() =>
  languageSwitcherData.find((element) => element?.locale === locale.value)
);
</script>

<style scoped></style>
