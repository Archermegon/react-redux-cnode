import axios from "axios";
import * as actionTypes from "./../constant/actionTypes";

export const getPost = (tab, page) => dispatch => {
  axios.get(`https://cnodejs.org/api/v1/topics`).then(res => {
    console.log(res.data.data);
    dispatch({
      type: actionTypes.GET_POST,
      post: res.data.data
    });
  });
};
