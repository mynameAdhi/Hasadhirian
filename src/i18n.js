import { createI18n } from 'vue-i18n'
import id from './locales/id.json'
import en from './locales/en.json'

const supported = ['id', 'en']
let stored = null

try {
  stored = localStorage.getItem('locale')
} catch (error) {
  // Fall back to Indonesian when storage is unavailable.
}

const locale = supported.includes(stored) ? stored : 'id'

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'id',
  messages: { id, en },
})
