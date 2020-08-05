import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


export let store = {
  _callSub() {
    console.log("Aaaaaaaar");
  },
  _data: {
    dialogs: [
      { id: 0, name: "Vlad" },
      { id: 1, name: "Nastya" },
      { id: 2, name: "Blet" },
      { id: 3, name: "Senya" },
      { id: 4, name: "Jin" },
      { id: 5, name: "Sosed" },
    ],
    messages: [
      { id: 0, message: "Hi" },
      { id: 1, message: "Fuck you!" },
      { id: 2, message: "I'll kill you!" },
    ],
    newMessageText: "",
    posts: [
      { id: 0, post: "Hello Darkness My Old Friend", likes: 33 },
      { id: 1, post: "I was born in Hell!", likes: 228 },
      { id: 2, post: "Dope!", likes: 666 },
    ],
    newText: "",
    friends: [
      {
        id: 0,
        name: "Nastya",
        img_url:
          "https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg",
      },
      {
        id: 1,
        name: "Vlad",
        img_url:
          "https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",
      },
      {
        id: 2,
        name: "Anton",
        img_url:
          "https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",
      },
    ],
  },
  getData() {
    return this._data;
  },

  subscribe(observer) {
    this._callSub = observer;
  },

  dispatch(action) {
    profileReducer(this._data, action);
    dialogReducer(this._data, action);
    this._callSub(this._data);
  },
};



