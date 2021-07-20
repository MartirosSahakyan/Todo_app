import React from "react";
import { createNewId } from "../../helpers/helper";
import { Input } from "../Input/Input";
import "./Todo.css";
export default class Todo extends React.Component {
  state = {
    todos: [{ id: createNewId(), text: "Learn HTML", isComplete: false }],
    todoInput: "",
    isDisable: true,
  };

  handleAddTodo = () => {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          { id: createNewId(), text: prevState.todoInput, isComplete: false },
        ],
        todoInput: "",
        isDisable: true,
      };
    });
  };
  handleInputChange = (e) => {
    if (e.target.value.trim()) {
      this.setState({ todoInput: e.target.value, isDisable: false });
    } else {
      this.setState({ todoInput: "", isDisable: true });
    }
  };

  handleDeleteTodo = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => todo.id !== id),
      };
    });
  };

  handleComplete = (id) => {
    this.setState(({ todos }) => ({
        todos: todos.map((todo) =>
          todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        ),
      }));
  };

  render() {
    const { todos, todoInput, isDisable } = this.state;
    // console.log(this.state.todos[0].isComplete);
    return (
      <>
        <Input value={todoInput} onChange={this.handleInputChange} />
        <button disabled={isDisable} onClick={this.handleAddTodo}>
          ADD TODO
        </button>
        <ul>
          {todos.map(({ text, id, isComplete }) => {
            return (
              <li key={id} >
                <span onClick={()=>this.handleComplete(id)} className={isComplete ? "checked" : "unChecked"}>
                  {text}
                </span>
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
