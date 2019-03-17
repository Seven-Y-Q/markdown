import regeneratorRuntime from 'regenerator-runtime';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import types from '../type';

// function* fetchUser(action) {
//    try {
//       const user = yield call(Api.fetchUser, action.payload.userId);
//       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }

function* showExample(action) {
  console.log(action);
  yield put({type: types.SHOW_EXAMPLE_BOOTSTRAP});
}

function* mySaga() {
  yield takeEvery(types.SHOW_EXAMPLE, showExample);
}

export default mySaga;
