import { useProductsMenuView, useProductsViewModel } from "../../../model";
import { ListProductsView } from "./list-products-view";

export function ListProducts() {
  const { itemsProducts } = useProductsViewModel();
  const { items } = useProductsMenuView();

  return <ListProductsView itemsMenu={items} itemsProducts={itemsProducts} />;
}
