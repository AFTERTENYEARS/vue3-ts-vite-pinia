<script lang="ts" setup>
import { onBeforeUnmount, onMounted, reactive } from 'vue'
// import HelloWorld from '../../components/HelloWorld.vue'
import axios from 'axios'

import { useUserStore } from '@/store/user'
// import { useUserStore } from '../../store/user'

const userStore = useUserStore()

const state = reactive({
  count: 0
})

onMounted(() => {
  console.log('onMounted...')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount...')
})

const add = () => {
  userStore.updateName('李四')
}

const sub = () => {
  userStore.updateName('张三')
}

const reset = () => {
  userStore.updateName('张三')
}
</script>

<template>
  <!-- <HelloWorld msg="123" /> -->
  <div>{{userStore.name}}</div>
  <button @click="add">li</button>
  <button @click="sub">zhang</button>
  <button @click="reset">重置</button>
</template>

<style lang="scss" scoped></style>
