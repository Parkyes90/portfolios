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
      <AddCell previousCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell previousCellId={null} forceVisible={cells.length === 0} />
      {renderedCells}
    </div>
  );
};

export default CellList;
