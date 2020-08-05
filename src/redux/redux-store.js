import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import friendsReducer from "./friendsReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers( {
    profile: profileReducer,
    dialogs: dialogReducer,
    friends: friendsReducer
});

let store = createStore(reducers);

export default store;