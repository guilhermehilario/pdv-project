import { useNavigate } from "react-router-dom";

import { useClientsMenuViewModel, useClientsViewModel } from "../../../model";
import { ListClientsView } from "./list-clients-view";

export function ListClients() {
  const { items } = useClientsMenuViewModel();
  const { clients } = useClientsViewModel();
  const navigate = useNavigate();

  const onClick = (id: string) => {
    navigate(`/client/${id}`);
  };

  return (
    <ListClientsView itemsMenu={items} clients={clients} onClick={onClick} />
  );
}
