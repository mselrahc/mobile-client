import { itemIdSelector } from '../configs/selectors';
import { includes } from '../utils/string';
import { createSlice } from './sliceCreator';

const reducerOptions = {
  filter: (item, search) => includes(item.name, search),
  selectId: itemIdSelector,
};

const itemSlice = createSlice('items', 'items', reducerOptions);

export const {
  actions: itemsActions,
  reducers: itemsReducer,
  sagas: itemSagas,
  selectors: itemSelectors,
} = itemSlice;
