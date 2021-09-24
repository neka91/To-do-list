import { useState } from "react";
import Button from "./components/Button";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([
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
  ]);
  const [value, setValue] = useState("");
  const [newID, setNewID] = useState("");

  const addTask = (event) => {
    if (value) {
      setNewID(Math.floor(Math.random() * 1000) + 1);
      const newTask = { id: newID, text: value };
      setTasks((prev) => [...prev, newTask]);
      setValue("");
    } else {
      event.preventDefault();
    }
  };

  const handlingDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handlingChange = (event) => {
    setValue(event.target.value);
  };

  const handlingKeyPress = (event) => {
    if (event.charCode === 13) {
      addTask(event);
    }
  };

  return (
    <div className="App">
      <h1>To-do list</h1>
      <input
        type="text"
        value={value}
        onChange={handlingChange}
        onKeyPress={handlingKeyPress}
        placeholder="Type your new task here..."
      />
      <Button onAddition={addTask} />
      {tasks.length > 0 ? (
        <TasksList tasks={tasks} onDelete={handlingDelete} />
      ) : (
        <h3>No tasks to show</h3>
      )}
    </div>
  );
}

export default App;
