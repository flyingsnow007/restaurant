// v-reveal: 元素挂载后由共享 IntersectionObserver 观察，进入视口时添加 .is-visible
// （模板中元素需保留静态的 .reveal 类，隐藏态由全局 styles.css 控制）
let observer = null

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
  }
  return observer
}

export const vReveal = {
  mounted(el) {
    getObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}