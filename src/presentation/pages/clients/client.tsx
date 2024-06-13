import { useParams } from "react-router-dom";

import { useClientsViewModel } from "../../model";
import { ClientView } from "./client-view";

export function Client() {
  const { clients } = useClientsViewModel();
  const { id } = useParams();
  const client = clients.find((item) => item.id === id);

  if (client?.account) {
    return <ClientView client={client} account={client.account} />;
  }
}
