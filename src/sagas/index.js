import { watchGetItems, watchSaveItem } from './items';
import { all, spawn } from 'redux-saga/effects';

const rootSaga = function*() {
  const sagas = [watchGetItems, watchSaveItem];
  yield all(sagas.map(saga => spawn(saga)));
};

export default rootSaga;
