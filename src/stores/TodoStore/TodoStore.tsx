import { observable, action, makeAutoObservable } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL } from "@ib/api-constants";

class TodoStore {
  TodoAppAPI: any;
  @observable todoList: any = [];
  @observable getTodoListAPIStatus = API_INITIAL;
  @observable getTodoListAPIError = null;

  constructor(TodoAppAPI: any) {
    makeAutoObservable(this);
    this.TodoAppAPI = TodoAppAPI;
    // this.todoList = observable([]);
  }

  @action.bound
  getTodoList = () => {
    const getTodosPromise = this.TodoAppAPI.todoDataAPI();
    return bindPromiseWithOnSuccess(getTodosPromise)
      .to(this.setGetTodoListAPIStatus, this.setGetTodoListAPIResponse)
      .catch(this.setGetTodoListAPIError);
  };

  @action.bound
  setGetTodoListAPIStatus = (status: number) => {
    console.log("store status", status);
    this.getTodoListAPIStatus = status;
  };

  @action.bound
  setGetTodoListAPIError = (error: any) => {
    console.log(error);
    this.getTodoListAPIError = error;
  };

  @action.bound
  setGetTodoListAPIResponse = (response: any) => {
    // this.todoList.replace(response);
    this.todoList = response;
    console.log("store response", response);
  };
}

export { TodoStore };
