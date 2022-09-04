<template>
  <div class="form-signin m-auto">
    <form @submit="submitHandler" class="w-100">
      <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="formData.email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="formData.password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  </div>
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

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
  height: 100%;
  display: flex;
  align-items: center;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
