import { FloatingButton, Input, Panel } from "../../../components";
import { useClientsMenuViewModel } from "../../../model";

export function NewClientsView() {
  const { items } = useClientsMenuViewModel();
  return (
    <>
      <Panel title="Novo Cliente">
        <Input />
      </Panel>
      <FloatingButton items={items} />
    </>
  );
}
