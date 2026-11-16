<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const reviews = [
  {
    quote: '红烧肉是我在上海吃过最像小时候味道的，米饭都要多添一碗。',
    author: '林女士',
    tag: '周末常客',
  },
  {
    quote: '菜单不长，但每一道都做得认真，清蒸鲈鱼的鲜度很惊艳。',
    author: '陈先生',
    tag: '美食博主',
  },
  {
    quote: '小笼包皮薄汁多，朋友们吃完立刻约了下周再来。',
    author: '王小姐',
    tag: '生日聚餐',
  },
]

const currentIndex = ref(0)
let timer = null

function goTo(index) {
  currentIndex.value = (index + reviews.length) % reviews.length
}

function restartTimer() {
  clearInterval(timer)
  timer = setInterval(() => goTo(currentIndex.value + 1), 6000)
}

function previous() {
  goTo(currentIndex.value - 1)
  restartTimer()
}

function next() {
  goTo(currentIndex.value + 1)
  restartTimer()
}

function jump(index) {
  currentIndex.value = index
  restartTimer()
}

onMounted(restartTimer)

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="section reviews" id="reviews">
    <div class="section-inner">
      <div class="section-heading reveal" v-reveal>
        <div>
          <p class="eyebrow">顾客评价</p>
          <h2>大家坐在一起，吃得开心</h2>
        </div>
        <div class="carousel-controls" aria-label="评价切换">
          <button class="icon-btn" type="button" aria-label="上一条评价" @click="previous">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button class="icon-btn" type="button" aria-label="下一条评价" @click="next">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div class="review-viewport reveal" v-reveal>
        <div
          class="review-track"
          :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }"
        >
          <figure
            v-for="review in reviews"
            :key="review.author"
            class="review-card"
          >
            <div class="review-stars" aria-label="五星评价">
              <span aria-hidden="true">★★★★★</span>
            </div>
            <blockquote>{{ review.quote }}</blockquote>
            <figcaption>
              <strong>{{ review.author }}</strong>
              <span>{{ review.tag }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="review-dots" role="tablist" aria-label="评价页码">
        <button
          v-for="(review, index) in reviews"
          :key="review.author"
          class="review-dot"
          :class="{ 'is-active': index === currentIndex }"
          type="button"
          :aria-label="'第 ' + (index + 1) + ' 条评价'"
          @click="jump(index)"
        ></button>
      </div>
    </div>
  </section>
</template>