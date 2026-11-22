<script setup>
import { computed, ref } from 'vue'
import { useI18n } from '@/i18n'
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

const hasScreenshots = computed(() => {
  return props.project && Array.isArray(props.project.screenshots) && props.project.screenshots.length > 0
})

// Lightbox state
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function navigateLightbox(direction) {
  if (!props.project?.screenshots?.length) return
  const len = props.project.screenshots.length
  lightboxIndex.value = (lightboxIndex.value + direction + len) % len
}

function handleKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') navigateLightbox(-1)
  if (e.key === 'ArrowRight') navigateLightbox(1)
}

// Close lightbox when modal closes
const originalEmitClose = emit
function handleModalClose() {
  closeLightbox()
  emit('close')
}
</script>

<template>
  <Dialog :open="open" class="modal-root" @close="handleModalClose">
    <div class="modal-backdrop" aria-hidden="true" @click="handleModalClose"></div>

    <div class="project-modal" @click.self="handleModalClose">
      <DialogPanel v-if="project" class="project-modal__panel">
        <div class="project-modal__header">
          <DialogTitle class="project-modal__title">{{ project.title }}</DialogTitle>
          <button type="button" class="project-modal__close" @click="handleModalClose">
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
            v-if="project.note || project.live || hasScreenshots"
            class="project-modal__footer"
          >
            <p v-if="project.note" class="project-modal__note">{{ project.note }}</p>

            <div v-if="hasScreenshots" class="project-modal__screenshots">
              <h3 class="project-modal__section-title project-modal__subsection">
                {{ content.projects.labels.screenshots }}
              </h3>
              <div class="project-modal__screenshot-grid">
                <button
                  v-for="(src, idx) in project.screenshots"
                  :key="idx"
                  type="button"
                  class="project-modal__screenshot-btn"
                  :aria-label="`${content.projects.labels.screenshots} ${idx + 1} dari ${project.screenshots.length}`"
                  @click="openLightbox(idx)"
                >
                  <img
                    :src="src"
                    :alt="`${project.title} screenshot ${idx + 1}`"
                    class="project-modal__screenshot"
                    loading="lazy"
                  />
                  <span class="project-modal__screenshot-hint" aria-hidden="true">
                    <AppIcon name="expand" :size="18" />
                  </span>
                </button>
              </div>
            </div>

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
            </div>
          </div>
        </div>
      </DialogPanel>
    </div>
  </Dialog>

  <!-- Lightbox -->
  <Teleport to="body">
    <div
      v-if="lightboxOpen"
      class="lightbox"
      @click.self="closeLightbox"
      @keydown="handleKeydown"
      role="dialog"
      aria-modal="true"
      :aria-label="`${content.projects.labels.screenshots} ${lightboxIndex + 1} dari ${project?.screenshots?.length || 0}`"
    >
      <div class="lightbox__backdrop" aria-hidden="true" @click="closeLightbox"></div>

      <button
        type="button"
        class="lightbox__close"
        @click="closeLightbox"
        :aria-label="t('actions.close')"
      >
        <AppIcon name="close" :size="24" />
      </button>

      <button
        v-if="project.screenshots.length > 1"
        type="button"
        class="lightbox__nav lightbox__nav--prev"
        @click="navigateLightbox(-1)"
        :aria-label="t('actions.prevImage')"
      >
        <AppIcon name="chevron-left" :size="28" />
      </button>

      <figure class="lightbox__figure">
        <img
          :src="project.screenshots[lightboxIndex]"
          :alt="`${project.title} screenshot ${lightboxIndex + 1}`"
          class="lightbox__image"
        />
        <figcaption class="lightbox__caption">
          {{ content.projects.labels.screenshots }} {{ lightboxIndex + 1 }} / {{ project.screenshots.length }}
        </figcaption>
      </figure>

      <button
        v-if="project.screenshots.length > 1"
        type="button"
        class="lightbox__nav lightbox__nav--next"
        @click="navigateLightbox(1)"
        :aria-label="t('actions.nextImage')"
      >
        <AppIcon name="chevron-right" :size="28" />
      </button>
    </div>
  </Teleport>
</template>