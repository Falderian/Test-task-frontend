import { Itodos } from "../../interfaces & types/todos";

export const TodosFooter = ({
  todos,
  setTodo,
}: {
  todos: Itodos;
  setTodo: React.Dispatch<React.SetStateAction<Itodos>>;
}) => {
  const activeItems = todos.filter((el) => !el.completed).length;
  const allItems = document.querySelectorAll(".todos__item");
  const allBtns = document.querySelectorAll("button");
  const allBtn = allBtns[1];
  const activeBtn = allBtns[2];
  const completeBtn = allBtns[3];
  const clearBtn = allBtns[4];

  const setActiveBtn = (btn: HTMLButtonElement) => {
    allBtn.classList.remove("active-btn");
    btn.classList.add("active-btn");
  };

  const clearAllBtnsActive = () => {
    for (let i = 1; i < allBtns.length; i++) {
      allBtns[i].classList.remove("active-btn");
    }
  };

  const showAllItems = () => {
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove("nonactive");
    }
    clearAllBtnsActive();
    setActiveBtn(allBtn);
  };

  const showOnlyActiveItems = () => {
    clearAllBtnsActive();
    showAllItems();
    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].id !== "active") allItems[i].classList.add("nonactive");
    }
    setActiveBtn(activeBtn);
  };

  const showOnlyCompletedItems = () => {
    showAllItems();
    clearAllBtnsActive();
    const allItems = document.querySelectorAll(".todos__item");
    for (let i = 0; i < allItems.length; i++) {
      if (!allItems[i].classList.contains("completed"))
        allItems[i].classList.add("nonactive");
    }
    setActiveBtn(completeBtn);
  };

  const clearCompleted = async () => {
    const temp = todos.filter((el) => {
      return el.completed === false;
    });
    setTodo([]);
    setTodo(temp);
  };

  return (
    <section className="todos__footer">
      <span className="todos__incomplted-todos">{activeItems} items left</span>
      <section className="todos__btns">
        <button className="all_btn active-btn" onClick={showAllItems}>
          All
        </button>
        <button className="active_btn" onClick={showOnlyActiveItems}>
          Active
        </button>
        <button className="complete_btn" onClick={showOnlyCompletedItems}>
          Completed
        </button>
      </section>
      <button className="clear_btn" onClick={clearCompleted}>
        Clear completed
      </button>
    </section>
  );
};
