import "./website.css";

import { Outlet } from "react-router-dom";

import { LateralMenu } from "../../components";
import { useDashboardViewModel } from "../../model";

export function Website() {
  const { itemsMenu } = useDashboardViewModel();
  return (
    <div className="website">
      <LateralMenu itemsMenu={itemsMenu} />
      <Outlet />
    </div>
  );
}
