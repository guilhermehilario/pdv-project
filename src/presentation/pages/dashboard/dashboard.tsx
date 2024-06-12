import { DashboardView } from "./dashboard-view";

const floatingMenuItems = [
  { title: "phone", link: "/phone" },
  { title: "email", link: "/email" },
  { title: "chat", link: "/chat" },
  { title: "home", link: "/home" },
];

export function Dashboard() {
  return <DashboardView floatingMenu={floatingMenuItems} />;
}
