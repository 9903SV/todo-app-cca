import getTodoList from "../../fixtures/getTodoList.json";

class TodoAppFixtureServices {
  TodoAppAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(getTodoList), 2000);
    });
  };
}

export default TodoAppFixtureServices;
