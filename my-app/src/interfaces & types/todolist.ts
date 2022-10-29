import { Itodos } from "./todos";

export interface Itodoslist {
  todos: Itodos;
  toggleTodo: (id: string) => void;
}
