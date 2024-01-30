<template>
  <div class="text-white container mt-[120px]">
    <CBreadCrumb :routes="routes" />
    <CTitle title="News" wrapper-class="text-start" line-class="hidden" />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <CNewsCard
        v-for="item in news"
        :key="item.id"
        v-bind="{ item }"
        wrapper-class="h-full"
      />
    </div>
    <div class="my-6 flex justify-end" v-if="count > paginationData.limit">
      <CPagination
        :total="count"
        :limit="paginationData.limit"
        :current-page="paginationData.page"
        @input="handlePage"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from "vue";

import CNewsCard from "@/components/Cards/CNewsCard.vue";
import CBreadCrumb from "@/components/Common/CBreadCrumb.vue";
import CTitle from "@/components/Common/CTitle.vue";
import { useNewsStore } from "@/stores/news";
import { useI18n } from "vue-i18n";
import CPagination from "@/components/Common/CPagination.vue";
const { t } = useI18n();
const store = useNewsStore();
const news = computed(() => store.news);

const routes = computed(() => [
  {
    label: t("news"),
    link: "/news",
  },
]);
const count = computed(() => store.count);
const paginationData = reactive({
  page: 1,
  offset: 0,
  limit: 2,
});
const handlePage = (e: number) => {
  paginationData.page = e;
  paginationData.offset = (paginationData.page - 1) * paginationData.limit;
  store.fetchNewsList(paginationData);
};
store.fetchNewsList(paginationData);
// url?limit=12&offset=0 => page === 1
// url?limit=12&offset=12 => page === 2
// url?limit=12&offset=24 => page === 3
</script>
