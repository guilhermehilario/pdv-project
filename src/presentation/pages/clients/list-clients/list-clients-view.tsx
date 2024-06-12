import { FloatingButton, Table } from "../../../components";
import { useClientsViewModel } from "../../../model";
import { ListClientsProps } from "./types";

export function ListClientsView({ itemsMenu }: ListClientsProps) {
  const { items, titles } = useClientsViewModel();
  return (
    <>
      <Table titleHeader={titles} itemsTable={items} />
      <FloatingButton items={itemsMenu} />
    </>
  );
}
