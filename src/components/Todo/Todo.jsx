import React from "react";
import { status } from "../../helpers/constants";
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
      {
        id: createNewId(),
        text: "Learn JS",
        isComplete: true,
        isEdit: false,
      },
    ],
    todoInput: "",
    filterStatus: status.ALL,
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
    this.setState({ todoInput: value });
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

  handleFilterButton = (status) => {
    this.setState({ filterStatus: status });
  };

  render() {
    const { todos, todoInput, filterStatus } = this.state;
    const isInputEmpty = !todoInput.trim();
    let filteredTodos =
      filterStatus === status.ACTIVE
        ? todos.filter((todo) => !todo.isComplete)
        : filterStatus === status.COMPLETE
        ? todos.filter((todo) => todo.isComplete)
        : todos;

    return (
      <section>
        <h1>Todo App</h1>
        <header>
          <Input
            value={todoInput}
            onChange={this.handleInputChange}
            placeholder="add new todo"
          />
          <Button
            handleClick={this.handleAddTodo}
            text="Add Todo"
            isDisable={isInputEmpty}
          />
        </header>
        <div>
          <Button
            handleClick={()=>this.handleFilterButton(status.ALL)}
            text="All"
          />
          <Button
            handleClick={()=>this.handleFilterButton(status.ACTIVE)}
            text="Active"
          />
          <Button
            handleClick={()=>this.handleFilterButton(status.COMPLETE)}
            text="Complete"
          />          
        </div>
        <main>
          <List
            todos={filteredTodos}
            handleItemInput={this.handleItemInput}
            handleComplete={this.handleComplete}
            handleSave={this.handleSave}
            handleEdit={this.handleEdit}
            handleDeleteTodo={this.handleDeleteTodo}
          />
        </main>
      </section>
    );
  }
}
