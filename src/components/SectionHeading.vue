<script setup>
defineProps({
  label: { type: String, required: true },
  title: { type: String, required: true },
  note: { type: String, default: '' },
  headingId: { type: String, required: true },
})
</script>

<template>
  <div class="section-heading">
    <p class="section-heading__label">{{ label }}</p>
    <div>
      <h2 :id="headingId" v-reveal class="section-heading__title">{{ title }}</h2>
      <p v-if="note" v-reveal="80" class="section-heading__note">{{ note }}</p>
    </div>
  </div>
</template>
