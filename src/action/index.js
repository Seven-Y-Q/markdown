import types from '../type';

export const showExample = payload => ({
  type: types.SHOW_EXAMPLE,
  payload
})

export const setMarkdown = payload => ({
  type: types.SET_MARKDOWN,
  payload
})
