import { LateralMenu } from "../../components";
import { DashboardProps } from "./type";

export function DashboardView({ itemsMenu }: DashboardProps) {
  return <LateralMenu itemsMenu={itemsMenu} />;
}
