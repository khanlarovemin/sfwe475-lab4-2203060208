import type { Task } from "./schemas";
import TaskCheckbox from "./TaskCheckbox";

type TaskCardProps = Pick<Task, "title" | "done" | "dueDate"> & {
  onToggle: () => void;
};

function TaskCard({ title, done, dueDate, onToggle }: TaskCardProps) {
  return (
    <div className="task-card">
      <TaskCheckbox done={done} onToggle={onToggle} />
      <h3 className={done ? "done" : undefined}>{title}</h3>
      {dueDate && <p>Due: {dueDate}</p>}
    </div>
  );
}

export default TaskCard;
