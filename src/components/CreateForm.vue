<template>
    <div class='create-form'>
        <input v-model='input' class='create-form__input' autofocus placeholder='Add a new task'/>
        <svg v-if='input' @click='addTodo' class='create-form__add' xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="m20 31.583-.667-.666L29.75 20.458H8.417V19.5H29.75L19.333 9.083 20 8.375 31.625 20Z"/></svg>
        <svg v-if='input' @click='isFavorite=!isFavorite' :fill='favorite.fill' :stroke='favorite.stroke' class='create-form__favorite' xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.6 38.6 2.2-9.6-7.45-6.45 9.85-.9L24 12.6l3.9 9.05 9.75.9L30.2 29l2.3 9.6-8.5-5.1Z"/></svg>
    </div>
</template>

<script lang='ts' setup>
import { ref, computed } from 'vue'
import { useTodosStore } from '@/store/todos'
const input = ref('')
const isFavorite = ref(false)

const todosStore = useTodosStore()

function addTodo () {
  todosStore.ADD_TODO({
    id: Date.now(),
    title: input.value,
    date: new Date().toLocaleString(),
    favorite: isFavorite.value
  })
  input.value = ''
  isFavorite.value = false
}

const favorite = computed(() => {
  if (isFavorite.value) {
    return {
      fill: 'black',
      stroke: 'black'
    }
  } else {
    return {
      fill: 'white',
      stroke: 'black'
    }
  }
})
</script>

<style lang='sass' scoped>
.create-form
  position: relative
  width: 400px
  height: 60px
  margin: 0 auto
  border: 1px solid
  border-radius: 4px
  &__input
    font-size: 16px
    width: 100%
    height: 100%
    resize: none
    padding: 10px 46px 10px 16px
  &__add
    position: absolute
    right: 10px
    top: 10px
  &__favorite
    position: absolute
    right: 44px
    top: 4px
</style>
