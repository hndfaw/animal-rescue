import { combineReducers } from 'redux';
import { rescueAnimalReducer } from './rescueAnimalRedcuer';
import { donationsReducer } from './donationsReducer';

export const rootReducer = combineReducers({
  animalRescue: rescueAnimalReducer,
  donations: donationsReducer,
})