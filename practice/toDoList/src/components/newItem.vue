<template>
  <input type="text" :value="newItem.title">
  <button @click="todoStore.addTodo(newItem)">add</button>
</template>
  
<script setup lang='ts'>
import { useTodoListStore } from '@/stores/useTodoListStore';

import { ref } from 'vue'

const todoStore = useTodoListStore()

const newItem = ref({title: ''})
</script>
  
<style>
  
</style>