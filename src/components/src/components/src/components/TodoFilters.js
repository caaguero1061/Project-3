import React from "react";

export default function TodoFilters({ filter, setFilter }) {
  return (
    <div className="filters" role="group" aria-label="Todo Filters">
      <button
        className={filter === "all" ? "chip chip--active" : "chip"}
        onClick={() => setFilter("all")}
        type="button"
      >
        All
      </button>
      <button
        className={filter === "completed" ? "chip chip--active" : "chip"}
        onClick={() => setFilter("completed")}
        type="button"
      >
        Completed
      </button>
      <button
        className={filter === "incomplete" ? "chip chip--active" : "chip"}
        onClick={() => setFilter("incomplete")}
        type="button"
      >
        Incomplete
      </button>
    </div>
  );
}
