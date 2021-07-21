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
        <button onClick={() => handlers.handleSave(id)}>Save</button>
      ) : (
        <button onClick={() => handlers.handleEdit(id)}>Edit</button>
      )}
      <button onClick={() => handlers.handleDeleteTodo(id)}>Delete</button>
    </li>
  );
}
