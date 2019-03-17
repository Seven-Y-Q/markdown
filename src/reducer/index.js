import initState from '../store/initState';
import types from '../type';

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
    case types.SET_MARKDOWN:
      return {
        ...state,
        current: action.payload
      };
      break;
    default:
      return state;
  }
}

export default reducer;
