import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";
import axios from "@/service/axios";
import type { IReligion } from "@/types";

export const useReligionsStore = defineStore("ReligionsStore", () => {
  const religions = ref([]);
  const religion = ref<IReligion>({});
  const religionLoad = ref(true);
  const religionsDestination = ref([]);
  function fetchReligionsList() {
    return new Promise((resolve, reject) => {
      axios
        .get("/destination/ReligionList")
        .then((res) => {
          religions.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => (religionLoad.value = false));
    });
  }
  function fetchReligionDetail(id: number) {
    return new Promise((resolve, reject) => {
      axios
        .get<IReligion>(`/destination/ReligionDetail/${id}`)
        .then((res) => {
          religion.value = res.data;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function fetchReligionsDestination() {
    return new Promise((resolve, reject) => {
      axios
        .get("/destination/CountryAttractionListByReligion")
        .then((res) => {
          religionsDestination.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  fetchReligionsDestination();
  return {
    fetchReligionsList,
    fetchReligionDetail,
    fetchReligionsDestination,
    religionsDestination,
    religions,
    religion,
    religionLoad,
  };
});
