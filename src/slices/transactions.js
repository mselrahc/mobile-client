import { transactionIdSelector } from '../configs/selectors';
import { includes } from '../utils/string';
import { createSlice } from './sliceCreator';

const reducerOptions = {
  filter: (transaction, search) => includes(transaction.description, search),
  selectId: transactionIdSelector,
};

const transactionSlice = createSlice(
  'transactions',
  'transactions',
  reducerOptions,
);

export const {
  actions: transactionsActions,
  reducers: transactionsReducer,
  sagas: transactionSagas,
  selectors: transactionSelectors,
} = transactionSlice;
