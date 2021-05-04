import React, { useEffect, useRef, useState } from "react";

const GuestList: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef.current);
    }
  }, [inputRef]);

  return (
    <div>
      <h3>Guest List</h3>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
      {guests.map((g, i) => (
        <div key={i}>{g}</div>
      ))}
    </div>
  );
};

export default GuestList;
