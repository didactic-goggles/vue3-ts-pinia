<template>
  <RouterLink to="/login">Login</RouterLink>

  <h3>{{ user?.name }}</h3>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { toRefs } from 'vue';

const store = useAuthStore();
const { user } = toRefs(store);

</script>