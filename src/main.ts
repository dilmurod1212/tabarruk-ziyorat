import "./assets/main.css";
import en from "@/locale/en.json";
import ru from "@/locale/ru.json";
import uz from "@/locale/uz.json";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Marquee from "vue3-marquee";
import { createI18n } from "vue-i18n";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
const pinia = createPinia();

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("locale") || "en",
  messages: {
    en: en,
    ru: ru,
    uz: uz,
  },
});
app.use(Vue3Marquee);
app.use(i18n);
app.use(autoAnimatePlugin);
app.use(router);
app.use(pinia);
app.mount("#app");
