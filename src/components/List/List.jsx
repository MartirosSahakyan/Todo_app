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
        <li>
          <b>{countActive}</b> active / <b>{countAll}</b> All todos
        </li>
      </ul>
    </div>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
