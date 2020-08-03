import React from "react";
import pStyle from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={pStyle.profile}>
      <ProfileInfo />
      <MyPosts posts={props.posts} dispatch={props.dispatch} newText={props.newText}/>
    </div>
  );
};

export default Profile;
