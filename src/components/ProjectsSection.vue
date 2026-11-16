<script setup>
import { computed, ref } from 'vue'
import { useI18n } from '@/i18n'
import { useContent } from '@/composables/useContent'
import { projectMeta, projectOrder } from '@/data/content'
import SectionHeading from './SectionHeading.vue'
import ProjectCover from './ProjectCover.vue'
import ProjectModal from './ProjectModal.vue'

const { t } = useI18n()
const { content } = useContent()

const activeProject = ref(null)

const projects = computed(() =>
  projectOrder.map((id) => ({
    id,
    ...projectMeta[id],
    ...content.value.projects.items[id],
  })),
)

function openProject(project) {
  activeProject.value = project
}

function closeProject() {
  activeProject.value = null
}
</script>

<template>
  <section id="projects" class="section" aria-labelledby="projects-title">
    <div class="container">
      <SectionHeading
        :label="content.sections.projects.label"
        :title="content.sections.projects.title"
        :note="content.sections.projects.note"
        heading-id="projects-title"
      />

      <ul class="projects__list" :aria-label="t('a11y.projectList')">
        <li
          v-for="(project, index) in projects"
          :key="project.id"
          v-reveal="index * 60"
        >
          <article
            class="project-card"
            :class="{ 'project-card--reverse': index % 2 === 1 }"
          >
            <div class="project-card__media">
              <ProjectCover
                :kind="project.cover"
                :label="content.projects.illustrationNote"
              />
            </div>

            <div class="project-card__content">
              <span class="project-card__index" aria-hidden="true">{{ project.index }}</span>
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__subtitle">{{ project.subtitle }}</p>
              <p class="project-card__role">{{ project.role }}</p>
              <p class="project-card__description">{{ project.cardDescription }}</p>

              <ul class="project-card__stack" :aria-label="content.projects.labels.stack">
                <li v-for="item in project.stack" :key="item" class="tag">{{ item }}</li>
              </ul>

              <button
                type="button"
                class="project-card__cta"
                :aria-label="`${t('actions.viewDetail')}: ${project.title}`"
                @click="openProject(project)"
              >
                {{ t('actions.viewDetail') }}
              </button>
            </div>
          </article>
        </li>
      </ul>
    </div>

    <ProjectModal :project="activeProject" @close="closeProject" />
  </section>
</template>
