import axios, { CanceledError, AxiosError } from "axios";

// Creates an API call of
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { CanceledError, AxiosError };
