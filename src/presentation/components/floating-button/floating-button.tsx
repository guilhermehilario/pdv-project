/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import "./floating-button.css";

import { FloatingButtonProps } from "./type";

export function FloatingButton({ items }: FloatingButtonProps) {
  const [itsOpen, setItsOpen] = useState(false);

  const toggleVisibility = () => setItsOpen((prev) => !prev);
  const menuItems = items?.map((element) => (
    <a className="float-element" key={element.title} href={element.link}>
      <span>
        <i className="material-icons">{element.title}</i>
      </span>
    </a>
  ));
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="floating-container">
        <div className="element-container">{itsOpen ? menuItems : null}</div>
        <div className="floating-button" onClick={toggleVisibility}>
          +
        </div>
      </div>
    </>
  );
}
