<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, reactive } from 'vue'

export default defineComponent({
  setup() {
    let state = reactive({
      count: 0
    })

    onMounted(() => {
      console.log('onMounted...')
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

    return {
      state,
      add,
      sub,
      reset
    }
  }
})
</script>

<template>
  <div>{{ state.count }}</div>
  <button @click="add">+</button>
  <button @click="sub">-</button>
  <button @click="reset">重置</button>
</template>
