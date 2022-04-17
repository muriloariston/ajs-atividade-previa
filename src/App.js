import Header from './components/Header';
import './App.css';
import data from './_mock-list/data.json';
import { useState } from 'react';
import ToDoTask from './components/ToDoTask';
import Form from './components/Form';

function App() {
  const [toDoTask, setTodoTask] = useState(data);

  const handleToggle = (id) => {
    let tasksReload = toDoTask.map((task) => {
      return task.id === Number(id)
        ? { ...task, situacao: !task.situacao }
        : { ...task };
    });
    setTodoTask(tasksReload);
  };

  const handleFilter = () => {
    let tasksReload = toDoTask.filter((task) => {
      return !task.situacao;
    });
    setTodoTask(tasksReload);
  };

  const newTaskNode = (newTask) => {
    let newListTask = [...toDoTask];
    let newId =
      toDoTask.reduce((acc, cur) => {
        return acc.id > cur.id ? acc.id : cur.id;
      }) + 1;
    let newNode = { id: newId, descricao: newTask, situacao: false };
    newListTask = [...newListTask, newNode];
    setTodoTask(newListTask);
  };

  return (
    <div className="App">
      <Header />
      <div className="card">
        <div className="card-header">
          <Form newTaskNode={newTaskNode} filter={handleFilter} />
        </div>
        <div className="card-body">
          <h5 class="card-title">Tarefas:</h5>
          <div>
            <ToDoTask tasks={toDoTask} toggle={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
