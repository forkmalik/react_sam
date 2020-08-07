import React from "react";
import dStyle from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
  console.log(props);
  let dialogsElements = props.state.dialogs.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessage = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let willSend = newMessage.current.value;
    props.onMessageChange(willSend);
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
          value={props.state.newMessageText}
        ></textarea>
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;

//31 was
