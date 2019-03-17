import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import saga from '../saga';

const sagaMiddleware = createSagaMiddleware()
const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), devTools));
sagaMiddleware.run(saga);

export default store;
