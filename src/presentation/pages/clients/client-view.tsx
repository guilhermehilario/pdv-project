/* eslint-disable jsx-a11y/label-has-associated-control */
import { Panel, Table } from "../../components";
import { ClientViewProps } from "./types";

export function ClientView({ client, account }: ClientViewProps) {
  const titlesTable = ["ID", "Produto", "Quant.", "Valor", "Status"];

  return (
    <>
      <Panel title={client.name}>
        <label>ID:{client.id}</label>
        <label>CPF:{client.cpf}</label>
      </Panel>
      <Table titleHeader={titlesTable} itemsTable={account} />
    </>
  );
}
