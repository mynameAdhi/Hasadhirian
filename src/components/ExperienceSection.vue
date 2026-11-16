<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useContent } from '@/composables/useContent'
import { experienceMeta, experienceOrder } from '@/data/content'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
const { content } = useContent()

const experiences = computed(() =>
  experienceOrder.map((id) => ({
    id,
    ...experienceMeta[id],
    ...content.value.experience.items[id],
  })),
)
</script>

<template>
  <section id="experience" class="section" aria-labelledby="experience-title">
    <div class="container">
      <SectionHeading
        :label="content.sections.experience.label"
        :title="content.sections.experience.title"
        :note="content.sections.experience.note"
        heading-id="experience-title"
      />

      <ol class="timeline" :aria-label="t('a11y.experienceList')">
        <li
          v-for="(item, index) in experiences"
          :key="item.id"
          v-reveal="index * 80"
          class="timeline__item"
          :class="{ 'is-current': item.current }"
        >
          <p class="timeline__period">{{ item.period }}</p>
          <h3 class="timeline__role">{{ item.role }}</h3>
          <p class="timeline__company">
            {{ item.company }}<template v-if="item.location">, {{ item.location }}</template>
            <span aria-hidden="true"> · </span>{{ item.type }}
          </p>
          <ul class="timeline__bullets">
            <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
