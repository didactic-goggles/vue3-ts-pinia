import { ref, type Ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
// import { plainToInstance } from 'class-transformer'

import type User from '@/classes/user.class'

export const useAuthStore = defineStore('users', () => {
  const user: Ref<User | null> = ref(null)

  const login = async (formData: Object) => {
    console.log(import.meta.env.VITE_API_URL)
    const authData = await axios.post(import.meta.env.VITE_API_URL, formData)
    user.value = authData.data;
    return authData
  }

  return { user, login }
})
