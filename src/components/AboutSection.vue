<script setup>
import { useContent } from '@/composables/useContent'
import SectionHeading from './SectionHeading.vue'

const { content } = useContent()
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-title">
    <div class="container">
      <SectionHeading
        :label="content.sections.about.label"
        :title="content.sections.about.title"
        heading-id="about-title"
      />

      <div class="about__grid">
        <p v-reveal class="about__body">{{ content.about.body }}</p>

        <ul class="highlight-list">
          <li
            v-for="(item, index) in content.about.highlights"
            :key="item.title"
            v-reveal="index * 70"
            class="highlight"
          >
            <span class="highlight__index" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <div>
              <h3 class="highlight__title">{{ item.title }}</h3>
              <p class="highlight__body">{{ item.body }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
