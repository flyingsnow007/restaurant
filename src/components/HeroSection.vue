<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroBg = ref(null)

function onScroll() {
  if (heroBg.value && window.scrollY < window.innerHeight) {
    heroBg.value.style.transform = 'translateY(' + window.scrollY * -0.06 + 'px)'
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <section class="hero">
    <img
      ref="heroBg"
      class="hero-bg"
      src="/assets/images/hero.jpg"
      alt="山海食堂温暖明亮的餐厅内景"
      fetchpriority="high"
    />
    <div class="hero-overlay" aria-hidden="true"></div>
    <div class="hero-content">
      <p class="eyebrow">中式小馆 · 上海愚园路</p>
      <h1>山海食堂</h1>
      <p class="hero-tagline">一蔬一饭，山海相逢</p>
      <p class="hero-copy">
        用当季食材和慢火细作，把记忆里的家常味道，端到今天的餐桌上。
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#menu">查看菜单</a>
        <a class="btn btn-ghost" href="#reservation">预订座位</a>
      </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
      <span>向下浏览</span>
      <svg viewBox="0 0 24 24">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  </section>
</template>