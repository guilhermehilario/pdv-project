import "./card-display.css";

import { CardDisplayProps } from "./types";

export function CardDisplay({ itemsProduct }: CardDisplayProps) {
  return (
    <div className="card-display" key={itemsProduct.product}>
      <div className="card-display-image">Image</div>
      <div className="card-display-content">
        <div className="card-left">
          <p>{itemsProduct.product}</p>
          <b>
            {itemsProduct.measure} {itemsProduct.typeMeasure}
          </b>
        </div>
        <div className="card-right">
          <p>R$ {itemsProduct.value}</p>
          <b>{itemsProduct.units} uni</b>
        </div>
      </div>
    </div>
  );
}
