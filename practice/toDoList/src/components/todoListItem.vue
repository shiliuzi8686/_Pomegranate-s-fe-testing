<template>
  <h4>{{ props.todoItem.title }}</h4>
  <button style="color: brown" @click="todoStore.removeTodo">remove</button>
</template>

<script setup lang="ts">
import { useTodoListStore } from '@/stores/useTodoListStore';

const props = defineProps<{
  todoItem: Object,
  itemIndex: Number
}>()

const todoStore = useTodoListStore()

</script>

<style></style>
