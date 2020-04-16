import { combineReducers } from 'redux';
import itemsReducer from './items';
import messageReducer from './message';
import { unitsReducer } from '../slices/units';

const rootReducer = combineReducers({
  items: itemsReducer,
  message: messageReducer,
  units: unitsReducer,
});

export default rootReducer;
