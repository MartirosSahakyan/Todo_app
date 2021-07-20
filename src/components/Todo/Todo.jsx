import React from "react";
import { createNewId } from "../../helpers/helper";
import { Input } from "../Input/Input";

export default class Todo extends React.Component {
  state = {
    todos: [{ id: createNewId(), text: "Learn HTML" }],
    todoInput: "",
    isDisable: true,
  };

  handleAddTodo = () => {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          { id: createNewId(), text: prevState.todoInput },
        ],
        todoInput: "",
        isDisable: true,
      };
    });
  };
  handleInputChange = (e) => {
      if(e.target.value.trim()){
          this.setState({ todoInput: e.target.value, isDisable: false });
        }else{
            this.setState({ todoInput: '', isDisable: true });
        }


        

  };
  handleDeleteTodo = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => todo.id !== id),
      };
    });
  };

  render() {
    const { todos, todoInput, isDisable } = this.state;
    return (
      <>
        <Input value={todoInput} onChange={this.handleInputChange} />
        <button disabled={isDisable} onClick={this.handleAddTodo}>
          ADD TODO
        </button>
        <ul>
          {todos.map(({ text, id }) => {
            return (
              <li key={id}>
                <span>{text}</span>
                <button>Edit</button>
                <button onClick={() => this.handleDeleteTodo(id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
