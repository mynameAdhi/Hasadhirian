<script setup>
import { useI18n } from '@/i18n'
import { useContent } from '@/composables/useContent'
import { profile } from '@/data/content'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
const { content } = useContent()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div>
        <p class="site-footer__text">© {{ year }} {{ profile.name }}. {{ content.footer.credit }}</p>
        <p class="site-footer__text">{{ content.footer.built }}</p>
      </div>

      <div class="site-footer__meta">
        <a class="site-footer__link" href="#top">
          {{ t('actions.backToTop') }}
          <AppIcon name="arrow-up" :size="14" />
        </a>
      </div>
    </div>
  </footer>
</template>
