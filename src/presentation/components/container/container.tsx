import "./container.css";

import { ContainerProps } from "./types";

export function Container({ children }: ContainerProps) {
  return <div className="container"> {children}</div>;
}
