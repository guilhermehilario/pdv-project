import "./container.css";

import { ContainerProps } from "./type";

export function Container({ children }: ContainerProps) {
  const classContainer = "container";
  return <div className={classContainer}>{children}</div>;
}
