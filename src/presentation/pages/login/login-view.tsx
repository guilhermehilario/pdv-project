import "./login.css";

import { Button, ButtonGroup, Input } from "../../components";

export function LoginView() {
  return (
    <div className="login-container">
      <Input placeholder="User" label="Name: " />
      <Input placeholder="Password" />
      <ButtonGroup>
        <Button>Register</Button>
        <Button>Login</Button>
      </ButtonGroup>
    </div>
  );
}
