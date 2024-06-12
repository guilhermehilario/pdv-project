import { useClientsMenuViewModel } from "../../../model";
import { ListClientsView } from "./list-clients-view";

export function ListClients() {
  const { items } = useClientsMenuViewModel();
  return <ListClientsView itemsMenu={items} />;
}
