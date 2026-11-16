<script setup>
import { useI18n } from 'vue-i18n'
import { useContent } from '@/composables/useContent'
import { contactChannels, profile } from '@/data/content'
import SectionHeading from './SectionHeading.vue'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
const { content } = useContent()

const mailto = `mailto:${profile.email}`
</script>

<template>
  <section id="contact" class="section section--contact" aria-labelledby="contact-title">
    <div class="container">
      <SectionHeading
        :label="content.sections.contact.label"
        :title="content.sections.contact.title"
        :note="content.sections.contact.note"
        heading-id="contact-title"
      />

      <div class="contact__layout">
        <div v-reveal>
          <p class="contact__lead">{{ content.contact.lead }}</p>
          <p class="label-mono">{{ content.contact.emailLabel }}</p>
          <a class="contact__email" :href="mailto">{{ profile.email }}</a>

          <div class="contact__meta">
            <span class="contact__status">{{ content.contact.status }}</span>
            <span>{{ content.contact.emailNote }}</span>
          </div>
        </div>

        <div v-reveal="100">
          <ul class="contact__channels" :aria-label="t('a11y.contactChannels')">
            <li v-for="channel in contactChannels" :key="channel.id">
              <a
                class="contact-channel"
                :href="channel.href"
                v-bind="channel.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {}"
                :download="channel.download ? '' : undefined"
              >
                <span class="contact-channel__index" aria-hidden="true">
                  {{ channel.index }}
                </span>
                <span>
                  <span class="contact-channel__name">
                    {{ content.contact.channels[channel.id].label }}
                    <span v-if="channel.external" class="sr-only">
                      ({{ t('actions.externalNote') }})
                    </span>
                  </span>
                  <span class="contact-channel__note">
                    {{ content.contact.channels[channel.id].note }}
                  </span>
                </span>
                <AppIcon
                  :name="channel.download ? 'download' : 'arrow-up-right'"
                  :size="16"
                  class="contact-channel__arrow"
                />
              </a>
            </li>
          </ul>

          <p class="contact__cv-note">{{ content.contact.cvNote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
