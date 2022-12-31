import React from "react";
import { useReducer, useState } from "react";

const UseReducer = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "add-todo":
        return {
          todos: [...state.todos, { Name: action.text, completed: false }],
        };

      case "done-todo":
        return {
          todos: state.todos.map((todo, index) => {
            if (index === action.index) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          }),
        };

      case "delete-todo":
        return {
          todos: state.todos.filter((todo, index) => index !== action.index),
        };

      default:
        return state;
    }
  }

  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });

  const [text, setText] = useState();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input
          type="text"
          placeholder="Enter text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>

      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1
              style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.Name}
            </h1>
            <button onClick={() => dispatch({ type: "delete-todo", index })}>
              Delete
            </button>
            <button onClick={() => dispatch({ type: "done-todo", index })}>
              {todo.completed ? "Undo" : "Done"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UseReducer;
