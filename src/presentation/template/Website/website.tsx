import "./website.css";

import { Outlet } from "react-router-dom";

import { Container, LateralMenu } from "../../components";
import { useDashboardViewModel } from "../../model";

export function Website() {
  const { itemsMenu } = useDashboardViewModel();
  return (
    <div className="website">
      <LateralMenu itemsMenu={itemsMenu} />
      <Container classContainer="container-screen">
        <Outlet />
      </Container>
    </div>
  );
}
