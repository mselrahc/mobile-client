import { stockIdSelector } from '../configs/selectors';
import { anyIncludes } from '../utils/string';
import { createSlice } from './sliceCreator';

const reducerOptions = {
  filter: (stock, search) =>
    anyIncludes(
      [stock.item.name, stock.unit.name, stock.unit.description],
      search,
    ),
  selectId: stockIdSelector,
};

const stockSlice = createSlice('stocks', 'stocks', reducerOptions);

export const {
  actions: stocksActions,
  reducers: stocksReducer,
  sagas: stockSagas,
  selectors: stockSelectors,
} = stockSlice;
