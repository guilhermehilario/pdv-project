import { Button, ButtonGroup, Container, Input } from "../../../../components";

export function NewPasswordView() {
  return (
    <Container title="New Password">
      <Input name="password" placeholder="New Password" />
      <Input name="confirm-password" placeholder="Confirm Password" />
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button>Confirm</Button>
      </ButtonGroup>
    </Container>
  );
}
