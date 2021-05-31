import React, { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { CellsState } from "../state/reducers/cellsReducer";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

const CellList: React.FC = () => {
  const cellState = useTypedSelector((state) => state.cells) as CellsState;
  const cells = cellState.order.map((id) => cellState.data[id]);
  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  );
};

export default CellList;
