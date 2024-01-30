<template>
  <div class="bg-[url('/images/bg-vector.svg')]">
    <div class="pt-[120px] text-white container">
      <!-- <pre>{{ popular }}</pre> -->
      <CBreadCrumb :routes="routes" />
      <div>
        <CTitle
          title="Frequently given questions"
          title-class="text-start"
          line-class="hidden"
          wrapper-class="mt-6"
        />
        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <CAccordion
            v-for="(el, idx) in accordion"
            :key="idx"
            :descr="el.descr"
            :icon="el.icon"
            :id="el.id"
            :show="activeItem === el.id"
            :title="el.title"
            @click="showItem(el.id)"
          />
        </div>
      </div>
    </div>
    <div class="py-16 my-12 bg-[#111325]">
      <div class="container text-white">
        <CTitle
          title="Have a question for us?"
          descr="Feel in the form below and we will get in touch  with you"
          wrapper-class="text-start mt-0"
          line-class="!mx-0"
        />
        <div class="flex flex-col-reverse md:flex-row items-start gap-6">
          <form class="w-full" @submit.prevent="submitForm">
            <div class="sm:flex gap-6 mb-3">
              <div class="w-full">
                <label for="name" :class="{ 'text-red ': v$.name.$error }">
                  Name
                </label>
                <CInput
                  class="mt-2"
                  input-class="focus:border-blue-300 border-white/20 rounded-lg bg-white/[0.05]"
                  v-model="formData.name"
                  placeholder="Samantha Smith"
                  :error="v$.name.$error"
                  @change="v$.name.$touch()"
                  type="text"
                  id="name"
                />
              </div>
              <div class="w-full max-sm:mt-4">
                <label for="mail" :class="{ 'text-red ': v$.email.$error }">
                  Email
                </label>
                <CInput
                  input-class="focus:border-blue-300 border-white/20 rounded-lg bg-white/[0.05]"
                  v-model="formData.email"
                  id="mail"
                  :error="v$.email.$error"
                  placeholder="example@gmail.com"
                  @change="v$.email.$touch()"
                  type="email"
                  class="mt-2"
                />
              </div>
            </div>
            <div class="">
              <label for="message" :class="{ 'text-red ': v$.message.$error }">
                Message
              </label>
              <textarea
                v-model="formData.message"
                placeholder="message"
                id="message"
                @change="v$.message.$touch()"
                class="w-full h-[76px] overflow-y-auto resize-none mt-2 border border-white/20 rounded-lg bg-white/[0.05] active:ring-0 focus:ring-0 focus:border-blue-300"
                :class="{ '!border-red ': v$.message.$error }"
              ></textarea>
            </div>
            <p class="mt-4">
              <span class="opacity-60"
                >By sending this message you signing</span
              >
              <router-link to="/privacy"> privacy agreement</router-link>
            </p>
            <!-- <CButton variant="red" class="mt-4 flex items-center gap-1" type="submit"
              >Send <i class="icon-send"></i
            ></CButton> -->
            <button
              type="submit"
              class="bg-red text-white hover:bg-red-800 active:ring-4 active:ring-red px-6 py-3 rounded-lg mt-4"
            >
              Send <i class="icon-send"></i>
            </button>
          </form>
          <div class="w-full rounded-xl p-5 border border-white/20 mt-8">
            <div class="pb-3 border-b border-b-white/10">
              <p class="opacity-60 flex items-center gap-1">
                <i class="icon-location-pin"></i> Location
              </p>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/107b+%D0%90%D0%BC%D0%B8%D1%80+%D0%A2%D0%B5%D0%BC%D1%83%D1%80+%D1%88%D0%BE%D2%B3+%D0%BA%D1%9E%D1%87%D0%B0%D1%81%D0%B8,+%D0%A2%D0%BEshkent+100084,+O%60zbekiston/@41.3373924,69.2796843,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8b5218955555:0x4a37273d83e8ae39!8m2!3d41.3373884!4d69.2822592!16s%2Fg%2F11fmy0lylp?entry=ttu"
                class="lg:text-xl font-bold"
                >107 B Amir Temur avenue, Tashkent, Uzbeksitan</a
              >
            </div>
            <div class="flex flex-col lg:flex-row max-lg:gap-4 pt-3">
              <div class="lg:border-r border-r-white/10 lg:pr-5">
                <p class="opacity-60 flex items-center gap-1">
                  <i class="icon-mail"></i> Email address
                </p>
                <a
                  href="mailto:tabarruk.ziyorat@info.uz"
                  target="_blank"
                  class="lg:text-xl font-bold"
                  >tabarruk.ziyorat@info.uz</a
                >
              </div>
              <div class="lg:pl-5">
                <p class="opacity-60 flex items-center gap-1">
                  <i class="icon-phone"></i> Phone number
                </p>
                <a href="tel:+998712007007" class="lg:text-xl font-bold"
                  >+998 71 200 7007</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <CTitle
        class="container"
        title="Popular Attractions"
        descr="Stay up-to-date on the latest news and developments in the Turkic world."
      />
      <CAttractionsCard
        :options="popular"
        title-class="hidden"
        shadow-class="shadow-img"
        class="container"
        title="turkiye"
      />
      -->
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from "@/service/axios";
import { ref, computed, reactive } from "vue";
import { accordion } from "@/data/accordion";
import { useI18n } from "vue-i18n";
import CAccordion from "@/components/Cards/CAccordion.vue";
import CAttractionsCard from "@/components/Cards/CAttractionsCard.vue";
import CTitle from "@/components/Common/CTitle.vue";
import CBreadCrumb from "@/components/Common/CBreadCrumb.vue";
import CInput from "@/components/Form/CInput.vue";

import { useVuelidate } from "@vuelidate/core";
import { minLength, required, email } from "@vuelidate/validators";
import { useDestinationStore } from "@/stores/destinations";
const store = useDestinationStore();

store.fetchDestinationPopular();
const popular = computed(() => store.destinationPopular);
const { t } = useI18n();
const activeItem = ref(0 || null);

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    message: { required, minLength: minLength(20) },
  };
});

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
  v$.value.$touch();
  if (v$.value.$invalid) return;

    await axios.post("/about/UserQuestionCreate", {
      full_name: formData.name,
      email: formData.email,
      message: formData.message,
    }).then(() => {
      for(const key in formData) {
        formData[key] = ""
      }
      v$.value.$reset()
    })
};

const showItem = (id) => {
  if (activeItem.value == id) {
    activeItem.value = null;
  } else {
    activeItem.value = id;
  }
};
const routes = computed(() => [
  {
    label: t("Help"),
    link: "/help",
  },
]);
</script>
