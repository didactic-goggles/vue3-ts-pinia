import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const setToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + token
  } else {
    axios.defaults.headers.common.Authorization = false
  }
}
