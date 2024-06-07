import { CardDisplay } from "../../../components";
import { ListProductsProps } from "./type";

export function ListProductsView({ itemsProducts }: ListProductsProps) {
  return itemsProducts.map((element) => (
    <CardDisplay key={element.product} itemsProduct={element} />
  ));
}
