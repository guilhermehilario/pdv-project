const items = [
  {
    title: "shopping_basket",
    link: "/products/new",
  },
  {
    title: "density_medium",
    link: "/products/list",
  },
  {
    title: "shopping_cart",
    link: "shop-products",
  },
];

export function useProductsMenuView() {
  return { items };
}
