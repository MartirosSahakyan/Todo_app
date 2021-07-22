import { Button } from "../Button/Button";
import "./ListItem.css";

export function ListItem({ todo, handlers }) {
  const { isEdit, text, isComplete, id } = todo;
  return (
    <li>
      {isEdit ? (
        <input onChange={(e) => handlers.handleItemInput(id, e)} value={text} />
      ) : (
        <span
          onClick={() => handlers.handleComplete(id)}
          className={isComplete ? "checked" : "unChecked"}
        >
          {text}
        </span>
      )}

      {isEdit ? (
        <Button text="Save" handleClick={() => handlers.handleSave(id)} />
      ) : (
        <Button text="Edit" handleClick={() => handlers.handleEdit(id)} />
      )}
      <Button text="Delete" handleClick={() => handlers.handleDeleteTodo(id)} />
    </li>
  );
}
