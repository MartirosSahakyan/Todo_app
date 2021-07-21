import React from "react";
import { createNewId } from "../../helpers/helper";
import { Input } from "../Input/Input";
import "./Todo.css";
export default class Todo extends React.Component {
  state = {
    todos: [
      {
        id: createNewId(),
        text: "Learn HTML",
        isComplete: false,
        isEdit: false,
      },
    ],
    todoInput: "",
    isDisable: true,
  };

  handleAddTodo = () => {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: createNewId(),
            text: prevState.todoInput,
            isComplete: false,
            isEdit: false,
          },
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

  handleEdit = (id) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, isEdit: true } : todo
      ),
    }));
  };
  handleSave = (id) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, isEdit: false } : todo
      ),
    }));
  };
  handleItemInput = (id, e) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, text: e.target.value } : todo
      ),
    }));
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
          {todos.map(({ text, id, isComplete, isEdit }) => {
            return (
              <li key={id}>
                {isEdit ? (
                  <input
                    onChange={(e) => this.handleItemInput(id, e)}
                    value={text}
                  />
                ) : (
                  <span
                    onClick={() => this.handleComplete(id)}
                    className={isComplete ? "checked" : "unChecked"}
                  >
                    {text}
                  </span>
                )}
                {isEdit ? (
                  <button onClick={() => this.handleSave(id)}>Save</button>
                ) : (
                  <button onClick={() => this.handleEdit(id)}>Edit</button>
                )}
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
