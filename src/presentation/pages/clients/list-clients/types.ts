import { FloatingButtonItemProps } from "../../../components";
import { ClientProps } from "../types";

export type ListClientsProps = {
  clients: ClientProps[];
  itemsMenu: FloatingButtonItemProps[];
  onClick: (id: string) => void;
};
