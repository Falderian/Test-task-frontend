import { Itodos } from "../../interfaces & types/todos";

export const TodosFooter = ({todos, setTodo}: {todos: Itodos, setTodo: React.Dispatch<React.SetStateAction<Itodos>>}) => {
  const activeItems = todos.filter(el => !el.completed).length;
  const allItems = document.querySelectorAll('.todos__item');


  const showAllItems = () => {
    for(let i = 0; i < allItems.length; i++ ) {
      allItems[i].classList.remove('nonactive');
    }
  }

  const showOnlyActiveItems = () => {
    showAllItems();
    for(let i = 0; i < allItems.length; i++ ) {
      if(allItems[i].id !== 'active') allItems[i].classList.add('nonactive');
    }
  }

  const showOnlyCompletedItems = () => {
    showAllItems();
    for(let i = 0; i < allItems.length; i++ ) {
      if(!allItems[i].classList.contains('completed')) allItems[i].classList.add('nonactive');
    }
  }

  const clearCompleted = async () => {
    const temp = todos.filter(el => {
      return el.completed === false;
    });
    console.log(todos);
    setTodo([]);
    setTodo(temp);
  }

  return (
    <section className="todos__footer">
      <span className="todos__incomplted-todos">{activeItems} items left</span>
      <section className="todos__btns">
        <button className="all_btn" onClick={showAllItems}>All</button>
        <button className="active_btn" onClick={showOnlyActiveItems}>Active</button>
        <button className="complete_btn" onClick={showOnlyCompletedItems}>Completed</button>
      </section>
      <button className="clear_btn" onClick={clearCompleted}>Clear completed</button>
    </section>
  );
}