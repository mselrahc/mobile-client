import { all, fork } from 'redux-saga/effects';
import { itemSagas } from '../slices/items';
import { unitSagas } from '../slices/units';

const rootSaga = function*() {
  const sagas = [...Object.values(itemSagas), ...Object.values(unitSagas)];
  yield all(sagas.map(saga => fork(saga)));
};

export default rootSaga;
