import getData from "@ib/api";
import { apiMethods } from "../constants/APIConstants";

export const networkCallWithApisauce = async (
  api,
  endpoint,
  requestObject,
  apiMethodType = apiMethods.get
) => {
  let response = null;
  try {
    response = await getData(api, endpoint, requestObject, apiMethodType);
  } catch (error) {
    throw error;
  }

  return response;
};
