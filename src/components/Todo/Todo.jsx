import React from "react";
import { createNewId } from "../../helpers/helper";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { List } from "../List/List";
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
  };

  handleAddTodo = () => {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: createNewId(),
            text: prevState.todoInput.trim(),
            isComplete: false,
            isEdit: false,
          },
        ],
        todoInput: "",
      };
    });
  };

  handleInputChange = ({ target: { value } }) => {
      this.setState({ todoInput: value});
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
    const { todos, todoInput } = this.state;
    const isInputEmpty = !todoInput.trim()
    return (
      <>
        <Input value={todoInput} onChange={this.handleInputChange} />
        <Button
          handleClick={this.handleAddTodo}
          text="Add Todo"
          isDisable={isInputEmpty}
        />
        <button onClick={this.handleActiveTodos}>Active</button>
        <List
          todos={todos}
          handleItemInput={this.handleItemInput}
          handleComplete={this.handleComplete}
          handleSave={this.handleSave}
          handleEdit={this.handleEdit}
          handleDeleteTodo={this.handleDeleteTodo}
        />
      </>
    );
  }
}
