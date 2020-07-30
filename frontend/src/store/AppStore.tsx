import { createStore, applyMiddleware } from "redux";
import { Blog } from "../types/Blog";
import blogsReducer from "../reducer/blog";
import thunk from "redux-thunk";

export interface IAppState {
  blogs: Blog[];
}

const INITIAL_STATE: IAppState = {
  blogs: [],
};

const appStore = createStore(
  blogsReducer,
  INITIAL_STATE as any,
  applyMiddleware(thunk)
);
export { appStore };
