import { ListItem } from "./ListItem";
import PropTypes from "prop-types";
import './List.css'

export function List(props) {
  const { todos, ...handlers } = props;
  return (
    <div className='todoList-container'>
    <ul>
      {todos.map((todo) => {
        return <ListItem key={todo.id} todo={todo} handlers={handlers} />;
      })}
    </ul>
    </div>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
