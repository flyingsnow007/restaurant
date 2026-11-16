import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import { vReveal } from './directives/reveal'
import { vCount } from './directives/count'

const app = createApp(App)
app.directive('reveal', vReveal)
app.directive('count', vCount)
app.mount('#app')