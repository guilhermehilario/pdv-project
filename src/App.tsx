/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/app.css";
import { Login, Register } from "./presentation/pages";

function App() {
  return (
    <div className="content">
      {/* <Login />  */}
      <Register />
    </div>
  );
}

export default App;
