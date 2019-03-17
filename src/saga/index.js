import regeneratorRuntime from 'regenerator-runtime';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import types from '../type';

function* showExample({ payload }) {
  const { key } = payload;
  switch (key) {
    case 'Bootstrap':
      yield put({type: types.SHOW_EXAMPLE_BOOTSTRAP});
      break;
    case 'React':
      yield put({type: types.SHOW_EXAMPLE_REACT});
      break;
    case 'Vue':
      yield put({type: types.SHOW_EXAMPLE_VUE});
      break;
    default:
      console.log('show examples')
  }
}

function* mySaga() {
  yield takeEvery(types.SHOW_EXAMPLE, showExample);
}

export default mySaga;
