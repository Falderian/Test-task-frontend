import React, { RefObject } from "react";
import { Itodo, Itodos } from "../../interfaces & types/todos";

export const TodosForm =  ({todos, setTodo}: {todos: Itodos, setTodo: React.Dispatch<React.SetStateAction<Itodos>>}) => {
  const nameInput: RefObject<HTMLInputElement> = React.createRef();
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const todo: Itodo = {
      id: todos.length,
      name: nameInput.current!.value,
      completed: false,
    };
    setTodo([...todos, todo]);
  }
  return (
    <form className="todos__form" onSubmit={(evt) => handleSubmit(evt)}>
      <input type='text' defaultValue="Enter todo's name" ref={nameInput}></input>
      <button className="todos__submit-btn">Add</button>
    </form>
  )
}