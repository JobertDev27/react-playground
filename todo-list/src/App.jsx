import { useState } from "react";
import "./style.css";

export default function App() {
  const [todo, setTodo] = useState(["take out trash", "wash dishes"]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") return;

    setTodo([...todo, task]);
    setTask("");
  }

  function removeTask(index) {
    const updatedTask = todo.filter((_, i) => i !== index);
    setTodo(updatedTask);
  }

  return (
    <main>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => addTask()}>ADD</button>
        <ol className="task-list">
          {todo.map((todo, i) => (
            <li key={i}>
              <div className="task">
                <p>{todo}</p>
                <button onClick={() => removeTask(i)}>x</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
