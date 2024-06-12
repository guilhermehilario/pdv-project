const itemsMenu = [
  {
    name: "Dashboard",
    component: "/",
  },
  {
    name: "Products",
    component: "/products/list",
  },
  {
    name: "Clients",
    component: "/clients/list",
  },
  {
    name: "Settings",
    component: "/settings",
  },
];

export function useDashboardViewModel() {
  return { itemsMenu };
}
