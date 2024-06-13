import { FloatingButton, Input, Panel } from "../../../components";
import { NewProductsProps } from "./types";

export function NewProductsView({ itemsMenu }: NewProductsProps) {
  return (
    <>
      <Panel title="Cadastro de Produto">
        <Input placeholder="Produto" />
        <Input placeholder="Marca" />
        <Input placeholder="Sabor" />
        <Input placeholder="Valor" type="number" />
        <Input placeholder="Quantidade" type="number" />
        <Input placeholder="Código de Barras" />
      </Panel>
      <FloatingButton items={itemsMenu} />
    </>
  );
}
