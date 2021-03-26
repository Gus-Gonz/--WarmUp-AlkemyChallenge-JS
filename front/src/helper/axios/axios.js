import axios from "axios";

export const getAllPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getSinglePostData = (id) => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
};

export const postSinglePost = (data) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", data);
};

export const modifySinglePost = (id, data) => {
  return axios.put("https://jsonplaceholder.typicode.com/posts/" + id, data);
};

export const deleteSinglePost = (id) => {
  return axios.delete("https://jsonplaceholder.typicode.com/posts/" + id);
};
