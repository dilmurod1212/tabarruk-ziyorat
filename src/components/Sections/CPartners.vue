<template>
  <div class="">
    <CTitle
      :title="$t('title_partners')"
      :descr="$t('title_partners_descr')"
      wrapperClass="container"
    />
    <div class="relative">
      <div
        class="absolute z-20 left-[50%] top-[50%] transform translate-y-[-50%] translate-x-[-50%]"
      >
        <img src="/images/partners/logo.svg" alt="partners-logo" />
      </div>
      <SocialItem :options="partners?.results" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import CTitle from "@/components/Common/CTitle.vue";
import SocialItem from "./SocialItem.vue";

import { usePartnersStore } from "@/stores/partner";
const store = usePartnersStore();

const partners = ref(null);
const fetchingDili = async () => {
  partners.value = await store.fetchDestinationList();
  return partners;
};
onMounted(() => {
  fetchingDili();
});
</script>
