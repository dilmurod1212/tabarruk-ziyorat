<template>
  <nav>
    <ul
      class="gap-4 text-white lg:flex hidden relative"
      :class="navClass"
      @click="$emit('close')"
    >
      <li>
        <router-link to="/about"
          ><h2 class="capitalize hover:opacity-40">
            {{ $t("about") }}
          </h2></router-link
        >
      </li>
      <li>
        <CDropdown
          :options="dropdownCountries"
          value-key="descr"
          label-key="title"
          option-class=" last:mb-0"
          optionsWrapperClass="md:grid grid-cols-2 gap-2 left-0 hidden "
        >
          <template #header>
            <a href="#countries" class="capitalize lg:hidden">{{
              $t("countries")
            }}</a>
            <h2
              class="capitalize hidden lg:block hover:opacity-40 transition-opacity"
            >
              {{ $t("countries") }}
            </h2>
          </template>
          <template v-slot:option="slotData">
            <router-link
              :to="{
                name: 'countrySingle',
                params: { id: slotData.data.title.toLowerCase() },
              }"
              class="rounded-lg transition-all flex items-center gap-2 p-2 hover:bg-white/10"
            >
              <img :src="slotData.data.img" :alt="slotData.data.title" />
              <div class="text-white">
                <h3 class="text-base group-hover:text-red-500 transition-all">
                  {{ slotData.data.title }}
                </h3>
                <p class="text-sm opacity-60">
                  {{ slotData.data.descr }} destinations
                </p>
              </div>
            </router-link>
          </template>
        </CDropdown>
      </li>
      <li
        @click="showReligion = !showReligion"
        @focusout="showReligion = false"
      >
        <CDropdown
          :options="religions"
          value-key="relId"
          label-key="name"
          class-name="right-0"
          option-class=" last:mb-0 mb-1"
          optionsWrapperClass="hidden md:block"
          @on-click="onDropdownClick"
        >
          <template #header>
            <a href="#religions" class="capitalize lg:hidden">{{
              $t("religions")
            }}</a>
            <h2
              class="capitalize hidden lg:block hover:opacity-40 transition-opacity"
            >
              {{ $t("religions") }}
            </h2>
          </template>
          <template v-slot:option="slotData">
            <router-link
              :to="{
                name: 'religionSingle',
                params: { id: slotData.data.id },
              }"
              class="rounded-lg transition-all flex items-center gap-2 p-2 hover:bg-white/10"
              :class="{ hidden: slotData.data.id == 5 }"
            >
              <img
                :src="slotData.data.flag"
                :alt="slotData.data.name"
                class="w-7 h-7"
              />
              <div class="text-white">
                <h3 class="text-base group-hover:text-red-500 transition-all">
                  {{ slotData.data.title }}
                </h3>
                <p class="text-sm opacity-60">
                  {{ slotData.data.relId }} destinations
                </p>
              </div>
            </router-link>
          </template>
        </CDropdown>
      </li>
      <li>
        <router-link to="/map" class="capitalize hover:opacity-40">{{
          $t("haritage")
        }}</router-link>
      </li>
      <li>
        <router-link to="/help" class="capitalize hover:opacity-40">{{
          $t("help")
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useReligionsStore } from "@/stores/religions";
import { dropdownCountries } from "@/data/dropdown";
import CDropdown from "@/components/Common/CDropdown.vue";

const store = useReligionsStore();
const showReligion = ref(false);
defineProps({ navClass: String });

const onDropdownClick = (element) => {
  console.log(element, "on dropdown option click");
};
const religions = computed(() => store.religions);
</script>

<style scoped>
.router-link-exact-active,
.active {
  opacity: 0.4;
  font-weight: 700;
}
</style>
