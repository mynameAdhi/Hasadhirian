import { locale, setLocale as applyLocale } from '@/i18n'

const supported = ['id', 'en']

export function useLocale() {
  function setLocale(next) {
    if (!supported.includes(next) || next === locale.value) return
    applyLocale(next)
    document.documentElement.lang = next

    try {
      localStorage.setItem('locale', next)
    } catch (error) {
      // Storage unavailable
    }
  }

  return { locale, setLocale }
}