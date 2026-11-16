<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n'
import { useTheme } from '@/composables/useTheme'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
const { isDark, toggleTheme } = useTheme()
const label = computed(() => (isDark.value ? t('actions.toLight') : t('actions.toDark')))
</script>

<template>
  <button
    type="button"
    class="icon-button"
    :aria-label="label"
    :title="label"
    @click="toggleTheme"
  >
    <AppIcon :name="isDark ? 'sun' : 'moon'" :size="18" />
  </button>
</template>
