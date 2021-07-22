import { Button } from "../Button/Button";
// import styles from "./ListItem.module.css";
import PropTypes from "prop-types";
import "./ListItem.css";

export function ListItem({ todo, handlers }) {
  const { isEdit, text, isComplete, id } = todo;
  return (
    <li>
      {isEdit ? (
        <input
          className="todoList-input"
          onChange={(e) => handlers.handleItemInput(id, e)}
          value={text}
        />
      ) : (
        <span
          onClick={() => handlers.handleComplete(id)}
          className={
            isComplete ? "todoList-text checked" : "todoList-text unChecked"
          }
        >
          {text}
        </span>
      )}
      <Button
        className="todoBtns deleteBtn"
        text="Delete"
        handleClick={() => handlers.handleDeleteTodo(id)}
      />

      {isEdit ? (
        <Button
          className="todoBtns saveBtn"
          text="Save"
          handleClick={() => handlers.handleSave(id)}
        />
      ) : (
        <Button
          className="todoBtns editBtn"
          text="Edit"
          handleClick={() => handlers.handleEdit(id)}
        />
      )}
    </li>
  );
}

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handlers: PropTypes.objectOf(PropTypes.func).isRequired,
};
