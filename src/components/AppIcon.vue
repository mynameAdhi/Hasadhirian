<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="square"
    stroke-linejoin="miter"
    aria-hidden="true"
    focusable="false"
  >
    <template v-if="name === 'sun'">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.22 4.22l1.77 1.77M18.01 18.01l1.77 1.77M2 12h2.5M19.5 12H22M4.22 19.78l1.77-1.77M18.01 5.99l1.77-1.77" />
    </template>
    <template v-else-if="name === 'moon'">
      <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1Z" />
    </template>
    <template v-else-if="name === 'menu'">
      <path d="M3 7h18M3 12h18M3 17h12" />
    </template>
    <template v-else-if="name === 'close'">
      <path d="M5 5l14 14M19 5L5 19" />
    </template>
    <template v-else-if="name === 'arrow-up-right'">
      <path d="M7 17L17 7M8 7h9v9" />
    </template>
    <template v-else-if="name === 'arrow-up'">
      <path d="M12 20V4M6 10l6-6 6 6" />
    </template>
    <template v-else-if="name === 'arrow-down'">
      <path d="M12 4v16M6 14l6 6 6-6" />
    </template>
    <template v-else-if="name === 'download'">
      <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />
    </template>
  </svg>
</template>
