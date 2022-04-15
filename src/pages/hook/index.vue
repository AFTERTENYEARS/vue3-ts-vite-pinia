<script lang="ts" setup>
import useUser from './useUser'
import useJob from './useJob'

const { state: userState, func: userFunc } = useUser()
const { state: jobState, func: jobFunc } = useJob()
</script>

<template>
  <div>name:{{userState.name}}<button @click="userFunc.updateName">更改</button></div>
  <div>job:{{jobState.job}}<button @click="jobFunc.updateJob">更改</button></div>
</template>
