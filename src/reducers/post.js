import { GET_POST } from "./../constant/actionTypes";

const post = (state = [], action) => {
  switch (action.type) {
    case GET_POST:
      return action.post;
    default:
      return state;
  }
};
export default post;
