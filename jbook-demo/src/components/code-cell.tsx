import "./code-cell.css";
import React, { useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import { useActions } from "../hooks/use-actions";
import { Cell } from "../state";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { CellsState } from "../state/reducers/cellsReducer";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundles = useTypedSelector((state) => state.bundles);
  const bundle = bundles && bundles[cell.id];
  const cumulativeCode = useTypedSelector((state) => {
    const { data, order } = state.cells as CellsState;
    const orderedCells = order.map((id) => data[id]);
    const cumulativeCode: string[] = [
      `
        import _React from 'react';
        import _ReactDOM from 'react-dom';
         const show = (value) => {
         const root = document.querySelector('$root');
         if (typeof value === 'object') {
          if (value.$$typeof && value.props) {
            _ReactDOM.render(value, root)
          } else {
            root.innerHTML = JSON.stringify(value);
          }
         } else {
          root.innerHTML = value;
          }
         }
        `,
    ];
    orderedCells.some((c) => {
      if (c.type === "code") {
        cumulativeCode.push(c.content);
      }
      return c.id === cell.id;
    });
    return cumulativeCode;
  });

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode.join("\n"));
      return () => {};
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode.join("\n"));
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [cumulativeCode.join("\n"), cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {!bundle || bundle.loading ? (
          <div className="progress-wrapper">
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          </div>
        ) : (
          <Preview code={bundle.code} err={bundle.err} />
        )}
      </div>
    </Resizable>
  );
};

export default CodeCell;
