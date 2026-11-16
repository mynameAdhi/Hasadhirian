import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(ids) {
  const activeSection = ref('')
  let frame = 0

  function update() {
    frame = 0
    const header = document.querySelector('.site-header')
    const line = (header ? header.offsetHeight : 72) + 48
    let current = ''

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= line) current = id
    })

    activeSection.value = current
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

  return { activeSection }
}
