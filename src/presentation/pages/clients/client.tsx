import { useParams } from "react-router-dom";

import { useClientsViewModel } from "../../model";
import { ClientView } from "./client-view";

export function Client() {
  const { clients, account } = useClientsViewModel();
  const { id } = useParams();
  const client = clients.find((item) => item.id === id);
  return <ClientView client={client} account={account} />;
}
