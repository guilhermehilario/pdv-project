import { Panel, Button, ButtonGroup, Input } from "../../../components";
import { LoginViewProps } from "./types";

export function LoginView({
  onSubmitLogin,
  registerClick,
  formData,
  onChange,
}: LoginViewProps) {
  return (
    <Panel title="Login">
      <form className="form-panel" onSubmit={onSubmitLogin}>
        <Input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
        />
        <ButtonGroup>
          <Button onClick={registerClick}>Register</Button>
          <Button type="submit">Login</Button>
        </ButtonGroup>
      </form>
    </Panel>
  );
}
