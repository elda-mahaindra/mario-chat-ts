// ---------------------------------------------- modules import
import { FunctionComponent, createContext } from "react";

import { ISocketContextProviderState } from "./common";
import { useSocketContext } from "./hooks";

// ---------------------------------------------- create context
const initialState: ISocketContextProviderState = {
  chats: [],
  currentlyTyping: "",
  onEmitChat: () => {
    return;
  },
  onEmitTyping: () => {
    return;
  },
};

export const SocketContext =
  createContext<ISocketContextProviderState>(initialState);

// ---------------------------------------------- the component
const SocketContextProvider: FunctionComponent = ({ children }) => {
  // ---------------------------------------------- local state
  const { chats, currentlyTyping, onEmitChat, onEmitTyping } =
    useSocketContext();

  // ---------------------------------------------- content
  return (
    <SocketContext.Provider
      value={{ chats, currentlyTyping, onEmitChat, onEmitTyping }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
