import { Button, ButtonGroup, Container, Input } from "../../../components";

export function RegisterView() {
  return (
    <Container title="Register">
      <Input name="name" placeholder="Name" />
      <Input name="email" placeholder="E-mail" />
      <Input name="cpf-cnpj" placeholder="CPF/CNPJ" />
      <Input name="phone" placeholder="Phone" />
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button>Register</Button>
      </ButtonGroup>
    </Container>
  );
}
