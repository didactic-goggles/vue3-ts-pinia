import { createApp } from 'vue'
import '@/libraries'
import customComponentsArr from '@/libraries/custom-components'
import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'
import { useAuthStore } from '@/stores/auth'
import '@/styles/index.scss'

const app = createApp(App)
app.use(store)

customComponentsArr.forEach((component) =>
  app.component(component[0], component[1])
)

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
