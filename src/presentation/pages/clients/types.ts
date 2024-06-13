export type AccountProps = {
  id?: string;
  value?: number;
  product?: string;
  amount?: number;
  date?: string;
  status?: string;
};

export type ClientProps = {
  id: string;
  name: string;
  cpf: string;
  accountValue: number;
  account: AccountProps[];
  onClick?: (id: string) => void;
};

export type ClientViewProps = {
  client?: ClientProps;
  account?: AccountProps[];
};
