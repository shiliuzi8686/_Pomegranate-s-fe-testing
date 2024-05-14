<template>
  <input type="text" v-model="newItem.title">
  <button @click="toAdd">add</button>
</template>
  
<script setup lang='ts'>
import { useTodoListStore } from '@/stores/useTodoListStore';

import { ref } from 'vue'

const todoStore = useTodoListStore()

const newItem = ref({title: ''})

function toAdd() {
  todoStore.addTodo(newItem.value)
  newItem.value = {title: ''}
}
</script>
  
<style>
  
</style>