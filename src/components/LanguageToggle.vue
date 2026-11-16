<script setup>
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'

const { t } = useI18n()
const { locale, setLocale } = useLocale()
</script>

<template>
  <div class="lang-toggle" role="group" :aria-label="t('a11y.language')">
    <button
      type="button"
      :aria-pressed="locale === 'id'"
      :aria-label="t('actions.langId')"
      @click="setLocale('id')"
    >
      ID
    </button>
    <button
      type="button"
      :aria-pressed="locale === 'en'"
      :aria-label="t('actions.langEn')"
      @click="setLocale('en')"
    >
      EN
    </button>
  </div>
</template>
