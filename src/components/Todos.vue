<template>
  <div class='todos'>
    <div v-if='todos[0]' class='todos__filter'>
      <div @click='favorited=false' :class='{active: !favorited}'>All</div>
      <div @click='favorited=true' :class='{active: favorited}'>Favorited</div>
    </div>
    <Todo
      v-for='todo in todos'
      :key='todo.id'
      :id='todo.id'
      :title='todo.title'
      :date='todo.date'
      :favorite='todo.favorite'
    />
  </div>
</template>

<script lang='ts' setup>
import Todo from '@/components/Todo.vue'
import { useTodosStore } from '@/store/todos'
import { ref, computed } from 'vue'

const favorited = ref(false)
const todos = computed(() => {
  if (!favorited.value) {
    return useTodosStore().todos.reverse()
  } else {
    const todos = useTodosStore().todos.filter((i) => i.favorite)
    return todos.reverse()
  }
})

</script>

<style lang='sass' scoped>
.todos
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 20px
  width: 400px
  padding: 20px 40px 0px 40px
  margin: 0 auto
  &__filter
    display: flex
    gap: 10px
.active
  text-decoration: underline
</style>
