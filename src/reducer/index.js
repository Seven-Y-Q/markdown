import initState from '../store/initState';
import types from '../reducer';

let reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_EXAMPLE_BOOTSTRAP:
      return {
        ...state,
        current: state.examples.Bootstrap
      };
      break;
    case types.SHOW_EXAMPLE_REACT:
      return {
        ...state,
        current: state.examples.React
      };
      break;
    default:
      return state;
  }
}

export default reducer;