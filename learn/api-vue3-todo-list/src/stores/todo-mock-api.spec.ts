import { describe, it, vi, expect, test } from "vitest";
import { useTodoStore } from "./todo";
import { setActivePinia, createPinia } from "pinia";
import axios from "axios";
import { fetchAddTodo, fetchRemoveTodo, fetchTodoList } from "../api";

vi.mock("../api");


test("add todo", async () => {
  vi.mocked(fetchAddTodo).mockImplementationOnce((title) => {
    return Promise.resolve({
      data: { todo: { id: 1, title } }, state: 1 
    });
  });

  setActivePinia(createPinia());

  const useTodo = useTodoStore();
  const title = "test";
  await useTodo.addTodo(title);
  expect(useTodo.todos[0].title).toBe(title);
})

test("remove todo", async () => {
  vi.mocked(fetchAddTodo).mockImplementationOnce((title) => {
    return Promise.resolve({
      data: { todo: { id: 1, title } }, state: 1 
    });
  });
  vi.mocked(fetchRemoveTodo).mockImplementationOnce((id) => {
    return Promise.resolve({
      data: { id }, state: 1
    });
  });

  setActivePinia(createPinia());

  const useTodo = useTodoStore();
  const title = "test";
  await useTodo.addTodo(title);
  await useTodo.removeTodo(1);
  expect(useTodo.todos.length).toBe(0);
});

