import { Itodos } from "./todos";

export interface Itodoslist {
  todos: Itodos;
  setTodo: React.Dispatch<React.SetStateAction<Itodos>>;
  setActiveTodo: React.Dispatch<React.SetStateAction<Itodos>>;
  setCompleteTodo: React.Dispatch<React.SetStateAction<Itodos>>;
}
