import "./input.css";

import { InputProps } from "./types";

export function Input({ label, name, ...props }: InputProps) {
  return (
    <div className="input-panel">
      <label htmlFor={name} className="input-label">
        {label}
      </label>

      <input name={name} className="input-field" {...props} />
    </div>
  );
}
