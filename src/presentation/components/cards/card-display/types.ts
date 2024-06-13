export type ItemsProductProps = {
  id: string;
  product: string;
  value: number;
  units?: number;
  measure?: number;
  typeMeasure?: "kg" | "g" | "l" | "ml";
};

export type CardDisplayProps = {
  itemsProduct: ItemsProductProps;
};
