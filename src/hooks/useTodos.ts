import { useState, useEffect } from "react";
import { Todo } from "../types/todo";

export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
          return JSON.parse(savedTodos);
        }
        return [];
      });
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    
      
    
      function setTodoCompleted(id: number, completed: boolean) {
        setTodos(todos => todos.map(todo => todo.id === id ? {...todo, completed} : todo));
      }
    
      function addTodo(title: string) {
        setTodos(todos => [{id: Date.now(), title, completed: false}, ...todos]);
      }
    
      function deleteTodo(id: number) {
        alert(`Are you sure you want to delete todo?`);
        setTodos(todos => todos.filter(todo => todo.id !== id));
      }
    
      function deleteAllCompleted() {
        setTodos(todos => todos.filter(todo => !todo.completed));
      }

      return {todos, setTodoCompleted, addTodo, deleteTodo, deleteAllCompleted};
}