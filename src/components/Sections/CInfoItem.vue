<template>
  <div class="w-full">
    <SPlaceHolder
      v-bind="{ loading }"
      :option-class="`w-[${100 / length}%] h-[90px] rounded-lg`"
    >
      <div
        class="flex bg-white/[0.04] p-4 rounded-lg relative w-full max-md:w-full overflow-hidden"
        :class="itemClass"
      >
        <div class="text-white">
          <h3 class="text-4xl font-bold">{{ count }}</h3>
          <p class="text-xl capitalize line-clamp-1">{{ $t(info) }}</p>
        </div>
        <img :src="icon" alt="card-img" class="absolute right-0 bottom-0" />
      </div>
    </SPlaceHolder>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import SPlaceHolder from "@/components/Skeleton/SPlaceHolder.vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
interface Props {
  count: string | number;
  info: string;
  icon: string;
  length: number;
  itemClass?: string;
}

defineProps<Props>();
</script>
