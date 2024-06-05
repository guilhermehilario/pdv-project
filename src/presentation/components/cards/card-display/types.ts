export type ItemsProductProps = {
  product: string;
  value: number;
  units?: number;
  measure?: number;
  typeMeasure?: "kg" | "ml";
};

export type CardDisplayProps = {
  itemsProducts: ItemsProductProps[];
};
