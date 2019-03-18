import regeneratorRuntime from 'regenerator-runtime';
import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import types from '../type';

const getDB = (state) => state.db;
const getContent = (state) => state.current;
const getDocName = (state) => state.docName;
const getCurrentRev = (state) => state.currentRev;
const getList = (state) => state.list;

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
  const currentRev = yield select(getCurrentRev);
  let doc = {
    _id: docName,
    content,
    docName
  };
  if (currentRev) {
    doc._rev = currentRev;
  }
  let result = yield db.put(doc);
}

function* removeDocment({ payload }) {
  const { id, docName } = payload;
  const db = yield select(getDB);
  const list = yield select(getList);
  let result = yield db.remove(docName, id);
  if (result.ok) {
    yield put({type: types.SET_LIST, payload: list.filter((item) => item.id !== id)});
  }
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
  yield takeEvery(types.REMOVE_DOC, removeDocment);
  yield takeEvery(types.GET_ALL_DOCS, getAllDocments);
  yield takeEvery(types.GET_DOC, getDocment);
}

export default mySaga;
