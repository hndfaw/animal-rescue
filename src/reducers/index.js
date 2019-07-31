import { combineReducers } from 'redux';
import { rescueAnimalReducer } from './rescueAnimalRedcuer';

export const rootReducer = combineReducers({
  animalRescue: rescueAnimalReducer,
})