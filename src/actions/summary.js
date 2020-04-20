import { GET_STOCK_SUMMARY, GET_TRANSACTION_SUMMARY } from './constants';

export function getStockSummary() {
  return {
    type: GET_STOCK_SUMMARY.request,
  };
}

export function getTransactionSummary({ year, month, date }) {
  return {
    type: GET_TRANSACTION_SUMMARY.request,
    payload: {
      year,
      month,
      date,
    },
  };
}
