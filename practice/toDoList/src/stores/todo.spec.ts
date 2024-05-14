import { describe, it, beforeEach, expect } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useTodoListStore } from './useTodoListStore.js';

describe('todo', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })
  it('should add a todo', () => {
    const todoStore = useTodoListStore();
    // test
    const todo = { title: 'test1' };
    todoStore.addTodo(todo);
    console.log('todoStore.todoList', todoStore.todoList);
    
    expect(todoStore.todoList[0].title).toBe('test1');
  })
  it('should remove a todo', () => {
    const todoStore = useTodoListStore();
    // test
    const todo = { title: 'test1' };
    todoStore.addTodo(todo);
    todoStore.removeTodo(todo);
    expect(todoStore.todoList.length).toBe(0);
  })

});