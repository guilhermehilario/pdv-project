/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/app.css";
import "./styles/table.css";

import { AppRoutes } from "./main/routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
