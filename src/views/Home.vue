<template>
  <header>
    <nav>
      <RouterLink to="/">Home </RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
    </nav>
  </header>
  <h3>{{ user?.name }}</h3>
  <h4>{{ user }}</h4>
  <button @click="logout">Logout</button>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()

const { user } = toRefs(store)
const { logout } = store
</script>
