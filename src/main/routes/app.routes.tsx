import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Login,
  Register,
  SendRecoverEmail,
  Dashboard,
  NewPassword,
  ListProducts,
  NewProducts,
  ListClients,
  NewClients,
  Client,
} from "../../presentation/pages";
import { Website } from "../../presentation/template/Website";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Website}>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/send-recover-email" Component={SendRecoverEmail} />
          <Route path="/new-password" Component={NewPassword} />

          <Route path="/products/list" Component={ListProducts} />
          <Route path="/products/new" Component={NewProducts} />

          <Route path="client/:id" Component={Client} />
          <Route path="clients/list" Component={ListClients} />
          <Route path="clients/new" Component={NewClients} />

          <Route path="*" Component={Dashboard} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
