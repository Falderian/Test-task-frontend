import { useState } from 'react';
import { Itodos } from '../interfaces & types/todos';
import '../App.css';
import { TodosList } from './todolist/todolist';
import { TodosForm } from './todosform/todosform';
import { TodosFooter } from './todosfooter/todosfooter';

function App() {  
  const [todos, setTodo] = useState<Itodos>([]);
  
  return (
    <div className="wrapper">
      <h1>todos</h1>
      <section className='todos'>
        <section className='todos__header'>
          What needs to be done?
        </section>
        <TodosForm setTodo={setTodo} todos={todos}/>
        <TodosList setTodo={setTodo} todos={todos}/>
        <TodosFooter setTodo={setTodo} todos={todos}/>
      </section>
    </div>
  );
}

export default App;
