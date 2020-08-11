import React from "react";
import mpStyle from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElem = props.state.posts.map((pts) => (
    <Post message={pts.post} likes_average={pts.likes} />
  ));

  let newPost = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onTextChange = () => {
    let text = newPost.current.value;
    props.onTextChange(text);
  };

  return (
    <div className={mpStyle.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onTextChange}
            ref={newPost}
            value={props.state.newText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={mpStyle.posts}>{postsElem}</div>
    </div>
  );
};

export default MyPosts;
