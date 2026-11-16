<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const navOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function toggleNav() {
  navOpen.value = !navOpen.value
}

function handleNavClick(event) {
  if (event.target.closest('a')) navOpen.value = false
}

watch(navOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <header class="site-header" id="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="header-inner">
      <a class="brand" href="#top" aria-label="山海食堂 回到首页">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="img">
            <path d="M5 9h22M5 16h22M5 23h14" />
            <circle cx="24" cy="23" r="3" />
          </svg>
        </span>
        <span class="brand-text">
          <strong>山海食堂</strong>
          <small>SHANHAI KITCHEN</small>
        </span>
      </a>

      <nav
        class="site-nav" id="site-nav"
        :class="{ 'is-open': navOpen }"
        aria-label="主导航"
        @click="handleNavClick"
      >
        <a href="#about">关于我们</a>
        <a href="#menu">菜单</a>
        <a href="#story">主厨故事</a>
        <a href="#reviews">顾客评价</a>
        <a href="#contact">到店信息</a>
      </nav>

      <div class="header-actions">
        <a class="btn btn-primary btn-small" href="#reservation">预订座位</a>
        <button
          class="icon-btn nav-toggle"
          type="button"
          :aria-label="navOpen ? '关闭菜单' : '打开菜单'"
          :aria-expanded="String(navOpen)"
          aria-controls="site-nav"
          @click="toggleNav"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>