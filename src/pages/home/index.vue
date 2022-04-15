<script lang="ts" setup>
import { onBeforeUnmount, onMounted, reactive } from 'vue'

const state = reactive({
  count: 0
})

onMounted(() => {
  console.log('onMounted...')
  
  // 获取环境变量
  console.log(import.meta.env)
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount...')
})

const add = () => {
  state.count++
}

const sub = () => {
  state.count--
}

const reset = () => {
  state.count = 0
}
</script>

<template>
  <div>{{ state.count }}</div>
  <button @click="add">+</button>
  <button @click="sub">-</button>
  <button @click="reset">重置</button>
</template>

<style lang="scss" scoped></style>
