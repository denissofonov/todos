<template>
  <Header/>
  <CreateForm/>
  <Todos/>
</template>

<script lang='ts' setup>
import Header from '@/components/Header.vue'
import CreateForm from '@/components/CreateForm.vue'
import Todos from '@/components/Todos.vue'
</script>

<style lang='sass' scoped>
@import '/src/assets/styles/reset.css'
@font-face
  font-family: Chakra Petch
  src: url(@/assets/fonts/ChakraPetch-Light.ttf)
*
  font-family: Chakra Petch
</style>
