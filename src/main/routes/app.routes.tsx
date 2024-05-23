import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Login,
  Register,
  SendRecoverEmail,
  Dashboard,
  NewPassword,
} from "../../presentation/pages";
import { Website } from "../../presentation/template/Website";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Website}>
          <Route path="/register" Component={Register} />
          <Route path="/send-recover-email" Component={SendRecoverEmail} />
          <Route path="/new-password" Component={NewPassword} />
          <Route path="/login" Component={Login} />

          <Route path="*" Component={Dashboard} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
