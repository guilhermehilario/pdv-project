import { FloatingButton } from "../../../components";
import { ListClientsProps } from "./types";

export function ListClientsView({
  itemsMenu,
  clients,
  onClick,
}: ListClientsProps) {
  const listClients = clients.map((client) => (
    <tr key={client.id} onClick={() => onClick(client.id)}>
      <td>{client.id}</td>
      <td>{client.name}</td>
      <td>{client.cpf}</td>
      <td>R$ {client.accountValue}</td>
    </tr>
  ));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Total Conta</th>
          </tr>
        </thead>
        <tbody>{listClients}</tbody>
      </table>
      <FloatingButton items={itemsMenu} />
    </>
  );
}
