import { unitIdSelector } from '../configs/selectors';
import { anyIncludes } from '../utils/string';
import { createSlice } from './sliceCreator';

const reducerOptions = {
  filter: (unit, search) => anyIncludes([unit.name, unit.description], search),
  selectId: unitIdSelector,
};

const unitSlice = createSlice('units', 'units', reducerOptions);

export const {
  actions: unitsActions,
  reducers: unitsReducer,
  sagas: unitSagas,
  selectors: unitSelectors,
} = unitSlice;
