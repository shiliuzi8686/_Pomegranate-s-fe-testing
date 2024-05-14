import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref([])
  const addTodo = (todo) => todoList.value.push(todo)
  const removeTodo = (todo) => {
    todoList.value.findIndex((t, i) => {
      if (t.title === todo.title) {
        todoList.value.splice(i, 1)
        return true
      }
    })
    return todo
  }

  return { todoList, addTodo, removeTodo }
})
