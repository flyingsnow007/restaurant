// v-count: 元素进入视口后，从 0 以 cubic-out 缓动滚动到目标值（写入 data-count）
let observer = null

function animateCount(el, target) {
  const duration = 900
  const start = performance.now()

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(target * eased).toLocaleString('zh-CN')
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            observer.unobserve(el)
            animateCount(el, Number(el.getAttribute('data-count')))
          }
        })
      },
      { threshold: 0.6 }
    )
  }
  return observer
}

export const vCount = {
  mounted(el, binding) {
    el.setAttribute('data-count', String(binding.value))
    getObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}