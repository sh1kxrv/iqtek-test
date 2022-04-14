import { createApp } from 'vue'

import router from './router'
import store from './vuex'

import App from './App.vue'
import IconWrapper from './components/icon-wrapper.vue'

import { createMiddleware } from './router.middleware'

import { initialize as InitializeRepository } from './packages/repository'

import InitializeViews from '~/views'
InitializeViews(router, store)

// Инициализация репозитория
InitializeRepository('local-storage')

// Инициализация поддержки middleware в route meta
createMiddleware(router, store)

const app = createApp(App)
app.use(router).use(store)

app.component('IconWrapper', IconWrapper)

router.isReady().then(() => app.mount('#app'))
