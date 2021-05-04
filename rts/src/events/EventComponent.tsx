import React, { SyntheticEvent } from "react";

const EventComponent: React.FC = () => {
  const onChange = (e: SyntheticEvent) => {
    console.log(e);
  };
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
