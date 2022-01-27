// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

import SocketContextProvider from "contexts/socket/context";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <SocketContextProvider>This will be the app.</SocketContextProvider>
    </div>
  );
};

export default App;
