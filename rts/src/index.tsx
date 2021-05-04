import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import EventComponent from "./events/EventComponent";
const App = () => {
  return (
    <div>
      <GuestList />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
