<template>
  <section class="section story" id="story">
    <div class="section-inner story-grid">
      <div class="story-copy reveal" v-reveal>
        <p class="eyebrow">主厨故事</p>
        <h2>灶台上的三十年</h2>
        <p class="lead">
          主厨老周从十六岁起站灶台，跑过小馆、酒楼，最后把店开回了家门口。
        </p>
        <p>
          他不追流行，只记着小时候祖母常说的一句话：菜要等人，不要人等菜。店里每一道菜都按自己的节奏来，该炖的绝不催，该爆的绝不拖。
        </p>
        <blockquote>
          “好的食材不需要复杂，火候和时间会说话。”
          <cite>周建国 · 主厨</cite>
        </blockquote>
      </div>
      <div class="story-media reveal" v-reveal>
        <img
          src="/assets/images/hero.jpg"
          alt="山海食堂用餐区一景"
          loading="lazy"
        />
        <img
          class="story-media-small"
          src="/assets/images/dish-red-braised-pork.jpg"
          alt="刚出锅的招牌红烧肉"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>