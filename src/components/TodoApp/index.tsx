import React from "react";
import { inject, Observer, observer } from "mobx-react";
import { TodoStore } from "../../stores/TodoStore/TodoStore";

interface InjectedProps {
  todoStore: TodoStore;
}

@inject("todoStore")
@observer
class TodoApp extends React.Component {
  getInjectedProps = (): InjectedProps => this.props as InjectedProps;

  getTodoStore = () => {
    return this.getInjectedProps().todoStore;
  };

  getTodoData = async () => {
    return await this.getTodoStore().getTodoList();
  };

  componentDidMount() {
    this.getTodoData();
    console.log("cdm status", this.getTodoStore().getTodoListAPIStatus);
    console.log("cdm todo", this.getTodoStore().todoList);
  }
  render() {
    const todoList = this.getTodoStore().todoList;
    console.log("render status", this.getTodoStore().getTodoListAPIStatus);
    console.log("render todo", this.getTodoStore().todoList);
    return (
      <Observer>
        {() => (
          <div>
            <p>hello</p>
            {this.getTodoStore().getTodoListAPIStatus}
            {todoList.map((eachTodo: any) => (
              <div>
                <span>{eachTodo.userId} </span>
                <span>{eachTodo.title}</span>
              </div>
            ))}
          </div>
        )}
      </Observer>
    );
  }
}

export default TodoApp;
