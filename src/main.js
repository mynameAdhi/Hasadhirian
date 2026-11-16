import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './i18n'
import { reveal } from './composables/useReveal'

document.documentElement.lang = i18n.global.locale.value

const app = createApp(App)
app.use(i18n)
app.directive('reveal', reveal)
app.mount('#app')
