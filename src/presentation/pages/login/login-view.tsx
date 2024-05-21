import { Button, Input } from "../../components";

import "./login.css";

export function LoginView() {
  return (
    <div className="login-container">
      <Input placeholder="User" label="Name: " />
      <Input placeholder="Password" />
      <div className="button-group">
        <Button>Register</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
}
