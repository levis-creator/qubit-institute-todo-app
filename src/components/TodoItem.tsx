import { FaInfoCircle, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

const TodoItem = ({ todo }: { todo: any }) => {
  return (
    <div className="todo">
      {/* checkbox */}
      <input type="checkbox" name="completed" id="completed" />
      {/* to do title */}
      <div className="todotitle">{todo.todoItem}</div>
      {/* deadline */}

      {todo.deadline.length != 0 ? (
        <div className="deadline">{todo.deadline}</div>
      ) : (
        ""
      )}
      {/* icons */}
      <div className="todo-button-area">
        <div className="todo-buttons">
          <button className="icon-button">
            <FaPencilAlt color="#5e9cff" size={20} />
          </button>
          <button className="icon-button">
            <FaRegTrashAlt color="#ff5e66" size={20} />
          </button>
        </div>
        <div className="createdDate">
          <FaInfoCircle />
          <span>{todo.created}</span>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
