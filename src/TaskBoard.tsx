import { useState } from "react";
import type { Task } from "./schemas";
import TaskList from "./TaskList";
import NewTaskInput from "./NewTaskInput";

function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Read Chapter 3", done: false },
    { id: 2, title: "Build TaskCard", done: true },
  ]);

  function handleAddTask(title: string) {
    const nextId = Math.max(0, ...tasks.map((task) => task.id)) + 1;
    setTasks([...tasks, { id: nextId, title, done: false }]);
  }

  return (
    <div>
      <NewTaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskBoard;
