import { ItemsProductProps } from "../components/cards/card-display/types";

const itemsProducts: ItemsProductProps[] = [
  {
    id: "1",
    product: "Skol beats - tradicional",
    value: 10.0,
    units: 30,
    measure: 250,
    typeMeasure: "ml",
  },
  {
    id: "2",
    product: "51 Ice - Balada",
    value: 6.5,
    units: 25,
    measure: 265,
    typeMeasure: "ml",
  },
  {
    id: "3",
    product: "Askov - Ice Blue",
    value: 16.99,
    units: 25,
    measure: 1,
    typeMeasure: "l",
  },
];

export function useProductsViewModel() {
  return { itemsProducts };
}
