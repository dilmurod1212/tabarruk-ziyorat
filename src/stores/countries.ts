import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/service/axios";

export const useCountriesStore = defineStore("CountriesStore", () => {
  const countries = ref([]);
  const country = ref([]);
  const countriesLoad = ref(true);
  const countryDestinations = ref([]);
  const countryAttractions = ref([]);
  function fetchcountryAttractions() {
    return new Promise((resolve, reject) => {
      axios
        .get("/destination/CountryAttractionListByReligion")
        .then((res) => {
          countryAttractions.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function fetchCountriesList() {
    return new Promise((resolve, reject) => {
      axios
        .get("/destination/CountryListWithDestinationCount")
        .then((res) => {
          countries.value = res.data?.results;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => (countriesLoad.value = false));
    });
  }
  function fetchCountryDetail(id: number | string) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/destination/CountryDetail/${id}`)
        .then((res) => {
          country.value = res.data;
          console.log(country.value);

          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function fetchCountryDestinations(id: number) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/destination/CountryListWithDestinations/${id}`)
        .then((res) => {
          countryDestinations.value = res.data;
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  return {
    fetchCountriesList,
    fetchCountryDetail,
    fetchCountryDestinations,
    fetchcountryAttractions,
    countryDestinations,
    countries,
    country,
    countryAttractions,
    countriesLoad,
  };
});
