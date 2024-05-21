/* eslint-disable react/button-has-type */
import "./button.css";

import { ButtonProps } from "./types";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="button-field" {...props}>
      {children}
    </button>
  );
}
