import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todoItem, toggleDone, deleteTodo }) => {
  let itemClassName = "list-group-item";
  if (todoItem.done) itemClassName += " list-group-item-success";

  return (
    <li className={itemClassName}>
      <span
        className={todoItem.done ? "todo-done pointer" : "pointer"}
        onClick={() => toggleDone(todoItem.no)}
      >
        {todoItem.todo}
        {todoItem.done ? "(완료)" : ""}
      </span>
      <span
        className="float-right badge badge-secondary pointer"
        onClick={() => deleteTodo(todoItem.no)}
      >
        삭제
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
const MemoizedTodoItem = React.memo(TodoItem);
export default MemoizedTodoItem;
