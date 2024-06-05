export type ItemsProductProps = {
  product: string;
  value: number;
  units?: number;
  measure?: number;
  typeMeasure?: "kg" | "g" | "l" | "ml";
};

export type CardDisplayProps = {
  itemsProducts: ItemsProductProps[];
};
