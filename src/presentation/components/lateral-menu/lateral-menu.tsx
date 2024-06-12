import "./lateral-menu.css";
import { LateralMenuProps } from "./type";

export function LateralMenu({ itemsMenu }: LateralMenuProps) {
  const listItems = itemsMenu.map((element) => (
    <li key={element.name}>
      <a href={element.component}>{element.name}</a>
    </li>
  ));
  return (
    <div className="panel-menu">
      <div className="perfil">
        <p>ICON</p>
        <a href="/perfil">Fulano Ciclano de Tal</a>
      </div>
      <ul>{listItems}</ul>
      <a href="/login">Logout</a>
    </div>
  );
}
