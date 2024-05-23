import { Button, ButtonGroup, Panel, Input } from "../../../../components";

export function NewPasswordView() {
  return (
    <Panel title="New Password">
      <Input name="password" placeholder="New Password" />
      <Input name="confirm-password" placeholder="Confirm Password" />
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button>Confirm</Button>
      </ButtonGroup>
    </Panel>
  );
}
