import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodosPage from "./pages/TodosPage";
import ContactPage from "./pages/ContactPage";

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const [todos, setTodos] = useState([
    { id: makeId(), text: "Try the app (mark me complete)", completed: false },
    { id: makeId(), text: "Delete a todo to test CRUD", completed: false },
  ]);

  const [filter, setFilter] = useState("all"); // all | completed | incomplete

  const visibleTodos = useMemo(() => {
    if (filter === "completed") return todos.filter((t) => t.completed);
    if (filter === "incomplete") return todos.filter((t) => !t.completed);
    return todos;
  }, [todos, filter]);

  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTodo = { id: makeId(), text: trimmed, completed: false };
    setTodos((prev) => [newTodo, ...prev]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <BrowserRouter>
      <NavBar />
      <main className="page">
        <Routes>
          <Route
            path="/todos"
            element={
              <TodosPage
                todos={visibleTodos}
                allTodosCount={todos.length}
                filter={filter}
                setFilter={setFilter}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="*" element={<Navigate to="/todos" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
