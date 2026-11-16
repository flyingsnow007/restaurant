<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="brand" href="#top">
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
        <p>一蔬一饭，山海相逢。</p>
      </div>
      <div class="footer-nav">
        <a href="#about">关于我们</a>
        <a href="#menu">菜单</a>
        <a href="#story">主厨故事</a>
        <a href="#reservation">预订座位</a>
      </div>
      <div class="footer-meta">
        <p>上海市静安区愚园路 88 号</p>
        <p>021-8888 6666</p>
        <p>&copy; {{ year }} 山海食堂</p>
      </div>
    </div>
    <div class="footer-credits">
      <p>
        菜品与餐厅图片来自 Wikimedia Commons（N509FZ、Infrogmation of New Orleans、François Nguyen、The Pocket、Apeach316、Tbatb、Robigasp、stu_spivack、HanWei's EXP），遵循 CC BY / CC BY-SA 许可。
      </p>
    </div>
  </footer>
</template>