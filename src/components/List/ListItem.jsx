import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import "./ListItem.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { INPUT_TYPES } from "../../helpers/constants";
import classNames from "classnames";

export function ListItem({ todo, handlers }) {
  const { isEdit, text, isComplete, id } = todo;
  const isInputEmpty = !text.trim();

  return (
    <li>
      {isEdit ? (
        <Input
          name={INPUT_TYPES.todoInput}
          value={text}
          onChange={(e) => handlers.handleItemInput(id, e)}
        />
      ) : (
        <span
          onClick={() => handlers.handleComplete(id)}
          onDoubleClick={() => handlers.handleTodoItemDoubleClick(id)}
          className={cn(
            "todoList-text",
            { checked: isComplete },
            { unChecked: !isComplete }
          )}
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
          className={classNames(
            "todoBtns",
            { disableBtn: isInputEmpty },
            { saveBtn: !isInputEmpty }
          )}
          text="Save"
          isDisable={!Boolean(text)}
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
