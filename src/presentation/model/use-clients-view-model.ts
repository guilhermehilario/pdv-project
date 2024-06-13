const titles = ["Id Cliente", "Nome", "CPF", "Conta"];

const clients = [
  {
    id: "1",
    name: "Lucas Francisco Batista",
    cpf: "99.999.999/99",
    accountValue: 130,
  },
  {
    id: "2",
    name: "Amanda Souza da Silva",
    cpf: "99.999.999/99",
    accountValue: 60,
  },
  {
    id: "3",
    name: "Sara Ferraz de Oliveira",
    cpf: "99.999.999/99",
    accountValue: 180,
  },
];

const account = [
  {
    id: "1",
    value: 30,
    product: "Skol - Lata",
    amount: 6,
    date: "11/08/2023",
    status: "pendent",
  },
  {
    id: "2",
    value: 30,
    product: "Skol - Lata",
    amount: 6,
    date: "13/08/2023",
    status: "pendent",
  },
  {
    id: "3",
    value: 30,
    product: "Skol - Lata",
    amount: 6,
    date: "15/08/2023",
    status: "pendent",
  },
  {
    id: "4",
    value: 40,
    product: "Skol - Lata",
    amount: 8,
    date: "19/08/2023",
    status: "pendent",
  },
];

export function useClientsViewModel() {
  const onClick = (id: string) => {
    console.log(id);
  };
  return {
    clients: clients.map((element) => ({ ...element, onClick })),
    titles,
    account,
  };
}
