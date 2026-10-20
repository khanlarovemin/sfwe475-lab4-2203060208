import { useState } from "react";
import type { Task } from "./schemas";
import TaskList from "./TaskList";
import NewTaskInput from "./NewTaskInput";
import FilterBar, { type Filter } from "./FilterBar";

function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Read Chapter 3", done: false },
    { id: 2, title: "Build TaskCard", done: true },
  ]);
  const [filter, setFilter] = useState<Filter>("all");

  function handleAddTask(title: string) {
    const nextId = Math.max(0, ...tasks.map((task) => task.id)) + 1;
    setTasks([...tasks, { id: nextId, title, done: false }]);
  }

  function handleToggleTask(id: number) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  return (
    <div>
      <NewTaskInput onAddTask={handleAddTask} />
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <TaskList tasks={tasks} filter={filter} onToggleTask={handleToggleTask} />
    </div>
  );
}

export default TaskBoard;
