import { CardDisplay } from "../../../components";
import { useProductsViewModel } from "../../../model";

export function ListProductsView() {
  const { itemsProducts } = useProductsViewModel();
  return <CardDisplay itemsProducts={itemsProducts} />;
}
