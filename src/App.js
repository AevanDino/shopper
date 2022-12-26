import './App.css';
import { useState } from 'react';
import { TopBar } from './components/topbar/TopBar';
import { Task } from "./components/task/Task";
import { TaskList } from './components/tasklist/TaskList';
import { nanoid } from 'nanoid'
import { CompletedTask } from './components/completed/CompletedTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [complete, setCompleted] = useState([]);

  const updateInput = (event) => {
    setInput(event.target.value);
  }

  function addTask() {
    const task = { text: input, id: nanoid() }
    setTasks([...tasks, task]);
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  const removeCompletedTask = (id) => {
    setCompleted(complete.filter(task => task.id !== id));
  }

  const completeTask = (id) => {
    const tasksss = tasks.filter(task => task.id === id);
    console.log(tasksss[0].text)
    setCompleted([...complete, tasksss[0]]);
    setTasks(tasks.filter(task => task.id !== id));
  }

  let topBarProps = {
    onClick: addTask,
    onChange: updateInput
  };


  return (
    <div className='back'>
      <TopBar className="topBar">
        {topBarProps}
      </TopBar>
      <TaskList>
        {tasks.map((task, index) => {
          let props = {
            task: {
              text: task.text,
              id: task.id
            },
            removeTask: removeTask,
            complete: completeTask
          }
          return <Task key={index}>
            {props}
          </Task>
        })}
      </TaskList>

      <TaskList>
        {complete.map((task, index) => {
          let props = {
            task: {
              text: task.text,
              id: task.id
            },
            removeTask: removeCompletedTask,
          }
          return <CompletedTask key={index}>
            {props}
          </CompletedTask>
        })}
      </TaskList>

    </div>
  );
}

export default App