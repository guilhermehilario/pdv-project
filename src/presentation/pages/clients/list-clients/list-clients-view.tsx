import { FloatingButton, Table } from "../../../components";
import { useClientsViewModel } from "../../../model";
import { ListClientsProps } from "./types";

export function ListClientsView({ itemsMenu }: ListClientsProps) {
  const { clients, titles } = useClientsViewModel();
  return (
    <>
      <Table titleHeader={titles} itemsTable={clients} />
      <FloatingButton items={itemsMenu} />
    </>
  );
}
