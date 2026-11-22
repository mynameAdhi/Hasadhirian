import './style.css'
import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import { locale, setLocale } from './i18n'
import { reveal } from './composables/useReveal'

const supported = ['id', 'en']

// 1. Baca dari DOM (server-rendered) sebagai source of truth awal
const domLocale = document.documentElement.lang
const domTheme = document.documentElement.dataset.theme

// 2. Set locale/theme dari DOM, JANGAN dari localStorage dulu
if (supported.includes(domLocale)) {
  setLocale(domLocale)
}

// 3. Sync ke localStorage SETELAH mount (di useTheme/useLocale onMounted)
const container = document.getElementById('app')
const app = container.hasChildNodes() ? createSSRApp(App) : createApp(App)

app.directive('reveal', reveal)
app.mount(container)