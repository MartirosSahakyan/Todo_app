import React from "react";
import { INPUT_TYPES, STATUS } from "../../helpers/constants";
import {
  createNewId,
  getLocalStorage,
  setLocalStorage,
} from "../../helpers/helper";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { List } from "../List/List";
import "./Todo.css";
import classNames from "classnames";
import { FilterButtons } from "../FilterButtons/FilterButtons";

export default class Todo extends React.Component {
  state = getLocalStorage() || {
    todos: [],
    todoInput: "",
    filterStatus: STATUS.ALL,
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

  handleTodoItemDoubleClick = (id) => {
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

  componentDidUpdate() {
    try {
      setLocalStorage(this.state);
    } catch (e) {
      return;
    }
  }

  render() {
    const { todos, todoInput, filterStatus } = this.state;
    const countAllTodos = todos.length;
    const countActiveTodos = todos.filter((todo) => !todo.isComplete).length;
    const isInputEmpty = !todoInput.trim();
    let filteredTodos =
      filterStatus === STATUS.ACTIVE
        ? todos.filter((todo) => !todo.isComplete)
        : filterStatus === STATUS.COMPLETE
        ? todos.filter((todo) => todo.isComplete)
        : todos;

    return (
      <section className="container">
        <h1>Todo App</h1>
        <header>
          <Input
            name={INPUT_TYPES.mainInput}
            value={todoInput}
            onChange={this.handleInputChange}
          />
          <Button
            className={classNames(
              "addBtn",
              { disableBtn: isInputEmpty },
              { enableBtn: !isInputEmpty }
            )}
            handleClick={this.handleAddTodo}
            text="Add Todo"
            isDisable={isInputEmpty}
          />
        </header>
        <FilterButtons
          status={filterStatus}
          handleClick={this.handleFilterButton}
        />
        <main>
          <List
            countAll={countAllTodos}
            countActive={countActiveTodos}
            todos={filteredTodos}
            handleItemInput={this.handleItemInput}
            handleComplete={this.handleComplete}
            handleSave={this.handleSave}
            handleEdit={this.handleEdit}
            handleDeleteTodo={this.handleDeleteTodo}
            handleTodoItemDoubleClick={this.handleTodoItemDoubleClick}
          />
        </main>
      </section>
    );
  }
}
