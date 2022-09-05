<template>
  <header>
    <nav>
      <RouterLink to="/">Home </RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
    </nav>
  </header>
  <h3>{{ user?.name }}</h3>
  <h4>{{ user }}</h4>
  <Button
    class="btn-secondary"
    :processing="buttonState"
    @click="handleButtonClick"
  >
    Test Button
  </Button>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()

const { user } = toRefs(store)
const { logout } = store

const buttonState = ref(false)
const handleButtonClick = () => {
  console.log('clicked')
  buttonState.value = true
  setTimeout(() => {
    buttonState.value = false
  }, 5000)
}
</script>
