import { watchGetItems, watchSaveItem, watchRemoveItem } from './items';
import { all, fork } from 'redux-saga/effects';
import { unitSagas } from '../slices/units';

const rootSaga = function*() {
  const sagas = [
    watchGetItems,
    watchSaveItem,
    watchRemoveItem,
    ...Object.values(unitSagas),
  ];
  yield all(sagas.map(saga => fork(saga)));
};

export default rootSaga;
