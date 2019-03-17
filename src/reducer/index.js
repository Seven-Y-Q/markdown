import initState from '../store/initState';
import types from '../type';

let reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_EXAMPLE_BOOTSTRAP:
      return {
        ...state,
        current: state.examples.Bootstrap.content,
        docName: 'Bootstrap.md'
      };
      break;
    case types.SHOW_EXAMPLE_REACT:
      return {
        ...state,
        current: state.examples.React.content,
        docName: 'React.md'
      };
      break;
    case types.SHOW_EXAMPLE_VUE:
      return {
        ...state,
        current: state.examples.Vue.content,
        docName: 'Vue.md'
      };
      break;
    case types.SET_MARKDOWN:
      return {
        ...state,
        current: action.payload
      };
      break;
    case types.SET_DOC_NAME:
      return {
        ...state,
        docName: action.payload
      };
      break;
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      };
      break;
    case types.NEW_DOC:
      return {
        ...state,
        isSidebarOpen: false,
        current: '',
        docName: ''
      };
      break;
    case types.SET_LIST:
      return {
        ...state,
        list: action.payload
      };
      break;
    case types.SELECT_EXSITING_DOC:
      return {
        ...state,
        current: action.payload.content,
        docName: action.payload.docName
      };
      break;
    default:
      return state;
  }
}

export default reducer;
