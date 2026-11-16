<script setup>
import { useI18n } from 'vue-i18n'
import { useContent } from '@/composables/useContent'
import { skillGroups } from '@/data/content'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
const { content } = useContent()
</script>

<template>
  <section id="skills" class="section" aria-labelledby="skills-title">
    <div class="container">
      <SectionHeading
        :label="content.sections.skills.label"
        :title="content.sections.skills.title"
        :note="content.sections.skills.note"
        heading-id="skills-title"
      />

      <ul class="skills__list" :aria-label="t('a11y.skillsList')">
        <li
          v-for="(group, index) in skillGroups"
          :key="group.name"
          v-reveal="index * 50"
          class="skill-row"
        >
          <span class="skill-row__index" aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 class="skill-row__name">{{ group.name }}</h3>
          <ul class="skill-row__tags">
            <li v-for="item in group.items" :key="item" class="tag">{{ item }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
