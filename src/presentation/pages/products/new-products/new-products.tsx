import { useProductsMenuView } from "../../../model";
import { NewProductsView } from "./new-products-view";

export function NewProducts() {
  const { items } = useProductsMenuView();
  return <NewProductsView itemsMenu={items} />;
}
