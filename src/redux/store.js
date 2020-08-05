import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


 let store = {
  _callSub() {
    console.log("Aaaaaaaar");
  },
  _data: {
    
    
    
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


export default store;
