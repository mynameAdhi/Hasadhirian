<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from '@/i18n'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { navItems, profile } from '@/data/content'
import AppIcon from './AppIcon.vue'
import LanguageToggle from './LanguageToggle.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()
const { activeSection } = useActiveSection(navItems.map((item) => item.id))
const menuOpen = ref(false)

// Headless UI Dialog menghasilkan DOM berbeda di SSR vs hydration.
// Render hanya di client (setelah mount) agar tidak terjadi hydration mismatch.
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <a href="#top" class="wordmark" :aria-label="profile.name">
        <span class="wordmark__dot" aria-hidden="true"></span>
        <span class="wordmark__full">HAS ADHI RIAN</span>
        <span class="wordmark__short">HAS</span>
        <span class="wordmark__accent" aria-hidden="true">.</span>
      </a>

      <nav class="site-nav" :aria-label="t('a11y.mainNav')">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ 'is-active': activeSection === item.id }"
          :aria-current="activeSection === item.id ? 'location' : undefined"
        >
          {{ t(`nav.${item.id}`) }}
        </a>
      </nav>

      <div class="header-controls header-controls--desktop">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <button
        type="button"
        class="menu-button"
        :aria-label="t('actions.openMenu')"
        :aria-expanded="menuOpen"
        @click="menuOpen = true"
      >
        <AppIcon name="menu" :size="18" />
        {{ t('menu.title') }}
      </button>
    </div>
  </header>

  <Dialog v-if="mounted" :open="menuOpen" class="mobile-menu-root" @close="menuOpen = false">
    <DialogPanel class="mobile-menu">
      <div class="mobile-menu__header">
        <DialogTitle class="mobile-menu__title">{{ t('menu.title') }}</DialogTitle>
        <button type="button" class="menu-button" @click="menuOpen = false">
          <AppIcon name="close" :size="18" />
          {{ t('actions.close') }}
        </button>
      </div>

      <nav class="mobile-menu__nav" :aria-label="t('a11y.menu')">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="mobile-menu__link"
          @click="menuOpen = false"
        >
          <span>{{ t(`nav.${item.id}`) }}</span>
          <span class="mobile-menu__link-index" aria-hidden="true">{{ item.index }}</span>
        </a>
      </nav>

      <div class="mobile-menu__controls">
        <span class="eyebrow">{{ t('menu.controls') }}</span>
        <div class="header-controls">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>
