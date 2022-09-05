<template>
  <button class="btn" :disabled="!!props.processing">
    <span
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
      v-if="props.processing"
    ></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  processing: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped></style>
