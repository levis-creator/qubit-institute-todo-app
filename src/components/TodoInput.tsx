import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const TodoInput = () => {
  const [isVisible, setIsvisible] = useState<boolean>(false);
  const [todoItem, setTodoItem] = useState("");
  const [deadline, setDeadline] = useState("");
  function handleIsvisible() {
    setIsvisible(!isVisible);
  }
  function handleAdd() {
    console.log(todoItem);
    console.log(deadline);
  }

  return (
    <div className="input-container">
      <div className="input-area">
        {/* input */}
        <input
          type="text"
          name="todo"
          id="todoItem"
          placeholder="Add new"
          onChange={(e) => setTodoItem(e.target.value)}
        />
        {/* date */}

        {isVisible ? (
          <input
            type="date"
            name="deadline"
            id="deadline"
            onChange={(e) => setDeadline(e.target.value)}
          />
        ) : (
          ""
        )}
        <button className="icon-button" onClick={handleIsvisible}>
          <FaCalendarAlt className="icon" />
        </button>

        {/* button */}
        <button className="primary-button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
