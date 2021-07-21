import { ListItem } from "./ListItem";

export function List(props) {
    const {todos, ...handlers} = props
    return(
        <ul>
          {todos.map((todo) => {
            return (
              <ListItem key={todo.id} todo={todo} handlers = {handlers} />
            );
          })}
        </ul>
    )
}