import { create } from "apisauce";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { endpoints } from "./endpoints";
import { apiMethods } from "../../constants/APIConstants";

class TodoAppServices {
  api;
  constructor() {
    this.api = create({ baseURL: "https://jsonplaceholder.typicode.com" });
  }

  todoDataAPI = () => {
    return networkCallWithApisauce(
      this.api,
      endpoints.todoItems,
      {},
      apiMethods.get
    );
  };
}

export { TodoAppServices };
