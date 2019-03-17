import types from '../type';

export const showExample = payload => ({
  type: types.SHOW_EXAMPLE,
  payload
})

export const setMarkdown = payload => ({
  type: types.SET_MARKDOWN,
  payload
})

export const toggleSidebar = payload => ({
  type: types.TOGGLE_SIDEBAR,
  payload
})

export const newDocment = payload => ({
  type: types.NEW_DOC,
  payload
})
