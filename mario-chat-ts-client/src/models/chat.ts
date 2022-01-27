// ---------------------------------------------- document interfaces
export interface IChatData {
  message: string;
}

export interface IChat extends IChatData {
  handle: string;
  [key: string]: any;
}

export const newChat = (): IChat => ({
  handle: "",
  message: "",
});
