import { Container, Button, ButtonGroup, Input } from "../../../components";

export function LoginView() {
  return (
    <Container title="Login">
      <Input placeholder="User" label="Name: " />
      <Input placeholder="Password" />
      <ButtonGroup>
        <Button>Register</Button>
        <Button>Login</Button>
      </ButtonGroup>
    </Container>
  );
}
