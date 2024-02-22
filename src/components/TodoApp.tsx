import React, { useState } from "react";
import TodoList from "./TodoList";
import { Todo } from "../types";

let idCounter = 0;

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (text.trim() !== "") {
      setTodos([...todos, { id: idCounter++, text, completed: false }]);
      setText("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
      </header>
      <section className="main">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </section>
    </div>
  );
};

export default TodoApp;
