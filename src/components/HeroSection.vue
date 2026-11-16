<script setup>
import { useI18n } from 'vue-i18n'
import { useContent } from '@/composables/useContent'
import { profile } from '@/data/content'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
const { content } = useContent()
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="container hero__grid">
      <div class="hero__copy">
        <p class="eyebrow hero__eyebrow">{{ content.hero.eyebrow }}</p>

        <h1 id="hero-title" class="display-xl hero__name">
          <span class="sr-only">{{ profile.name }}, {{ content.hero.eyebrow }}</span>
          <span class="hero__name-line" aria-hidden="true">{{ content.hero.nameLine1 }}</span>
          <span class="hero__name-line" aria-hidden="true">
            {{ content.hero.nameLine2 }}<span class="hero__name-dot"></span>
          </span>
        </h1>

        <p class="hero__headline">{{ content.hero.headline }}</p>
        <p class="hero__positioning">{{ content.hero.positioning }}</p>

        <div class="hero__actions">
          <a class="btn btn--primary" href="#projects">{{ t('actions.viewProjects') }}</a>
          <a class="btn btn--secondary" :href="profile.cv" download>
            <AppIcon name="download" :size="16" />
            {{ t('actions.downloadCv') }}
          </a>
        </div>

        <p class="hero__availability">{{ content.hero.availability }}</p>
      </div>

      <figure class="hero__portrait">
        <div class="portrait-frame">
          <img
            :src="profile.portrait"
            :alt="content.hero.portraitAlt"
            width="800"
            height="1000"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <figcaption class="hero__caption">
          <span>{{ content.hero.portraitTag }}</span>
          <span>{{ content.hero.portraitCaption }}</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
