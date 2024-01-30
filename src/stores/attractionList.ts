import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/service/axios";

export const useAttractionsStore = defineStore("AttractionsStore", () => {
  const attractions = ref([]);
  const attractionRecommended = ref([]);

  function fetchAttractionList() {
    return new Promise((resolve, reject) => {
      axios
        .get("/destination/CountryAttractionListByReligion")
        .then((res) => {
          attractions.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  function fetchAttractionRecommended(id: number, slug: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/destination/AttractionListRecommended/${id}/${slug}`)
        .then((res) => {
          attractionRecommended.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return {
    fetchAttractionList,
    fetchAttractionRecommended,
    attractions,
    attractionRecommended,
  };
});
