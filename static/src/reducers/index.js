import { combineReducers } from 'redux';

export default () =>
  combineReducers({
    auth: () => {
      return {
        username: null
      };
    }
  });
