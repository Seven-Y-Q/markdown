import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import saga from '../saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f));
sagaMiddleware.run(saga);

export default store;
