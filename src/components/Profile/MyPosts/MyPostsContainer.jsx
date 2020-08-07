import React from "react";
import {
  addPostActionCreator,
  newTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState().profile;
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onTextChange = (text) => {
    props.store.dispatch(newTextActionCreator(text));
  };

  return (
    <MyPosts addPost={addPost} onTextChange={onTextChange} state={state} />
  );
};

export default MyPostsContainer;
