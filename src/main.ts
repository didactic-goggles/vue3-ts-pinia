import { createApp } from 'vue'
import '@/libraries'
import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'
import { useAuthStore } from '@/stores/auth'

import '@/styles/styles.scss'

const app = createApp(App)
app.use(store)

const authStore = useAuthStore()
const { initFetch } = authStore

initFetch().then(() => {
  app.use(router)
  router.isReady().then(() => {
    app.mount('#app')
  })
})

// router.isReady().then(() => {
// })
