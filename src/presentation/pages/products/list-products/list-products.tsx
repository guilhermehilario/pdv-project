import { useProductsViewModel } from "../../../model";
import { ListProductsView } from "./list-products-view";

export function ListProducts() {
  const { itemsProducts } = useProductsViewModel();

  return <ListProductsView itemsProducts={itemsProducts} />;
}
