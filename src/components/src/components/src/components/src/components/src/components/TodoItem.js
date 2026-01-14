import React from "react";

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li className="todoitem">
      <label className="todoitem__left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? "todoitem__text done" : "todoitem__text"}>
          {todo.text}
        </span>
      </label>

      <button
        className="button button--danger"
        type="button"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
