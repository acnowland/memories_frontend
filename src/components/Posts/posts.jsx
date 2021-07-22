import React from "react";
import Post from "./Post/post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Post ARea</h1>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
