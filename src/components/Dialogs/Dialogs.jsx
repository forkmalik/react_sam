import React from "react";
import dStyle from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessage = React.createRef();

  let sendMessage = () => {
    props.dispatch({type: "SEND-MESSAGE"});
  };

  let onMessageChange = () => {
    let willSend = newMessage.current.value;
    let action = {
      type: "UPPADTE-NEW-MESSAGE",
      newMsText: willSend
    }
    props.dispatch(action);
  };

  return (
    <div className={dStyle.dialogs}>
      <div className={dStyle.dialogs__items}>{dialogsElements}</div>
      <div className={dStyle.messages}>{messagesElements}</div>
      <div className={dStyle.messageArea}>
        <textarea
          onChange={onMessageChange}
          name="Message"
          cols="120"
          rows="2"
          ref={newMessage}
          value={props.newMessageText}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;

//31 was
