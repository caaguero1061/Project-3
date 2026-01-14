# Todo Manager – React CRUD App

## Overview
Todo Manager is a fully functional React web application built using **Create React App**.  
The app allows users to manage a list of tasks using full **CRUD (Create, Read, Update, Delete)** functionality.  
Navigation is handled with **React Router**, and all state is managed with React hooks.

---

## Features
- Add new todos
- View (READ) all, completed, or incomplete todos
- Mark todos as completed
- Delete todos
- Controlled contact form
- Client-side routing
- Responsive layout with custom CSS

---

## Technologies Used
- React (Create React App)
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3

---

## Routes
| Route | Description |
|------|------------|
| `/todos` | Todo list with CRUD functionality |
| `/contact` | Controlled contact form |

---

## CRUD Functionality

### ✅ CREATE
Users can create new todos using a text input and submit button.

- A new todo object is created
- Added to React state
- Immediately rendered to the UI

```js
addTodo(text)
