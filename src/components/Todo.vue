<template>
    <div class='todo'>
      <div class='todo__top'>
        <div>Date {{ date }}</div>
      </div>
      <div class='todo__bottom'>
        <div>Task {{ title }}</div>
      </div>
      <svg @click='deleteTodo' class='todo__delete' xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="m10.625 30.083-.708-.708L19.292 20l-9.375-9.375.708-.708L20 19.292l9.375-9.375.708.708L20.708 20l9.375 9.375-.708.708L20 20.708Z"/></svg>
      <svg @click='toggleFavorite' :fill='favorite.fill' :stroke='favorite.stroke' class='todo__favorite' xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.6 38.6 2.2-9.6-7.45-6.45 9.85-.9L24 12.6l3.9 9.05 9.75.9L30.2 29l2.3 9.6-8.5-5.1Z"/></svg>
    </div>
</template>

<script lang='ts' setup>
import { defineProps, computed } from 'vue'
import { useTodosStore } from '@/store/todos'

const todos = useTodosStore()

const props = defineProps({
  id: {
    required: true,
    type: Number
  },
  title: String,
  date: String,
  favorite: Boolean
})

function deleteTodo () {
  todos.DELETE_TODO(props.id)
}

function toggleFavorite () {
  todos.TOGGLE_FAVORITE(props.id)
}

const favorite = computed(() => {
  if (props.favorite) {
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
.todo
  min-width: 400px
  min-height: 120px
  border-radius: 4px
  border: 1px solid
  padding: 20px
  display: flex
  flex-direction: column
  position: relative
  gap: 30px
  &__top
    display: flex
    justify-content: space-between
    padding-left: 40px
  &__favorite
    position: absolute
    top: 3px
    left: 8px
  &__delete
    position: absolute
    top: 10px
    right: 10px
</style>
