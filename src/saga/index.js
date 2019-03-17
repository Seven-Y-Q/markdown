import regeneratorRuntime from 'regenerator-runtime';
import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import types from '../type';

const getDB = (state) => state.db;
const getContent = (state) => state.current;
const getDocName = (state) => state.docName;

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

function* saveDocment() {
  const db = yield select(getDB);
  const content = yield select(getContent);
  const docName = yield select(getDocName);
  let result = yield db.put({
    _id: docName,
    content,
    docName
  });
}

function* getAllDocments() {
  const db = yield select(getDB);
  let result = yield db.allDocs({
    include_docs: true
  });
  let list = result.rows.map((item) => {
    return {
      docName: item.doc.docName,
      id: item.value.rev
    }
  });
  yield put({type: types.SET_LIST, payload: list});
}

function* getDocment({ payload }) {
  const { id, docName } = payload;
  const db = yield select(getDB);
  let result = yield db.get(docName, {
    rev: id
  });
  yield put({type: types.SELECT_EXSITING_DOC, payload: result});
}

function* mySaga() {
  yield takeEvery(types.SHOW_EXAMPLE, showExample);
  yield takeEvery(types.SAVE_DOC, saveDocment);
  yield takeEvery(types.GET_ALL_DOCS, getAllDocments);
  yield takeEvery(types.GET_DOC, getDocment);
}

export default mySaga;
