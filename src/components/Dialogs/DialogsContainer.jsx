import React from "react";
import {sentMessageActionCreator, newMessageActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
let state = props.store.getState().dialogs;
console.log(state);
  let sendMessage = () => {
    props.store.dispatch(sentMessageActionCreator());
  };

  let onMessageChange = (willSend) => {
    props.store.dispatch(newMessageActionCreator(willSend));
  };

  return (
    <Dialogs  sendMessage={sendMessage} onMessageChange={onMessageChange} state={state}/>
  );
};

export default DialogsContainer;

//31 was
