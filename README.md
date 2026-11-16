# 山海食堂（Shanhai Kitchen）— Vue 3 版

原静态单页（HTML/CSS/原生 JS）已迁移为 Vue 3 + Vite 组件化工程。页面外观与文案与原版 1:1 保持一致。

## 技术栈

- Vue 3（`<script setup>` + 组合式 API，JavaScript）
- Vite
- 全局样式：`src/styles.css`（原 `styles.css` 原样保留，未拆分 scoped）
- 无路由，仍为带锚点的单页；图片静态托管于 `public/assets/images/`

## 常用命令

```bash
npm install   # 安装依赖
npm run dev   # 开发服务器
npm run build # 生产构建，输出到 dist/
npm run preview # 预览构建产物
```

## 目录结构

```
index.html                 # 入口壳（挂载 #app）
src/
  main.js                  # 应用入口：注册全局指令、导入全局样式
  App.vue                  # 页面组合 + 全局 Toast
  styles.css               # 全局样式（原样保留）
  components/              # 按区块拆分的 SFC
  directives/
    reveal.js              # v-reveal：滚动进入视口显现
    count.js               # v-count：数字滚动动画
public/assets/images/      # 图片资源
legacy/                    # 迁移前的原始 HTML/CSS/JS 备份
```

## 交互说明

- 滚动头部 `is-scrolled`、Hero 视差、移动端菜单、滚动显现、菜单分类筛选、评价轮播、预订表单校验 + Toast、数字滚动、页脚年份均与原始行为一致。