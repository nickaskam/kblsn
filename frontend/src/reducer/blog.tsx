import { Blog } from "../types/Blog";
import { LOAD_BLOG } from "../constants";
import { LoadBlog } from "../actions/blog-actions";

const blogsReducer = (state: Blog[] = [], action: LoadBlog) => {
  let newState: Blog[] = [];
  switch (action.type) {
    case LOAD_BLOG:
      return newState;
    default:
      return state;
  }
};

export default blogsReducer;
