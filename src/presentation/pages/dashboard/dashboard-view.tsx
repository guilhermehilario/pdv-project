/* eslint-disable @typescript-eslint/no-unused-vars */
import { FloatingButton } from "../../components";
import { DashboardProps } from "./type";

export function DashboardView({ floatingMenu }: DashboardProps) {
  return (
    <div className="content">
      <p>Dashboard</p>
      <FloatingButton items={floatingMenu} />
    </div>
  );
}
