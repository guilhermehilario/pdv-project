import { useClientsViewModel } from "../../model";
import { ClientView } from "./client-view";

export function Client() {
  const { clients, account } = useClientsViewModel();
  return <ClientView client={clients[0]} account={account} />;
}
