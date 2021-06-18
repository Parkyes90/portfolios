import { Dispatch } from "redux";
import { Action } from "../actions";
import { saveCells } from "../action-creators";

export const persistMiddleware = ({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) => {
  return (next: (action: Action) => void) => (action: Action) => {
    next(action);
  };
};
