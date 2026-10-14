import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from "./components/TaskStats";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function handleToggleTask(taskId) {
    setTasks((previousTasks) =>
        previousTasks.map((task) =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        )
    );
}

function handleDeleteTask(taskId) {
    setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== taskId)
    );
}

  return (
    <main>
      <h1>Student Task Manager</h1>

      <TaskForm onAddTask={handleAddTask} />

      <TaskStats tasks={tasks} />

      <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
      />

      
    </main>
  );
}

export default App
