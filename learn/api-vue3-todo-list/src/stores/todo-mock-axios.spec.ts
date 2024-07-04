import { describe, it, vi, expect, test } from "vitest";
import { useTodoStore } from "./todo";
import { setActivePinia, createPinia } from "pinia";
import axios from "axios";

vi.mock('axios')

/**
 * addTodo 传参
 * 创建的 todo 是否在 todos 中
 */

// 没有验证addTodo 传参❌
test("add todo", async () => {
  // 准备测试数据
  vi.mocked(axios.post).mockImplementationOnce((params, params2) => {
    console.log('params', params);
    console.log('params2', params2);
    
    return Promise.resolve({
      data: { data: {todo: {id: 1, title: 'test'}}, state: 1},
    })
  })

  setActivePinia(createPinia());

  // 测试逻辑
  const useTodo = useTodoStore();
  const addTodo = await useTodo.addTodo('test');
  expect(useTodo.todos[0].title).toBe(addTodo?.title);
})

// 验证addTodo 传参 ✅
test("add todo", async () => {
  // 准备测试数据
  vi.mocked(axios.post).mockImplementationOnce((path, { title }: any) => {
    
    return Promise.resolve({
      data: { data: {todo: {id: 1, title }}, state: 1},
    })
  })
  const title = 'test';
  setActivePinia(createPinia());

  // 测试逻辑
  const useTodo = useTodoStore();
  await useTodo.addTodo(title);
  // 验证
  expect(useTodo.todos[0].title).toBe(title);
})


/**
 * removeTodo 传参
 * 删除的 todo 是否在 todos 中
 */
test("remove todo", async () => {
  vi.mocked(axios.post).mockImplementationOnce((path, { title }: any) => {
    
    return Promise.resolve({
      data: { data: {todo: {id: 1, title }}, state: 1},
    })
  })
  vi.mocked(axios.post).mockImplementationOnce((path, { id }: any) => {
    return Promise.resolve({
      data: { data: {id}, state: 1},
    })
  })

  setActivePinia(createPinia());

  const useTodo = useTodoStore();
  await useTodo.addTodo('test');
  await useTodo.removeTodo(1);
  expect(useTodo.todos.length).toBe(0);
})

