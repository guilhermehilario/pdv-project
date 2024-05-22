import { DashboardView } from "./dashboard-view";
import { useDashboardViewModel } from "./use-dashboard-view-model";

export function Dashboard() {
  const { itemsMenu } = useDashboardViewModel();

  return <DashboardView itemsMenu={itemsMenu} />;
}
