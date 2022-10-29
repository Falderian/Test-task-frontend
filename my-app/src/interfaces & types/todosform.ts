import { Itodos } from "./todos";

export interface Itodosform {
  todos: Itodos;
  addTodo: React.Dispatch<React.SetStateAction<Itodos>>;
}
