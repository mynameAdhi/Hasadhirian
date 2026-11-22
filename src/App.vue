<script setup>
import { onMounted, watch } from 'vue'
import { useI18n } from '@/i18n'
import { useContent } from '@/composables/useContent'
import SiteHeader from './components/SiteHeader.vue'
import SpineRail from './components/SpineRail.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { t, locale } = useI18n()
const { content } = useContent()

function setMeta() {
  if (typeof document === 'undefined') return

  const meta = content.value.meta

  document.documentElement.lang = locale.value
  document.title = meta.title

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', meta.description)
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute('content', meta.title)
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute('content', meta.description)
  document
    .querySelector('meta[property="og:locale"]')
    ?.setAttribute('content', meta.ogLocale)
}

// Jalankan SETELAH mount (hindari hydration mismatch)
onMounted(() => {
  setMeta()
})

// Hanya reactif ke perubahan locale user (toggle manual)
watch(locale, setMeta)
</script>

<template>
  <a class="skip-link" href="#main">{{ t('a11y.skip') }}</a>

  <ScrollProgress />
  <SiteHeader />
  <SpineRail />

  <main id="main" tabindex="-1">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </main>

  <SiteFooter />
</template>
