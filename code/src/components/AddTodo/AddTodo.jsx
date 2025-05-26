import { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавить новую задачу..."
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddTodo;
