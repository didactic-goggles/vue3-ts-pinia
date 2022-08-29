<template>
  <form @submit="submitHandler">
    <div>
      <label for="email">Email</label>
      <input type="email" name="" id="email" v-model="formData.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        name=""
        id="password"
        v-model="formData.password"
      />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
const router = useRouter()
const route = useRoute()

const { login } = store
const formData = reactive({
  email: '',
  password: ''
})
const submitHandler = async (event: Event) => {
  event.preventDefault()
  const response = await login(formData)
  if (route.query.redirect_url) {
    router.push(route.query.redirect_url as string)
  } else {
    router.push({ name: 'Home' })
  }
}
</script>

<style scoped></style>
