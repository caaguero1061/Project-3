import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="brand">
          <div className="brand__logo" aria-hidden="true">✓</div>
          <div>
            <div className="brand__name">Todo Manager</div>
            <div className="brand__tag">React CRUD + Router</div>
          </div>
        </div>

        <nav className="navlinks">
          <NavLink
            to="/todos"
            className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
          >
            Todos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
