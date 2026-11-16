<script setup>
import { useI18n } from '@/i18n'
import { navItems } from '@/data/content'
import { useActiveSection } from '@/composables/useActiveSection'
import { useScrollProgress } from '@/composables/useScrollProgress'

const { t } = useI18n()
const { activeSection } = useActiveSection(navItems.map((item) => item.id))
const { progress } = useScrollProgress()
</script>

<template>
  <nav class="spine-rail" :aria-label="t('a11y.sectionNav')">
    <span class="spine-rail__track" aria-hidden="true">
      <span class="spine-rail__fill" :style="{ transform: `scaleY(${progress})` }"></span>
    </span>

    <a
      v-for="item in navItems"
      :key="item.id"
      :href="`#${item.id}`"
      class="spine-rail__item"
      :class="{ 'is-active': activeSection === item.id }"
      :aria-current="activeSection === item.id ? 'location' : undefined"
    >
      <span class="spine-rail__number" aria-hidden="true">{{ item.index }}</span>
      <span class="spine-rail__label">{{ t(`nav.${item.id}`) }}</span>
    </a>
  </nav>
</template>
