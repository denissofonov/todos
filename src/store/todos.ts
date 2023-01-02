import { defineStore } from 'pinia'
import { rootTodosState } from '@/types/store'
import { todo, id } from '@/types/todo'

export const useTodosStore = defineStore('todos', {
  state: (): rootTodosState => ({
    todos: [
    ]
  }),
  actions: {
    ADD_TODO (todo: todo) {
      this.todos.push(todo)
    },
    DELETE_TODO (id: id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      debugger
    },
    TOGGLE_FAVORITE (id: id) {
      this.todos.forEach((i) => {
        if (i.id === id) {
          i.favorite = !i.favorite
        } else {
          return i
        }
      })
    }
  },
  getters: {
  }
})
