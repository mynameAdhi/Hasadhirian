let queue = []
let frame = 0

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function observe(el) {
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
}

function processQueue() {
  frame = 0
  const pending = queue.filter((el) => el.isConnected)
  queue = []

  const belowFold = []

  // Read every rectangle before writing classes so the browser needs one layout.
  for (const el of pending) {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) continue
    belowFold.push(el)
  }

  for (const el of belowFold) {
    el.classList.add('reveal')
    observe(el)
  }
}

export const reveal = {
  mounted(el, binding) {
    const delay = Number(binding.value) || 0
    if (delay > 0) el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (reducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal', 'is-visible')
      return
    }

    queue.push(el)
    if (!frame) frame = window.requestAnimationFrame(processQueue)
  },

  unmounted(el) {
    queue = queue.filter((queued) => queued !== el)

    if (el._revealObserver) {
      el._revealObserver.disconnect()
      delete el._revealObserver
    }
  },
}
