import "./panel.css";

import { PanelProps } from "./types";

export function Panel({ children, title }: PanelProps) {
  return (
    <div className="panel">
      <div className="panel-title">
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
}
