// ---------------------------------------------- modules import
import { useContext, useState } from "react";

import { SocketContext } from "contexts/socket/context";
import { IChat, newChat } from "models/chat";

export const useMarioChat = () => {
  // ---------------------------------------------- consume context
  const { chats, currentlyTyping, onEmitChat, onEmitTyping } =
    useContext(SocketContext);

  // ---------------------------------------------- local state
  const [chat, setChat] = useState<IChat>(newChat());

  // ---------------------------------------------- handlers
  const handleChange = (prop: string, value: string) =>
    setChat({
      ...chat,
      [prop]: value,
    });

  const handleClick = () => {
    onEmitChat(chat);

    setChat((prev) => ({ ...prev, message: "" }));
  };

  const handleKeyPress = () => {
    onEmitTyping(chat.handle);
  };

  // ---------------------------------------------- return value
  return {
    chat,
    chats,
    currentlyTyping,
    onChange: handleChange,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
  };
};
