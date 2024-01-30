import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/service/axios";

export const useDestinationStore = defineStore("DestinationStore", () => {
  const destinations = ref([]);
  const destinationDetail = ref({});
  const destinationPopular = ref([]);
  const destinationsLoad = ref(true);
  const destinationDetailLoad = ref(true);
  function fetchDestinationList() {
    return new Promise((resolve, reject) => {
      axios
        .get("/destination/DestinationList")
        .then((res) => {
          destinations.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => (destinationsLoad.value = false));
    });
  }
  function fetchDestinationPopular() {
    return new Promise((resolve, reject) => {
      axios
        .get("/destination/DestinationListPopular")
        .then((res) => {
          destinationPopular.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function fetchDestinationDetail(slug: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/destination/DestinationDetail/${slug}`)
        .then((res) => {
          destinationDetail.value = res.data;
          resolve(res.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
        .finally(() => (destinationDetailLoad.value = false));
    });
  }

  return {
    fetchDestinationList,
    fetchDestinationDetail,
    fetchDestinationPopular,
    destinationPopular,
    destinationDetail,
    destinations,
    destinationsLoad,
    destinationDetailLoad,
  };
});
