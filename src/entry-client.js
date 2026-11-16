import './style.css'
import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import { locale, setLocale } from './i18n'
import { reveal } from './composables/useReveal'

const supported = ['id', 'en']

try {
  const stored = localStorage.getItem('locale')
  if (supported.includes(stored)) setLocale(stored)
} catch (error) {
  // Indonesian remains the default when storage is unavailable.
}

document.documentElement.lang = locale.value

const container = document.getElementById('app')
const app = container.hasChildNodes() ? createSSRApp(App) : createApp(App)

app.directive('reveal', reveal)
app.mount(container)
