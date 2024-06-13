/* eslint-disable jsx-a11y/label-has-associated-control */
import { Panel } from "../../components";
import { ClientViewProps } from "./types";

export function ClientView({ client, account }: ClientViewProps) {
  const accountProducts = account?.map((item) => (
    <tr key={item.id}>
      <td>{item.product}</td>
      <td>{item.amount}</td>
      <td>{item.date}</td>
      <td>R$ {item.value}</td>
      <td>{item.status}</td>
    </tr>
  ));

  if (client) {
    return (
      <>
        <Panel title={client.name}>
          <label>ID:{client.id}</label>
          <label>CPF:{client.cpf}</label>
        </Panel>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quant</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{accountProducts}</tbody>
        </table>
      </>
    );
  }
}
