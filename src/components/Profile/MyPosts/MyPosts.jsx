import React from "react";
import mpStyle from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, newTextActionCreator } from "../../../redux/profileReducer";

const MyPosts = (props) => {
  let postsElem = props.posts.map((pts) => (
    <Post message={pts.post} likes_average={pts.likes} />
  ));

  let newPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onTextChange = () => {
    let text = newPost.current.value;
    props.dispatch(newTextActionCreator(text));
  };

  return (
    <div className={mpStyle.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onTextChange}
            ref={newPost}
            value={props.newText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={mpStyle.posts}>{postsElem}</div>
    </div>
  );
};

export default MyPosts;
