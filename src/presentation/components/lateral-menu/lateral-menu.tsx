import "./lateral-menu.css";
import { LateralMenuProps } from "./type";

export function LateralMenu({ itemsMenu }: LateralMenuProps) {
  const listItems = itemsMenu.map((element) => (
    <li key={element.name}>{element.name}</li>
  ));
  return (
    <div className="container-menu">
      <ul>{listItems}</ul>
    </div>
  );
}
