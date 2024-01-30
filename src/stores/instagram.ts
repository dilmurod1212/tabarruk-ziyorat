import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/service/axios";

export const useInstagramStore = defineStore("InstagramStore", () => {
  const instagram = ref([]);
  const load = ref(true);
  function fetchInstagramList() {
    return new Promise((resolve, reject) => {
      axios
        .get("/instagram/InstagramPostList")
        .then((res) => {
          instagram.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => (load.value = false));
    });
  }
  return { fetchInstagramList, instagram, load };
});
