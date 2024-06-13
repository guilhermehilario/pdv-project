import { CardDisplay, FloatingButton } from "../../../components";
import { ListProductsProps } from "./types";

export function ListProductsView({
  itemsProducts,
  itemsMenu,
}: ListProductsProps) {
  const Product = itemsProducts.map((element) => (
    <CardDisplay key={element.id} itemsProduct={element} />
  ));
  return (
    <>
      {Product}
      <FloatingButton items={itemsMenu} />
    </>
  );
}
