import "./container.css";

import { ContainerProps } from "./types";

export function Container({ children, title }: ContainerProps) {
  return (
    <div className="container">
      <div className="container-title">
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
}
