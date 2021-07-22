import { ListItem } from "./ListItem";
import PropTypes from "prop-types";

export function List(props) {
  const { todos, ...handlers } = props;
  return (
    <ul>
      {todos.map((todo) => {
        return <ListItem key={todo.id} todo={todo} handlers={handlers} />;
      })}
    </ul>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
