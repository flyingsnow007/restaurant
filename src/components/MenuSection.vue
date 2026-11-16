<script setup>
import { ref } from 'vue'

const categories = [
  { key: 'all', label: '全部' },
  { key: 'signature', label: '招牌' },
  { key: 'hot', label: '热菜' },
  { key: 'staple', label: '主食' },
  { key: 'dessert', label: '甜点' },
]

const dishes = [
  {
    category: 'signature',
    image: '/assets/images/dish-red-braised-pork.jpg',
    alt: '酱色油亮的招牌红烧肉',
    tag: '每日限量',
    name: '招牌红烧肉',
    price: 68,
    desc: '慢火三小时，酱香入骨，肥而不腻。',
  },
  {
    category: 'signature',
    image: '/assets/images/dish-steamed-fish.jpg',
    alt: '山泉清蒸鲈鱼',
    tag: '招牌',
    name: '山泉清蒸鲈鱼',
    price: 88,
    desc: '每日鲜活到店，山泉水清蒸，鲜甜回甘。',
  },
  {
    category: 'hot',
    image: '/assets/images/dish-kungpao.jpg',
    alt: '宫保鸡丁',
    tag: '微辣',
    name: '宫保鸡丁',
    price: 46,
    desc: '糊辣荔枝口，花生酥脆，鸡肉滑嫩。',
  },
  {
    category: 'hot',
    image: '/assets/images/dish-dry-pot-cauliflower.jpg',
    alt: '干锅花菜',
    tag: '镬气',
    name: '干锅花菜',
    price: 36,
    desc: '炭火快炒，微辣爽脆，米饭杀手。',
  },
  {
    category: 'staple',
    image: '/assets/images/dish-scallion-noodles.jpg',
    alt: '手工葱油拌面',
    tag: '现擀',
    name: '手工葱油拌面',
    price: 22,
    desc: '面条现擀，葱油喷香，一碗见底。',
  },
  {
    category: 'staple',
    image: '/assets/images/dish-xiaolongbao.jpg',
    alt: '蟹黄小笼包',
    tag: '现包',
    name: '蟹黄小笼包',
    price: 32,
    desc: '皮薄汁足，蟹黄入馅，一口爆鲜。',
  },
  {
    category: 'dessert',
    image: '/assets/images/dish-fermented-rice-dumplings.jpg',
    alt: '桂花酒酿圆子',
    tag: '温热',
    name: '桂花酒酿圆子',
    price: 18,
    desc: '桂香清甜，酒酿温润，圆子软糯。',
  },
  {
    category: 'dessert',
    image: '/assets/images/dish-red-bean-soup.jpg',
    alt: '陈皮红豆沙',
    tag: '慢熬',
    name: '陈皮红豆沙',
    price: 16,
    desc: '慢熬豆沙，陈皮提香，微甜不腻。',
  },
]

const activeFilter = ref('all')

function isVisible(dish) {
  return activeFilter.value === 'all' || dish.category === activeFilter.value
}

function selectFilter(key) {
  activeFilter.value = key
}
</script>

<template>
  <section class="section menu" id="menu">
    <div class="section-inner">
      <div class="section-heading reveal" v-reveal>
        <div>
          <p class="eyebrow">当季菜单</p>
          <h2>今天想好好吃一顿</h2>
        </div>
        <p>四类招牌，简单直接。点击分类快速挑选今晚的菜。</p>
      </div>

      <div class="menu-tabs reveal" v-reveal role="tablist" aria-label="菜单分类">
        <button
          v-for="cat in categories"
          :key="cat.key"
          class="menu-tab"
          :class="{ 'is-active': activeFilter === cat.key }"
          type="button"
          role="tab"
          :aria-selected="String(activeFilter === cat.key)"
          @click="selectFilter(cat.key)"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="menu-grid">
        <article
          v-for="dish in dishes"
          :key="dish.name"
          class="dish-card reveal"
          v-reveal
          :class="{ 'is-hidden': !isVisible(dish) }"
        >
          <div class="dish-image">
            <img :src="dish.image" :alt="dish.alt" loading="lazy" />
            <span class="dish-tag">{{ dish.tag }}</span>
          </div>
          <div class="dish-body">
            <div class="dish-title">
              <h3>{{ dish.name }}</h3>
              <strong>¥{{ dish.price }}</strong>
            </div>
            <p>{{ dish.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>