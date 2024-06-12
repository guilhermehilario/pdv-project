import { FloatingButtonItemProps } from "../../../components";

export type ListClientsProps = {
  itemsMenu: FloatingButtonItemProps[];
};

export type ClientProps = {
  id?: number;
  name?: string;
  cpf?: string;
  accountValue?: number;
  onClick?: (id: number) => void;
};
