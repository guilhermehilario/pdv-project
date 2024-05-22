const itemsMenu = [
  {
    name: "Dashboard",
    component: "#",
  },
  {
    name: "Products",
    component: "/products",
  },
  {
    name: "Clients",
    component: "/clients",
  },
  {
    name: "Settings",
    component: "/settings",
  },
];

export function useDashboardViewModel() {
  return { itemsMenu };
}
