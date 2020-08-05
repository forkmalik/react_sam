const ADD__POST = "ADD__POST";
const UPDATE__NEW__TEXT = "UPDATE__NEW__TEX";

const profileReducer = (data, action) => {
  switch (action.type) {
    case ADD__POST:
      let endOfArr = data.posts[data.posts.length - 1];
      let curId = endOfArr.id + 1;
      let newPost = {
        id: curId,
        post: data.newText,
        likes: 0,
      };
      data.posts.push(newPost);
      data.newText = "";
      return data;
    case UPDATE__NEW__TEXT:
      data.newText = action.newText;
      return data;
    default:
      return data;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD__POST };
};

export const newTextActionCreator = (text) => {
  return { type: UPDATE__NEW__TEXT, newText: text };
};

export default profileReducer;
