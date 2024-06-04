import "./container.css";

import { ContainerProps } from "./type";

export function Container({ children }: ContainerProps) {
  const classContainer = "container-component";
  return <div className={classContainer}>{children}</div>;
}
