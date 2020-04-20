import { all, fork } from 'redux-saga/effects';
import { itemSagas } from '../slices/items';
import { unitSagas } from '../slices/units';
import { stockSagas } from '../slices/stocks';
import { transactionSagas } from '../slices/transactions';
import { watchLogin, watchLogout, watchRestoreToken } from './auth';

const rootSaga = function*() {
  const sagas = [
    watchLogin,
    watchLogout,
    watchRestoreToken,
    ...Object.values(itemSagas),
    ...Object.values(unitSagas),
    ...Object.values(stockSagas),
    ...Object.values(transactionSagas),
  ];
  yield all(sagas.map(saga => fork(saga)));
};

export default rootSaga;
