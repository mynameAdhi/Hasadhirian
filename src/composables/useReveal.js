function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const reveal = {
  mounted(el, binding) {
    const delay = Number(binding.value) || 0
    if (delay > 0) el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (reducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal', 'is-visible')
      return
    }

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('reveal', 'is-visible')
      return
    }

    el.classList.add('reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          el.classList.add('is-visible')
          observer.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    observer.observe(el)
    el._revealObserver = observer
  },

  unmounted(el) {
    if (el._revealObserver) {
      el._revealObserver.disconnect()
      delete el._revealObserver
    }
  },
}
