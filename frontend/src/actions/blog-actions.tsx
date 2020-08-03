import { ActionCreator, Action, Dispatch } from "redux";
import { Blog } from "../types/Blog";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { blogsReducer } from "../reducer/blog";

export interface LoadingBlogAction extends Action<"LoadingBlog"> {}

export interface LoadedBlogAction extends Action<"LoadedBlog"> {
  blogs: Blog[];
}

export type BlogAction = LoadingBlogAction | LoadedBlogAction;

export const getBlogActionCreator: ActionCreator<ThunkAction<
  Promise<LoadedBlogAction>,
  Blog[],
  null,
  LoadedBlogAction
>> = () => {
  return async (dispatch: Dispatch) => {
    const loadingBlogAction: LoadingBlogAction = {
      type: "LoadingBlog",
    };
    dispatch(loadingBlogAction);
    const blogs = [
      {
        id: 1,
        title: "test",
        body: "string",
        created_at: "2020-07-29T19:39:05.631926Z",
      },
    ];
    // getBlogsFromApi();
    const loadedBlogAction: LoadedBlogAction = {
      blogs,
      type: "LoadedBlog",
    };
    return dispatch(loadedBlogAction);
  };
};

// const getBlogsFromApi = () => {
//   axios({
//     method: "GET",
//     url: `http://localhost:8000/api/blog`,
//   }).then((response) => {
//     const blogs = response.data;
//   });
// };
