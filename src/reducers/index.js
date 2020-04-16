import { combineReducers } from 'redux';
import messageReducer from './message';
import { unitsReducer } from '../slices/units';
import { itemsReducer } from '../slices/items';

const rootReducer = combineReducers({
  items: itemsReducer,
  message: messageReducer,
  units: unitsReducer,
});

export default rootReducer;
