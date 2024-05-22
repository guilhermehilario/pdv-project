import { Button, ButtonGroup, Container, Input } from "../../../../components";

export function SendRecoverEmailView() {
  return (
    <Container title="Send Recover Email">
      <Input name="email" placeholder="E-mail" />
      <ButtonGroup>
        <Button>Return</Button>
        <Button>Recovery</Button>
      </ButtonGroup>
    </Container>
  );
}
