import { watchGetItems, watchSaveItem, watchRemoveItem } from './items';
import { all, spawn } from 'redux-saga/effects';

const rootSaga = function*() {
  const sagas = [watchGetItems, watchSaveItem, watchRemoveItem];
  yield all(sagas.map(saga => spawn(saga)));
};

export default rootSaga;
