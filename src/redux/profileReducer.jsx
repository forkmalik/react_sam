const ADD__POST = "ADD__POST";
const UPDATE__NEW__TEXT = "UPDATE__NEW__TEX";

let initialState = {
  posts: [
    { id: 0, post: "Hello Darkness My Old Friend", likes: 33 },
    { id: 1, post: "I was born in Hell!", likes: 228 },
    { id: 2, post: "Dope!", likes: 666 },
  ],
  newText: "",
}

const profileReducer = (data = initialState, action) => {
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
