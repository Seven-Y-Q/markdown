import types from '../type';

export const showExample = payload => ({
  type: types.SHOW_EXAMPLE,
  payload
});

export const setMarkdown = payload => ({
  type: types.SET_MARKDOWN,
  payload
});

export const setDocName = payload => ({
  type: types.SET_DOC_NAME,
  payload
});

export const toggleSidebar = payload => ({
  type: types.TOGGLE_SIDEBAR,
  payload
});

export const newDocment = payload => ({
  type: types.NEW_DOC,
  payload
});

export const saveDocment = payload => ({
  type: types.SAVE_DOC,
  payload
});

export const removeDocment = payload => ({
  type: types.REMOVE_DOC,
  payload
});

export const getAllDocments = payload => ({
  type: types.GET_ALL_DOCS,
  payload
});

export const getDocment = payload => ({
  type: types.GET_DOC,
  payload
});

export const showModal = payload => ({
  type: types.SHOW_MODAL,
  payload
});

export const hideModal = payload => ({
  type: types.HIDE_MODAL,
  payload
});
