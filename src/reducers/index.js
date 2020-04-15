import { combineReducers } from 'redux';
import itemsReducer from './items';
import messageReducer from './message';
import itemReducer from './item';

const rootReducer = combineReducers({
  items: itemsReducer,
  item: itemReducer,
  message: messageReducer,
});

export default rootReducer;
