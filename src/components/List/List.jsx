import { ListItem } from "./ListItem";
import PropTypes from "prop-types";
import "./List.css";

export function List({ countActive, countAll, todos, ...handlers }) {
  return (
    <div className="todoList-container">
      <ul>
        {todos.map((todo) => {
          return <ListItem key={todo.id} todo={todo} handlers={handlers} />;
        })}
        <div className="list-footer">
          <b>{countActive}</b> active / <b>{countAll}</b> All todos
          <span
            className="clearCompleted"
            onClick={handlers.handleClearAllCompleted}
          >
            Clear all Completed
          </span>
        </div>
      </ul>
    </div>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  countActive: PropTypes.number.isRequired,
  countAll: PropTypes.number.isRequired,
  handlers: PropTypes.objectOf(PropTypes.func)
};
