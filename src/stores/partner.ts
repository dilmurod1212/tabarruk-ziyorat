import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/service/axios";

export const usePartnersStore = defineStore("partnerStore", () => {
  const destinations = ref([]);
  function fetchDestinationList() {
    return new Promise((resolve, reject) => {
      axios
        .get("/common/PartnerList")
        .then((res) => {
          destinations.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  return { fetchDestinationList, destinations };
});
