import * as constants from "../constants";
import axios from "axios";

export interface LoadBlog {
  type: constants.LOAD_BLOG;
}

export type BlogAction = LoadBlog;

export function loadBlog(): LoadBlog {
  return {
    type: constants.LOAD_BLOG,
  };
}
// export const getUserData = () => (dispatch: any) => {
//     dispatch({ type: constants.LOAD_BLOG });
//     axios.get(‘/user’)
//         .then(res => {
//         console.log(‘user data’, res.data);
//     dispatch({
//         type: SET_USER,
//         payload: res.data
//     });
//     }).catch(err => {
//         console.log(err);
//     });
//    }
