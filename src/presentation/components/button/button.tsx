/* eslint-disable react/button-has-type */
import "./button.css";

import { ButtonProps, ButtonGroupProps } from "./types";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="button-field" {...props}>
      {children}
    </button>
  );
}

export function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className="button-group">{children}</div>;
}
