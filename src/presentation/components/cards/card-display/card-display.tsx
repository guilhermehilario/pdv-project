import "./card-display.css";

import { CardDisplayProps } from "./types";

export function CardDisplay({ itemsProducts }: CardDisplayProps) {
  const itemProduct = itemsProducts.map((element) => (
    <div key={element.product}>
      <div className="card-left">
        <p>{element.product}</p>
        <b>
          {element.measure} {element.typeMeasure}
        </b>
      </div>
      <div className="card-right">
        <p>R$ {element.value}</p>
        <b>{element.units} uni</b>
      </div>
    </div>
  ));
  return (
    <div className="card-display">
      <div className="card-display-image">Image</div>
      <div className="card-display-content"> {itemProduct} </div>
    </div>
  );
}
