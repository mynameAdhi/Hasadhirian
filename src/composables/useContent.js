import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useContent() {
  const { locale, messages } = useI18n({ useScope: 'global' })
  const content = computed(() => messages.value[locale.value] ?? messages.value.id)
  const isEnglish = computed(() => locale.value === 'en')

  return { content, locale, isEnglish }
}
