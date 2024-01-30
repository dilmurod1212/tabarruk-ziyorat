import { defineStore } from "pinia";
import axios from "@/service/axios";

export const useMapStore = defineStore("mapStore", {
  state: () => {
    return {
      destinations: [],
      countries: [],
      religions: [],
    };
  },
  actions: {
    fetchDestinationList(params) {
      return new Promise((resolve, reject) => {
        axios
          .get("/destination/DestinationList", {
            params,
          })
          .then((res) => {
            this.destinations = res.data?.results;
            console.log(res);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    fetchCountryList() {
      return new Promise((resolve, reject) => {
        axios
          .get("destination/CountryListWithDestinationCount")
          .then((res) => {
            this.countries = res.data?.results;
            console.log(res);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    fetchReligionsList() {
      return new Promise((resolve, reject) => {
        axios
          .get("destination/ReligionList")
          .then((res) => {
            this.religions = res.data?.results;
            console.log(res);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
