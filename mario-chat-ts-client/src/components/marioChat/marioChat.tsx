// ---------------------------------------------- modules import
import TextInput from "components/inputs/textInput";

import { useMarioChat } from "./hooks/useMarioChat";

const MarioChat = () => {
  // ---------------------------------------------- local state
  const { chat, chats, currentlyTyping, onChange, onClick, onKeyPress } =
    useMarioChat();

  // ---------------------------------------------- content
  return (
    <div id="mario-chat">
      <div id="chat-window">
        <div id="output">
          {chats.map((chat, index) => (
            <p key={index}>
              <strong>{chat.handle}: </strong>
              {chat.message}
            </p>
          ))}
        </div>

        {currentlyTyping ? (
          <div id="feedback">
            <p>
              <em>{currentlyTyping} is typing a message...</em>
            </p>
          </div>
        ) : null}
      </div>

      <TextInput
        id="handle"
        name="handle"
        type="text"
        placeholder="Handle"
        onChange={onChange}
      />

      <TextInput
        id="message"
        name="message"
        type="text"
        placeholder="Message"
        value={chat.message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <button id="send" onClick={onClick}>
        Send
      </button>
    </div>
  );
};

export default MarioChat;
