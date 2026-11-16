import { computed } from 'vue'
import { useI18n } from '@/i18n'

export function useContent() {
  const { locale, content } = useI18n()
  const isEnglish = computed(() => locale.value === 'en')

  return { content, locale, isEnglish }
}
