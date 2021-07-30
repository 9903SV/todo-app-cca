import React from "react";
import TodoApp from "./components/TodoApp";
import { Provider } from "mobx-react";
import { reaction, autorun } from "mobx";
import { TodoStore } from "./stores/TodoStore/TodoStore";
import { TodoAppServices } from "./services/TodoAppServices/TodoAppAPI";
import "./App.css";

const todoInstance = new TodoStore(new TodoAppServices());
autorun(() => {
  console.log("reaction", todoInstance.todoList);
  if (todoInstance.todoList.length !== 0) {
    console.log(todoInstance.todoList);
  }
});

function App() {
  return (
    <Provider todoStore={todoInstance}>
      <div className="App">
        <TodoApp />
        {/* heo */}
      </div>
    </Provider>
  );
}

export default App;
