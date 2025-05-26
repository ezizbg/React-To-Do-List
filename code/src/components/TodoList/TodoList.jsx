import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty-list">Нет задач</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
