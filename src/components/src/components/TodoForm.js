import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form className="todoform" onSubmit={onSubmit}>
      <label className="label" htmlFor="todoText">Task</label>
      <div className="todoform__row">
        <input
          id="todoText"
          className="input"
          type="text"
          placeholder="e.g., Study React Router"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="button" type="submit">Add</button>
      </div>
    </form>
  );
}
