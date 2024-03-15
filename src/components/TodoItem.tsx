import { FaInfoCircle, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

const TodoItem = () => {
  return (
    <div className="todo">
      {/* checkbox */}
      <input type="checkbox" name="completed" id="completed" />
      {/* to do title */}
      <div className="todotitle">Buy gloceries next week</div>
      {/* deadline */}
      <div className="deadline">28th june 2020</div>
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
          <span>28th june 2020</span>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
5;
