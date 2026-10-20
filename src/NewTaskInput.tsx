import { useState } from "react";

function NewTaskInput({ onAddTask }: { onAddTask: (title: string) => void }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() === "") return;
    onAddTask(text.trim());
    setText("");
  }

  return (
    <div className="new-task">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default NewTaskInput;
