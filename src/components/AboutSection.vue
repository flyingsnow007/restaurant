<script setup>
const countStats = [
  { value: 28, label: '道招牌菜' },
  { value: 120000, label: '位回头客' },
]
</script>

<template>
  <section class="section about" id="about">
    <div class="section-inner about-grid">
      <div class="about-media reveal" v-reveal>
        <img
          src="/assets/images/about.jpg"
          alt="主厨在明火灶台前翻炒"
          loading="lazy"
        />
        <div class="about-badge">
          <strong>12 年</strong>
          <span>深耕家常风味</span>
        </div>
      </div>
      <div class="about-copy">
        <p class="eyebrow">关于山海</p>
        <h2>认真吃饭，是件重要的小事</h2>
        <p class="lead">
          山海食堂从一间十张桌的小铺子开始，坚持每天去市场挑当季食材，用最笨的办法慢慢做菜。
        </p>
        <p>
          菜单不长，因为每一道都值得被认真对待。葱要现切，汤要现吊，肉要炖够时间。我们相信，食物会记得这份用心。
        </p>
        <ul class="about-points">
          <li>当日鲜采，卖完即止</li>
          <li>无预制菜，无半成品</li>
          <li>四季菜单，跟着节气走</li>
        </ul>
        <div class="about-stats">
          <div v-for="stat in countStats" :key="stat.label">
            <strong v-count="stat.value">0</strong>
            <span>{{ stat.label }}</span>
          </div>
          <div>
            <strong>4.9</strong>
            <span>顾客评分</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>