const SEND__MESSAGE = "SEND__MESSAGE";
const UPDATE__NEW__MESSAGE = "UPDATE__NEW__MESSAGE";

const dialogReducer = (data, action) => {
  switch (action.type) {
    case SEND__MESSAGE:
      let endOfArr = data.messages[data.messages.length - 1];
      let curId = endOfArr.id + 1;
      let newMessage = {
        id: curId,
        message: data.newMessageText,
      };

      data.messages.push(newMessage);
      data.newMessageText = "";
      return data;
    case UPDATE__NEW__MESSAGE:
      data.newMessageText = action.newMsText;
      return data;
    default:
      return data;
  }
};

export default dialogReducer;


export const sentMessageActionCreator = () => {
  return { type: SEND__MESSAGE };
};

export const newMessageActionCreator = (willSend) => {
  return { type: UPDATE__NEW__MESSAGE, newMsText: willSend };
};
