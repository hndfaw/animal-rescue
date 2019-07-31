export const rescueAnimalReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_RESCUE_ANIMAL_DATA':
      return action.data
    default:
      return state;
  }
}