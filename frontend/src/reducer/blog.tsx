import { BlogAction } from "../actions/blog-actions";
import { Reducer } from "redux";
import { IAppState } from "../store/AppStore";
import { Blog } from "../types/Blog";

interface IBlogsState {
  readonly blogs: Blog[];
  readonly loading: boolean;
}

const initalBlogState: IBlogsState = {
  blogs: [],
  loading: false,
};

export const blogsReducer: Reducer<IAppState, BlogAction> = (
  state = initalBlogState,
  action
) => {
  switch (action.type) {
    case "LoadingBlog": {
      return {
        ...state,
        loading: true,
      };
    }
    case "LoadedBlog": {
      return {
        ...state,
        blogs: action.blogs,
        loading: false,
      };
    }
    default:
      neverReached(action);
  }
  return state;
};

const neverReached = (never: never) => {};
