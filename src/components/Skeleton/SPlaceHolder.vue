<template>
  <Transition mode="out-in">
    <div
      class="placeholder"
      v-if="loading"
      :class="optionClass"
      :style="{ width: width, height: height, borderRadius: borderRadius }"
    >
      &nbsp;
    </div>
    <template v-else>
      <slot />
    </template>
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  optionClass: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  loading: boolean;
}
defineProps<Props>();
</script>

<style scoped>
@keyframes bgAnimate {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.placeholder {
  /* height: v-bind(height);
  width: v-bind(width);
  border-radius: v-bind(borderRadius); */
  /* background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  ); */
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.2),
    0 2px 4px -2px rgb(0 0 0 / 0.2);
  animation: bgAnimate 1.2s linear infinite;
}
</style>
