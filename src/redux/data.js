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

  _addPost() {
    let endOfArr = this._data.posts[this._data.posts.length - 1];
    let curId = endOfArr.id + 1;
    let newPost = {
      id: curId,
      post: this._data.newText,
      likes: 0,
    };

    this._data.posts.push(newPost);
    this._callSub(this._data);
    this._data.newText = "";
  },

  _updateNewText(newPostText) {
    this._data.newText = newPostText;
    this._callSub(this._data);
  },

  _sendMessage() {
    let endOfArr = this._data.messages[this._data.messages.length - 1];
    let curId = endOfArr.id + 1;
    let newMessage = {
      id: curId,
      message: this._data.newMessageText,
    };

    this._data.messages.push(newMessage);
    this._callSub(this._data);
    this._data.newMessageText = "";
  },

  _updateMessage(newMsText) {
    this._data.newMessageText = newMsText;
    this._callSub(this._data);
  },

  dispatch(action) {
    if(action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPPADTE-NEW-TEXT") {
      this._updateNewText(action.newText);
    }
    if(action.type === "SEND-MESSAGE") {
      this._sendMessage();
    } else if (action.type === "UPPADTE-NEW-MESSAGE") {
      this._updateMessage(action.newMsText);
    }
  }

};
