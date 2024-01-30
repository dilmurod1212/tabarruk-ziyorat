<template>
    <div class="flex items-center p-3 bg-gray-300 rounded-md backdrop-blur-md">
        <img :src="data?.img" alt="" class="w-[100px] h-[80px] object-cover rounded-md">
        <div class="ml-4">
            <p class="text-base text-gray-250 mb-2">{{ data?.title }}</p>
            <p class="text-xl text-white font-semibold line-clamp-1">{{ data?.subtitle }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
const props = defineProps<{
    data?: {[key: string]: string}[]
}>()
</script>