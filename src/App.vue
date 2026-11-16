<script setup>
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import QuickInfo from './components/QuickInfo.vue'
import AboutSection from './components/AboutSection.vue'
import MenuSection from './components/MenuSection.vue'
import StorySection from './components/StorySection.vue'
import GallerySection from './components/GallerySection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import ReservationSection from './components/ReservationSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const toastMessage = ref('')
const toastVisible = ref(false)
let toastTimer = null

function showToast(message) {
  toastMessage.value = message
  toastVisible.value = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastVisible.value = false
  }, 3600)
}
</script>

<template>
  <SiteHeader />

  <main id="top">
    <HeroSection />
    <QuickInfo />
    <AboutSection />
    <MenuSection />
    <StorySection />
    <GallerySection />
    <ReviewsSection />
    <ReservationSection @toast="showToast" />
    <ContactSection />
  </main>

  <SiteFooter />

  <div
    class="toast"
    role="status"
    aria-live="polite"
    :class="{ 'is-visible': toastVisible }"
  >
    {{ toastMessage }}
  </div>
</template>