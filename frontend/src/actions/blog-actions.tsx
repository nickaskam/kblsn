import { ActionCreator, Action, Dispatch } from "redux";
import { Blog } from "../types/Blog";
import { ThunkAction } from "redux-thunk";

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
    const loadedBlogAction: LoadedBlogAction = {
      blogs,
      type: "LoadedBlog",
    };
    return dispatch(loadedBlogAction);
  };
};

// export const getBlogsFromApi = async () => {
//   let res = await axios.get("http://localhost:8000/api/blog/");

//   let blogs = res.data;
//   console.log(blogs);
// };
