import { commonAxios } from '../utils/api';
import { isNotBlankDigitString } from '../utils/string';

export async function getStockSummary() {
  return await commonAxios.get('stocks/summary');
}

export async function getTransactionSummary({ year, month, date }) {
  let path = 'transactions/summary';
  if (isNotBlankDigitString(year)) {
    path += '/' + year;
    if (isNotBlankDigitString(month)) {
      path += '/' + month;
      if (isNotBlankDigitString(date)) {
        path += '/' + date;
      }
    }
  }

  return await commonAxios.get(path);
}

export default {
  getStockSummary,
  getTransactionSummary,
};
