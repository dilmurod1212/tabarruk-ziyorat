<template>
 <div class="bg-dark hidden max-lg:block h-screen overflow-hidden flex-col">
 <div class="bg-dark text-white container">
<div class="flex items-center">
 <i class="fa-solid fa-arrow-left text-xl mr-4 cursor-pointer"></i>
<router-link to="/">
    <img src="/images/Logo.svg" alt="" class="w-[90%]">
</router-link>
 </div>
<div class="grid grid-cols-2 items-center bg-gray-350 justify-between p-2 rounded-2xl">
<router-link :to="{name: 'Location'}"><p @click="filteredBtn('map')"
  class="mr-5 px-2 py-3 border text-center rounded-2xl bg-transparent border-none cursor-pointer"
    :class="{'bg-white text-dark': filter == 'map'}">Map</p>
     </router-link>
 <router-link to="/filter-map"><p @click="filteredBtn('filter')"
 class="px-2 py-3 border text-center rounded-2xl bg-transparent border-none cursor-pointer"
 :class="{'bg-white text-dark': filter == 'filter'}">List</p>
 </router-link>
</div>
   </div>
 <router-view class="h-screen mt-5"/>
 </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import CMap from '@/components/Sections/PHelp/CMap.vue';
import CFilterMap from '@/components/Sections/PHelp/CFIlter.vue';
import CFilterBox from "@/components/Sections/PHelp/CFilterBox.vue";
import {useMapStore} from "@/stores/map";

const store = useMapStore();
const openBoxFilter =  ref(false)

const filter = ref('filter')
function filteredBtn(option: string){
  filter.value = option
}

store.fetchDestinationList({})
</script>