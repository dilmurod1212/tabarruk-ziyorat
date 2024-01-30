import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/service/axios";

export const useNewsStore = defineStore("NewsStore", () => {
  const news = ref([]);
  const newsDetail = ref([]);
  const newsLoad = ref(true);
  const count = ref(0)
  const newsDetailLoad = ref(true);
  function fetchNewsList() {
    return new Promise((resolve, reject) => {
      axios
        .get("/news/NewsList")
        .then((res) => {
          count.value = res?.data?.count
          news.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          newsLoad.value = false;
        });
    });
  }
  function fetchNewsDetail(slug: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/news/NewsDetail/${slug}`)
        .then((res) => {
          newsDetail.value = res.data;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => (newsDetailLoad.value = false));
    });
  }

  return { fetchNewsList, fetchNewsDetail, news, newsDetail, newsLoad, count };
});
