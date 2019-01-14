import { combineReducers } from 'redux';
import { deckReducer } from '../features/deck';

const rootReducer = combineReducers({
  deck: deckReducer
});

export default rootReducer;
