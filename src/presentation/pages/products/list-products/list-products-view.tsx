import { CardDisplay } from "../../../components";
import { useProductsViewModel } from "../../../model";

export function ListProductsView() {
  const { itemsProducts } = useProductsViewModel();

  return itemsProducts.map((element) => (
    <CardDisplay key={element.product} itemsProduct={element} />
  ));
}
