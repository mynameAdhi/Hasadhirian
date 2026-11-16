<script setup>
import { useScrollProgress } from '@/composables/useScrollProgress'

const { progress } = useScrollProgress()
</script>

<template>
  <div class="scroll-progress" aria-hidden="true">
    <span class="scroll-progress__fill" :style="{ transform: `scaleX(${progress})` }"></span>
  </div>
</template>
