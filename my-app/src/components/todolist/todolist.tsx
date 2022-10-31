import React from "react";
import { Itodo, Itodos } from "../../interfaces & types/todos";

export const TodosList = ({
  todos,
  setTodo,
}: {
  todos: Itodos;
  setTodo: React.Dispatch<React.SetStateAction<Itodos>>;
}) => {
  const toggleTodo = (evt: React.ChangeEvent<HTMLInputElement>, el: Itodo) => {
    el.completed = !el.completed;
    evt.currentTarget.checked = el.completed;
    setTodo([...todos]);
  };
  return (
    <section className="todos__list">
      {todos.map((el) => {
        return (
          <div
            className={el.completed ? "todos__item completed" : "todos__item"}
            id={el.completed ? "nonactive" : "active"}
            key={todos.indexOf(el)}
          >
            <input
              className="todos__checkbox"
              type="checkbox"
              checked={el.completed ? true : false}
              onChange={(evt) => toggleTodo(evt, el)}
            ></input>
            <label htmlFor="checkbox"></label>
            <span>{el.name}</span>
          </div>
        );
      })}
    </section>
  );
};
