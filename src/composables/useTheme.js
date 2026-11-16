import { ref } from 'vue'

const DARK_COLOR = '#0B0B0C'
const LIGHT_COLOR = '#F4F1EA'

const isDark = ref(true)
let initialized = false

function syncMeta(dark) {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', dark ? DARK_COLOR : LIGHT_COLOR)
}

function applyTheme(theme) {
  const dark = theme === 'dark'
  isDark.value = dark
  document.documentElement.dataset.theme = theme
  syncMeta(dark)

  try {
    localStorage.setItem('theme', theme)
  } catch (error) {
    // Storage can be unavailable in private mode. The theme still applies.
  }
}

export function useTheme() {
  if (!initialized) {
    isDark.value = document.documentElement.dataset.theme !== 'light'
    syncMeta(isDark.value)
    initialized = true
  }

  function toggleTheme() {
    applyTheme(isDark.value ? 'light' : 'dark')
  }

  return { isDark, toggleTheme }
}
