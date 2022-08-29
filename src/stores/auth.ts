import { ref, type Ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
// import { plainToInstance } from 'class-transformer'

import User from '@/classes/user.class'
import { setToken } from '@/libraries/axios'

export const useAuthStore = defineStore('users', () => {
  const user: Ref<User | null> = ref(null)
  const token = ref('')

  const login = async (formData: Object) => {
    const authData = await axios.post('/login', formData)
    setToken(authData.data.token)
    token.value = authData.data.token
    await fetchUser()
  }

  const fetchUser = async () => {
    const authData = await axios.get('/user')
    user.value = new User(authData.data)
    setStorage()
    return authData
  }

  const logout = async () => {
    try {
      await axios.post('/logout', token.value)
    } catch (error) {
    } finally {
      user.value = null
      setToken('')
      setStorage(true)
    }
  }

  const setStorage = (isDelete = false) => {
    if (isDelete) {
      localStorage.removeItem('token')
    } else {
      localStorage.setItem('token', token.value)
    }
  }

  const getTokenFromStorage = () => {
    return localStorage.getItem('token') || ''
  }

  const initFetch = async () => {
    try {
      const storedToken = getTokenFromStorage()
      if (storedToken) {
        token.value = storedToken
        setToken(storedToken)
        await fetchUser()
      }
    } catch (error) {
      return true
    }
  }

  return { user, login, fetchUser, logout, initFetch }
})
