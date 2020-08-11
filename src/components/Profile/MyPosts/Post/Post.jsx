import React from "react";
import postStyle from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={postStyle.item}>
      <img
        src="https://miravox.com.ua/image/cache/catalog/p/enl_131601-1000x1000.jpg"
        alt="avatar_image"
      ></img>
      <span>{props.message}</span>
      <p>Likes: {props.likes_average}</p>    
      <button>Like</button>
    </div>
  );
};

export default Post;
