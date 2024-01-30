<template>
    <div class="group text-white border-t-[0.5px] border-b-[0.5px] py-4 flex hover:bg-dark-50 cursor-pointer">
     <div class="relative group-hover:before:block group-hover:before:w-full group-hover:before:h-full group-hover:before:bg-dark-20 group-hover:before:absolute group-hover:before:z-20">
        <img :src="data?.image" alt="" class="max-w-[118px] min-w-[118px] object-cover w-full h-[72px] rounded-md mr-4">
       <img :src="data?.destination_country?.flag" alt="" class="absolute bottom-0 z-10 max-w-[20px] w-full">
       <span class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-20 text-center hidden group-hover:block">View more</span>
     </div>
       <div class="ml-2">
        <p class="text-sm text-gray-100 ">{{data?.destination_country?.title}}</p>
        <p class="text-base font-semibold text-white">{{ data?.title }}</p>
       </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
 data: {[key: string]:string}[]
}>()
</script>