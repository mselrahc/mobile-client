import { combineReducers } from 'redux';
import itemsReducer from './items';
import messageReducer from './message';

const rootReducer = combineReducers({
  items: itemsReducer,
  message: messageReducer,
});

export default rootReducer;
