<template>
  <div class>
    <h3>Todo List</h3>
    <ul>
      {{ todoStore.todoList }}
      <li v-for="(todo,index) in todoStore.todoList" :key="todo.title">
        <todoListItem :todoItem="todo" :itemIndex="index"/>
      </li>
      <newItem />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useTodoListStore } from '@/stores/useTodoListStore';

import TodoListItem from '../components/todoListItem.vue'
import NewItem from '../components/newItem.vue'

const todoStore = useTodoListStore()


</script>

<style></style>
