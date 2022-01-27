// ---------------------------------------------- modules import
import { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";

import { proxy } from "constants/proxy";
import { EventEnum } from "enums/event";
import { IChat } from "models/chat";

export const useSocketContext = () => {
  // ---------------------------------------------- local state
  const [chats, setChats] = useState<IChat[]>([]);
  const [currentlyTyping, setCurrentlyTyping] = useState("");
  const [socket, setSocket] = useState<Socket>(io(""));

  // ---------------------------------------------- handlers
  const handleEmitChat = (chat: IChat) => {
    socket.emit(EventEnum.CHAT, chat);
  };

  const handleEmitTyping = (handle: string) => {
    socket.emit(EventEnum.TYPING, handle);
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    const socket = io(proxy);

    setSocket(socket);
  }, []);

  useEffect(() => {
    socket.on(EventEnum.CHAT, (data: IChat) => {
      setChats((prev) => [...prev, data]);
    });

    socket.on(EventEnum.TYPING, (data: string) => {
      setCurrentlyTyping(data);
    });
  }, [socket]);

  // ---------------------------------------------- return value
  return {
    chats,
    currentlyTyping,
    onEmitChat: handleEmitChat,
    onEmitTyping: handleEmitTyping,
  };
};
