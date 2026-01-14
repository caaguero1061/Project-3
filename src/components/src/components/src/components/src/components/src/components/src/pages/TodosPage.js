import React from "react";
import TodoForm from "../components/TodoForm";
import TodoFilters from "../components/TodoFilters";
import TodoList from "../components/TodoList";

export default function TodosPage({
  todos,
  allTodosCount,
  filter,
  setFilter,
  addTodo,
  toggleTodo,
  removeTodo,
}) {
  return (
    <section className="card">
      <div className="card__header">
        <h1 className="title">Todos</h1>
        <p className="subtitle">
          Create, complete, delete, and filter tasks. Total in state:{" "}
          <span className="pill">{allTodosCount}</span>
        </p>
      </div>

      <div className="two-col">
        <div className="panel">
          <h2 className="panel__title">New Todo</h2>
          <TodoForm addTodo={addTodo} />
          <div className="hint">
            Tip: Add 2–3 items, mark one complete, then filter.
          </div>
        </div>

        <div className="panel">
          <div className="panel__row">
            <h2 className="panel__title">Your List</h2>
            <TodoFilters filter={filter} setFilter={setFilter} />
          </div>

          <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
      </div>
    </section>
  );
}
