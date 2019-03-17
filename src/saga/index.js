import regeneratorRuntime from 'regenerator-runtime';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import types from '../type';

function* showExample(action) {
  console.log(action);
  yield put({type: types.SHOW_EXAMPLE_BOOTSTRAP});
}

function* mySaga() {
  yield takeEvery(types.SHOW_EXAMPLE, showExample);
}

export default mySaga;
