import { useI18n } from 'vue-i18n'

const supported = ['id', 'en']

export function useLocale() {
  const { locale } = useI18n({ useScope: 'global' })

  function setLocale(next) {
    if (!supported.includes(next) || next === locale.value) return
    locale.value = next
    document.documentElement.lang = next

    try {
      localStorage.setItem('locale', next)
    } catch (error) {
      // The language still switches when storage is unavailable.
    }
  }

  return { locale, setLocale }
}
