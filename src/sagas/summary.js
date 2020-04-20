import api from '../api/summary';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_STOCK_SUMMARY,
  GET_TRANSACTION_SUMMARY,
} from '../actions/constants';
import Message from '../utils/message';

function* getStockSummary() {
  try {
    const data = yield call(api.getStockSummary);
    yield put({
      type: GET_STOCK_SUMMARY.success,
      payload: {
        data,
      },
    });
  } catch (error) {
    yield put({
      type: GET_STOCK_SUMMARY.failure,
      payload: {
        message: Message.error(error.message),
      },
    });
  }
}

export function* watchGetStockSummary() {
  yield takeLatest(GET_STOCK_SUMMARY.request, getStockSummary);
}

function* getTransactionSummary({ payload }) {
  const { year, month, date } = payload;

  try {
    const data = yield call(api.getTransactionSummary, { year, month, date });
    yield put({
      type: GET_TRANSACTION_SUMMARY.success,
      payload: {
        data,
      },
    });
  } catch (error) {
    yield put({
      type: GET_TRANSACTION_SUMMARY.failure,
      payload: {
        message: Message.error(error.message),
      },
    });
  }
}

export function* watchGetTransactionSummary() {
  yield takeLatest(GET_TRANSACTION_SUMMARY.request, getTransactionSummary);
}
