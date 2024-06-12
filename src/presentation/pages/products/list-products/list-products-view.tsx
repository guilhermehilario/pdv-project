import { CardDisplay, FloatingButton } from "../../../components";
import { ListProductsProps } from "./type";

export function ListProductsView({
  itemsProducts,
  itemsMenu,
}: ListProductsProps) {
  return itemsProducts.map((element) => (
    <>
      <CardDisplay key={element.product} itemsProduct={element} />
      <FloatingButton items={itemsMenu} />
    </>
  ));
}
