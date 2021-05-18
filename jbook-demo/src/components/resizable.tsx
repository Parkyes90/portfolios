import { ResizableBox } from "react-resizable";
import React from "react";

interface ResizableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return <div>{children}</div>;
};

export default Resizable;
