import { createStore } from 'redux';
import initState from './initState';

let reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_EXAMPLE_BOOTSTRAP':
      return {
        ...state,
        current: state.examples.Bootstrap
      };
      break;
    case 'SHOW_EXAMPLE_REACT':
      return {
        ...state,
        current: state.examples.React
      };
      break;
    default:
      return state;
  }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
