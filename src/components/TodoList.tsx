import TodoItem from "./TodoItem";

const TodoList = ({ data }: { data: any[] }) => {
  return (
    <div className="todoList">
      {data.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
