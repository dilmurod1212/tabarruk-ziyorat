<template>
  <footer class="bg-[url('/images/vectors/Vector (8).svg')] mt-6">
    <div class="container">
      <div class="flex items-center max-md:flex-col max-md:items-start gap-4 text-white py-4">
        <div class="flex flex-col">
          <CLogo class="" />
          <p class="text-sm md:text-base">
            {{ $t('footer_descr') }}
          </p>
        </div>
        <div class="flex gap-4 md:justify-center items-center w-full">
          <a
            target="_blank"
            v-for="el in socialItems"
            :key="el.id"
            :href="el.link"
            class="hover:text-red transition-colors text-sm md:text-base"
            ><i :class="el.logo"></i
          ></a>
        </div>
        <div class="grid grid-cols-2 gap-2 md:gap-3 w-full justify-between">
          <router-link
            v-for="el in footerLinks"
            :key="el.id"
            :to="el.link.toLowerCase()"
            class="hover:text-red text-sm md:text-base"
            >{{ $t(el.name) }}</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import CLogo from '@/components/Common/CLogo.vue'
import { socialItems, footerLinks } from '@/data/footer'
</script>

<style scoped>
footer {
  background: url('/images/vectors/footer-vector.svg');
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
