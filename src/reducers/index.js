import { combineReducers } from 'redux';
import { itemsReducer } from '../slices/items';
import { stocksReducer } from '../slices/stocks';
import { transactionsReducer } from '../slices/transactions';
import { unitsReducer } from '../slices/units';
import messageReducer from './message';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
  message: messageReducer,
  units: unitsReducer,
  stocks: stocksReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
