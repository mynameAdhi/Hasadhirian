import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useScrollProgress() {
  const progress = ref(0)
  let frame = 0

  function update() {
    frame = 0
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
  }

  function requestUpdate() {
    if (frame) return
    frame = window.requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })
  })

  onBeforeUnmount(() => {
    if (frame) window.cancelAnimationFrame(frame)
    window.removeEventListener('scroll', requestUpdate)
    window.removeEventListener('resize', requestUpdate)
  })

  return { progress }
}
