import { DashboardView } from "./dashboard-view";

const floatingMenuItems = [{ title: "phone", link: "/phone" }];

export function Dashboard() {
  return <DashboardView floatingMenu={floatingMenuItems} />;
}
