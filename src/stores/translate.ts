import { defineStore } from "pinia";
import axios from "@/service/axios";
import { ref } from "vue";

export const useTranslateStore = defineStore("TranslateStore", () => {
  const data = ref([]);
  function fetchTranslate() {
    return new Promise((resolve, reject) => {
      axios
        .get("/common/FrontTanslationList")
        .then((res) => {
          console.log(res);
          data.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  return { fetchTranslate };
});
