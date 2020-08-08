import axios from "axios";

const READ_POSTS = "post/READ_POSTS";

export const readHandler = () => async (dispatch) => {
  const data = await axios
    .get("/api/posts")
    .then((res) => res.data)
    .catch((err) => console.log(err));
  dispatch({
    type: READ_POSTS,
    payload: data,
  });
};

const initialState = {
  posts: [],
};

export default function post(state = initialState, action) {
  const { posts } = state;
  switch (action.type) {
    case READ_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}
