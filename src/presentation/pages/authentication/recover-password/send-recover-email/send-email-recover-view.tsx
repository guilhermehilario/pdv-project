import { Button, ButtonGroup, Panel, Input } from "../../../../components";

export function SendRecoverEmailView() {
  return (
    <Panel title="Send Recover Email">
      <Input name="email" placeholder="E-mail" />
      <ButtonGroup>
        <Button>Return</Button>
        <Button>Recovery</Button>
      </ButtonGroup>
    </Panel>
  );
}
