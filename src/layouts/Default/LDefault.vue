<template>
  <div class="flex flex-col min-h-screen bg-dark">
    <Header />
    <main class="h-full grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Common/Header.vue'
import Footer from '@/components/Common/Footer.vue'
</script>
