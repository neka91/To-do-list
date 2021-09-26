import { useState } from "react";
import Button from "./components/Button";
import TasksList from "./components/TasksList";

function App() {
  const initialTasks = [
    {
      id: 1,
      text: "Task 1",
    },
    {
      id: 2,
      text: "Task 2",
    },
    {
      id: 3,
      text: "Task 3",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [value, setValue] = useState("");
  const [newID, setNewID] = useState("");

  const addTask = (event) => {
    if (value) {
      setNewID(new Date());
      const newTask = { id: newID, text: value };
      setTasks((prev) => [...prev, newTask]);
      setValue("");
    } else {
      event.preventDefault();
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      addTask(event);
    }
  };

  return (
    <div className="app">
      <h1 className="app__item_title">To-do list</h1>
      <input
        className="app__item_input"
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Type your new task here..."
      />
      <Button onAdd={addTask} />
      {tasks.length > 0 ? (
        <TasksList tasks={tasks} onDelete={handleDelete} />
      ) : (
        <h3>No tasks to show</h3>
      )}
    </div>
  );
}

export default App;
