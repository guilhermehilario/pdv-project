import "./floating-button.css";

import { FloatingButtonProps } from "./type";

export function FloatingButton({ menuItemObj }: FloatingButtonProps) {
  const menuItems = menuItemObj.map((element) => (
    <a href={element.link} key={element.title}>
      <i className="material-icons">element.title</i>
    </a>
  ));
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="floating-container">
        <div className="floating-button">+</div>
        <div className="element-container">
          <span className="float-element tooltip-left">{menuItems}</span>
          <span className="float-element">
            <a href="/">
              <i className="material-icons">email</i>
            </a>
          </span>
          <span className="float-element">
            <a href="/">
              <i className="material-icons">chat</i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
