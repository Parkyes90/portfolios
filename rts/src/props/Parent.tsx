import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="blue" onClick={() => console.log("Cliked")}>
      <div>hi</div>
    </ChildAsFC>
  );
};

export default Parent;
