// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

import MarioChat from "components/marioChat/marioChat";

import SocketContextProvider from "contexts/socket/context";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <SocketContextProvider>
        <MarioChat />
      </SocketContextProvider>
    </div>
  );
};

export default App;
