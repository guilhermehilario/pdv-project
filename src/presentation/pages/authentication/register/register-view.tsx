import { Button, ButtonGroup, Panel, Input } from "../../../components";
import { RegisterViewProps } from "./types";

export function RegisterView({
  formData,
  onCancel,
  onChange,
  onSubmitRegister,
}: RegisterViewProps) {
  return (
    <Panel title="Register">
      <form className="form-panel" onSubmit={onSubmitRegister}>
        <Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={onChange}
        />
        <Input
          name="email"
          placeholder="E-mail"
          type="email"
          value={formData.email}
          onChange={onChange}
        />
        <Input
          name="cpfcnpj"
          placeholder="CPF/CNPJ"
          value={formData.cpfcnpj}
          onChange={onChange}
        />
        <Input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={onChange}
        />
        <Input
          name="password"
          placeholder="password"
          type="password"
          value={formData.password}
          onChange={onChange}
        />
        <ButtonGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="submit">Register</Button>
        </ButtonGroup>
      </form>
    </Panel>
  );
}
