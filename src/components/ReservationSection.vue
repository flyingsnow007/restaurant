<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['toast'])

const form = reactive({
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  note: '',
})

const fieldErrors = reactive({
  name: false,
  phone: false,
  date: false,
  time: false,
  guests: false,
})

function clearError(field) {
  fieldErrors[field] = false
}

function isValid(field) {
  const value = form[field].trim()
  if (field === 'phone') return /^[0-9+\-\s]{6,20}$/.test(value)
  return value !== ''
}

function validateField(field) {
  fieldErrors[field] = !isValid(field)
  return fieldErrors[field]
}

function handleSubmit() {
  const required = ['name', 'phone', 'date', 'time', 'guests']
  const hasError = required.some((field) => validateField(field))

  if (hasError) {
    emit('toast', '请补全必填信息后再提交。')
    return
  }

  form.name = ''
  form.phone = ''
  form.date = ''
  form.time = ''
  form.guests = ''
  form.note = ''
  emit('toast', '预订信息已收到，我们会尽快电话与您确认。')
}
</script>

<template>
  <section class="section reservation" id="reservation">
    <div class="section-inner reservation-grid">
      <div class="reservation-copy reveal" v-reveal>
        <p class="eyebrow">预订座位</p>
        <h2>今晚，来吃口热乎的</h2>
        <p class="lead">
          散台和包间均可预订。晚餐时段建议提前一天，周末请尽早预约。
        </p>
        <ul class="reservation-notes">
          <li>
            <strong>午市</strong>
            <span>11:00 - 14:00</span>
          </li>
          <li>
            <strong>晚市</strong>
            <span>17:00 - 22:00</span>
          </li>
          <li>
            <strong>包间</strong>
            <span>6 - 12 人，需提前一天</span>
          </li>
        </ul>
        <p class="reservation-phone">
          电话预订
          <a href="tel:02188886666">021-8888 6666</a>
        </p>
      </div>

      <form
        class="reservation-form reveal"
        v-reveal
        novalidate
        @submit.prevent="handleSubmit"
      >
        <div class="form-row">
          <label class="field" :class="{ 'has-error': fieldErrors.name }">
            <span>姓名</span>
            <input
              v-model="form.name"
              type="text"
              name="name"
              placeholder="怎么称呼您"
              required
              @input="clearError('name')"
              @change="validateField('name')"
            />
          </label>
          <label class="field" :class="{ 'has-error': fieldErrors.phone }">
            <span>手机号</span>
            <input
              v-model="form.phone"
              type="tel"
              name="phone"
              placeholder="用于确认预订"
              pattern="[0-9+\-\s]{6,20}"
              required
              @input="clearError('phone')"
              @change="validateField('phone')"
            />
          </label>
        </div>
        <div class="form-row">
          <label class="field" :class="{ 'has-error': fieldErrors.date }">
            <span>日期</span>
            <input
              v-model="form.date"
              type="date"
              name="date"
              required
              @input="clearError('date')"
              @change="validateField('date')"
            />
          </label>
          <label class="field" :class="{ 'has-error': fieldErrors.time }">
            <span>时段</span>
            <select
              v-model="form.time"
              name="time"
              required
              @change="clearError('time'); validateField('time')"
            >
              <option value="">请选择</option>
              <option value="lunch">午市 11:00 - 14:00</option>
              <option value="dinner">晚市 17:00 - 22:00</option>
            </select>
          </label>
        </div>
        <label class="field" :class="{ 'has-error': fieldErrors.guests }">
          <span>人数</span>
          <select
            v-model="form.guests"
            name="guests"
            required
            @change="clearError('guests'); validateField('guests')"
          >
            <option value="">请选择人数</option>
            <option value="1">1 位</option>
            <option value="2">2 位</option>
            <option value="3">3 位</option>
            <option value="4">4 位</option>
            <option value="5">5 位</option>
            <option value="6">6 位及以上</option>
          </select>
        </label>
        <label class="field">
          <span>备注</span>
          <textarea
            v-model="form.note"
            name="note"
            rows="3"
            placeholder="忌口、生日、靠窗等需求（选填）"
          ></textarea>
        </label>
        <button class="btn btn-primary btn-block" type="submit">提交预订</button>
        <p class="form-tip">提交后我们会尽快电话与您确认。</p>
      </form>
    </div>
  </section>
</template>