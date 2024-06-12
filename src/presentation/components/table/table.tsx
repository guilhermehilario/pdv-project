import "./table.css";

import { TableProps } from "./type";

export function Table({ itemsTable, titleHeader }: TableProps) {
  const titles = titleHeader.map((element, index) => (
    <th key={element[index]}>{element}</th>
  ));

  const items = itemsTable.map((element) => (
    <tr
      key={element.id}
      onClick={() => {
        if (element?.onClick && element.id) {
          element.onClick(element.id);
        }
      }}
    >
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.cpf}</td>
      <td>R$ {element.accountValue}</td>
    </tr>
  ));
  return (
    <table className="table">
      <thead>
        <tr>{titles}</tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
}
