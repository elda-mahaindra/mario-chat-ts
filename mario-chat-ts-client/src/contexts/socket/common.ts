// ---------------------------------------------- modules import
import { IChat } from "models/chat";

export interface ISocketContextProviderState {
  chats: IChat[];
  currentlyTyping: string;
  onEmitChat: (chat: IChat) => void;
  onEmitTyping: (handle: string) => void;
}
