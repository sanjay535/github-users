import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import users from "../reducers/users";

export default function configureStore() {
  const store = createStore(users, applyMiddleware(thunk));
  return store;
}
