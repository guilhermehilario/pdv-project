import { FloatingButton, Input, Panel } from "../../../components";
import { ListClientsProps } from "./type";

export function ListClientsView({ itemsMenu }: ListClientsProps) {
  return (
    <>
      <Panel title="Listar Clientes">
        <Input />
      </Panel>
      <FloatingButton items={itemsMenu} />
    </>
  );
}
