import { applyMiddleware, createStore } from 'redux';
import reducers from 'reducers';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleWare();

export default () => {
  const store = createStore(
    reducers(),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
