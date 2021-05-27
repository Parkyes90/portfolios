import React from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { CellsState } from "../state/reducers/cellsReducer";
import CellListItem from "./cell-list-item";

const CellList: React.FC = () => {
  const cellState = useTypedSelector((state) => state.cells) as CellsState;
  const cells = cellState.order.map((id) => cellState.data[id]);
  const renderedCells = cells.map((cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
