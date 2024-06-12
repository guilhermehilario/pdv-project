const titles = ["Id Cliente", "Nome", "CPF", "Conta"];

const items = [
  {
    id: 1,
    name: "Lucas Francisco Batista",
    cpf: "99.999.999/99",
    accountValue: 130,
  },
  {
    id: 2,
    name: "Amanda Souza da Silva",
    cpf: "99.999.999/99",
    accountValue: 60,
  },
  {
    id: 3,
    name: "Sara Ferraz de Oliveira",
    cpf: "99.999.999/99",
    accountValue: 180,
  },
];

export function useClientsViewModel() {
  return { items, titles };
}
