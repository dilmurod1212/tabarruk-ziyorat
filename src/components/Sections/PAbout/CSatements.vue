<template>
    <div class="text-white container">
       <div class="text-center">
        <p class="text-center1 text-40 font-semibold ">Statements</p>
        <p class="text-xl my-4">All countries that we represent</p>
        <CCard/>
       </div>
    </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import CCard from '@/components/Cards/CStatementCard.vue'
import {ref, reactive, onMounted} from 'vue'

</script>
<style>
 .text-center1{
        position: relative;
        padding-bottom: 10px;
    }
    .text-center1::after{
        content: '';
        position: absolute;
        border: 2px solid #E54545;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0px);
        width: 200px;
    }
</style>