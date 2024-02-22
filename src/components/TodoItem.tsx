import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.text}</label>
        <button onClick={() => deleteTodo(todo.id)}>x</button>
      </div>
    </li>
  );
};

export default TodoItem;
