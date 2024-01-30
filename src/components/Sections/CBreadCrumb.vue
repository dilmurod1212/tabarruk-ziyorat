<template>
    <div class="breadcrumb">
      <router-link to="/">Home</router-link>
      <span v-if="breadcrumb.length > 0" class="separator">></span>
      <template v-for="(breadcrumbItem, index) in breadcrumb">
        <span v-if="index !== breadcrumb.length - 1">
          <router-link :to="breadcrumbItem.to">{{ breadcrumbItem.label }}</router-link>
        </span>
        <span v-else class="text-gray-500">{{ breadcrumbItem.label }}</span>
        <span v-if="index !== breadcrumb.length - 1" class="separator">></span>
      </template>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      breadcrumb() {
        const matchedRoutes = this.$route.matched;
        const breadcrumb = matchedRoutes.map(route => ({
          label: route.name,
          to: route.path,
        }));
        return breadcrumb;
      },
    },
  }
  </script>
  
  <style scoped>
  .breadcrumb {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  
  .separator {
    margin: 0 5px;
    color: gray;
  }
  </style>