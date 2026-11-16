import { computed, ref } from 'vue'
import id from './locales/id.json'
import en from './locales/en.json'

const supported = ['id', 'en']
const messages = { id, en }

export const locale = ref('id')

export function setLocale(next) {
  if (supported.includes(next)) locale.value = next
}

function resolve(source, key) {
  let current = source

  for (const segment of key.split('.')) {
    if (current === null || typeof current !== 'object') return undefined
    current = current[segment]
  }

  return current
}

export function useI18n() {
  function t(key) {
    const value = resolve(messages[locale.value], key) ?? resolve(messages.id, key)
    return typeof value === 'string' ? value : key
  }

  return {
    t,
    locale,
    content: computed(() => messages[locale.value] ?? messages.id),
  }
}
