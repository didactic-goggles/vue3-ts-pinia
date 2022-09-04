<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
const route = useRoute()
</script>

<template>
  <Sidebar v-if="!route.meta.hideSidebar"></Sidebar>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
