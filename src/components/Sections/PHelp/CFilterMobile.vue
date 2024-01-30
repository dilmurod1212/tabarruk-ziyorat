<template>
   <div class="text-white container">
    <form action="" class="flex items-center justify-between my-5">
       <CFilterInput class="py-2" 
       placeHolder="Search"
       >
        <template #prefix>
          <i class="fa-solid fa-magnifying-glass"></i>
        </template>
       </CFilterInput>
        <i class="fa-solid fa-sliders ml-4 text-gray-100 text-xl cursor-pointer" @click="emits('openBox')"></i>
       </form>
    </div>
    <div class="mt-5 h-[75vh] overflow-scroll">
        <CHelpCountryVue v-for="(element, index) in data" :key="index" class="container" :data="element"/>
    </div>
</template>
<script setup lang="ts">
import CHelpCountryVue from "@/components/Cards/CHelpCountry.vue";
import CFilterInput from "@/components/Form/CFilterInput.vue";
import CFilterBox from "@/components/Sections/PHelp/CFilterBox.vue";
import { useMapStore } from "@/stores/map";
import {ref, computed} from 'vue'
const status = ref(false)
const emits = defineEmits(['openBox'])
const openBox = ()=>{
    status.value = true
}
const store = useMapStore()
const data = computed(()=> store.destinations)

</script>