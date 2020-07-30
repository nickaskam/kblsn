import { createStore, applyMiddleware } from "redux";
import { Blog } from "../types/Blog";
import { blogsReducer } from "../reducer/blog";
import thunk from "redux-thunk";

export interface IAppState {
  blogs: Blog[];
}

const initialState: IAppState = {
  blogs: [],
};

const appStore = createStore(
  blogsReducer,
  initialState,
  applyMiddleware(thunk)
);
export { appStore };
