import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, removeTodo }) {
  if (todos.length === 0) {
    return <div className="empty">No todos match this filter.</div>;
  }

  return (
    <ul className="todolist">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}
