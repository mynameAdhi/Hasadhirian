<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'
import { useContent } from '@/composables/useContent'
import { profile } from '@/data/content'
import AppIcon from './AppIcon.vue'
import ProjectCover from './ProjectCover.vue'

const props = defineProps({
  project: { type: Object, default: null },
})

const emit = defineEmits(['close'])

const { t } = useI18n()
const { content } = useContent()

const open = computed(() => Boolean(props.project))

const demoHref = computed(() => {
  if (!props.project || !props.project.demo) return ''
  const subject = encodeURIComponent(props.project.demoSubject)
  const body = encodeURIComponent(props.project.demoBody)
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
})
</script>

<template>
  <Dialog :open="open" class="modal-root" @close="emit('close')">
    <div class="modal-backdrop" aria-hidden="true" @click="emit('close')"></div>

    <div class="project-modal" @click.self="emit('close')">
      <DialogPanel v-if="project" class="project-modal__panel">
        <div class="project-modal__header">
          <DialogTitle class="project-modal__title">{{ project.title }}</DialogTitle>
          <button type="button" class="project-modal__close" @click="emit('close')">
            <AppIcon name="close" :size="16" />
            {{ t('actions.close') }}
          </button>
        </div>

        <div class="project-modal__body">
          <div class="project-modal__cover">
            <ProjectCover
              :kind="project.cover"
              :label="content.projects.illustrationNote"
            />
          </div>

          <DialogDescription class="project-modal__subtitle">
            {{ project.summary }}
          </DialogDescription>

          <div class="project-modal__grid">
            <div>
              <h3 class="project-modal__section-title">
                {{ content.projects.labels.context }}
              </h3>
              <p class="project-modal__text">{{ project.context }}</p>
            </div>

            <div>
              <h3 class="project-modal__section-title">
                {{ content.projects.labels.role }}
              </h3>
              <p class="project-modal__text">{{ project.role }}</p>
              <span v-if="project.private" class="project-modal__private">
                {{ content.projects.privateLabel }}
              </span>
            </div>

            <div>
              <h3 class="project-modal__section-title">
                {{ content.projects.labels.approach }}
              </h3>
              <ul class="project-modal__list">
                <li v-for="step in project.approach" :key="step">{{ step }}</li>
              </ul>
            </div>

            <div>
              <h3 class="project-modal__section-title">
                {{ content.projects.labels.outcome }}
              </h3>
              <p class="project-modal__text">{{ project.outcome }}</p>

              <h3 class="project-modal__section-title project-modal__subsection">
                {{ content.projects.labels.stack }}
              </h3>
              <ul class="project-modal__stack">
                <li v-for="item in project.stack" :key="item" class="tag">{{ item }}</li>
              </ul>
            </div>
          </div>

          <div
            v-if="project.note || project.live || project.demo"
            class="project-modal__footer"
          >
            <p v-if="project.note" class="project-modal__note">{{ project.note }}</p>

            <div class="project-modal__actions">
              <a
                v-if="project.live"
                class="btn btn--primary"
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ t('actions.openLive') }}
                <AppIcon name="arrow-up-right" :size="16" />
                <span class="sr-only">({{ t('actions.externalNote') }})</span>
              </a>
              <a v-else-if="project.demo" class="btn btn--primary" :href="demoHref">
                {{ t('actions.requestDemo') }}
                <AppIcon name="arrow-up-right" :size="16" />
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
