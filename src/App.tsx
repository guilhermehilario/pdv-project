/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/app.css";

import {
  Login,
  Register,
  SendRecoverEmail,
  NewPassword,
} from "./presentation/pages";

function App() {
  return (
    <div className="content">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <SendRecoverEmail /> */}
      <NewPassword />
    </div>
  );
}

export default App;
