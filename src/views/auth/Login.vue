<template>
    <form @submit="submitHandler">
        <div>
            <label for="email">Email</label>
            <input type="email" name="" id="email" v-model="formData.email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="" id="password" v-model="formData.password">
        </div>
        <button type="submit">Login</button>
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore();

const { login } = store
const formData = reactive({
    email: '',
    password: ''
})
const submitHandler = async (event: Event) => {
    event.preventDefault();
    console.log(formData)
    const response = await login(formData)
    console.log(response)
}
</script>

<style scoped>
</style>