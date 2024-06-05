import "./container.css";

import { ContainerProps } from "./type";

export function Container({ children, classContainer }: ContainerProps) {
  return <div className={classContainer}>{children}</div>;
}
